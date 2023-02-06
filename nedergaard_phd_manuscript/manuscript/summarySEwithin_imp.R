# see also seWithin function in hausekeep package
# https://hauselin.github.io/hausekeep/reference/seWithin.html
summarySE2 <- function (data = NULL, measurevar, groupvars = NULL, na.rm = TRUE, conf.interval = 0.95) {
  library(data.table)
  data <- data.table(data)
  
  length2 <- function(x, na.rm = FALSE) {
    if (na.rm) 
      sum(!is.na(x))
    else length(x)
  }
  
  datac <- data[, .(unlist(lapply(.SD, length2, na.rm = na.rm)), 
                    unlist(lapply(.SD, mean, na.rm = na.rm)),
                    unlist(lapply(.SD, sd, na.rm = na.rm))),
                by = groupvars, .SDcols = measurevar]
  names(datac) <- c(groupvars, "N", measurevar, "sd")
  setkeyv(datac, groupvars)
  
  datac[, se := unlist(sd) / sqrt(unlist(N))] #compute standard error
  
  ciMult <- qt(conf.interval / 2 + 0.5, unlist(datac$N) - 1)
  datac[, ci := se * ciMult]
  datac <- data.frame(datac)
  return(datac)
}

normDataWithin2 <- function (data = NULL, idvar, measurevar, betweenvars = NULL, 
                             na.rm = TRUE) {
  library(data.table); library(dplyr)
  data <- data.table(data)
  setkeyv(data, idvar)
  
  data.subjMean <- data[, .(unlist(lapply(.SD, mean, na.rm = na.rm))), by = idvar, .SDcols = measurevar]
  names(data.subjMean) <- c(idvar, 'subjMean')
  data <- merge(data, data.subjMean)
  setkeyv(data, c(idvar, betweenvars))
  
  measureNormedVar <- paste(measurevar, "Normed", sep = "")
  data <- data.frame(data)
  
  data[, measureNormedVar] <- data[, measurevar] - unlist(data[, "subjMean"]) + mean(data[, measurevar], na.rm = na.rm)
  return(data)
}


#normed and un-normed versions
summarySEwithin2 <- function (data = NULL, measurevar, betweenvars = NULL, withinvars = NULL, 
                              idvar = NULL, na.rm = TRUE, conf.interval = 0.95) {
  
  # Ensure that the betweenvars and withinvars are factors
  factorvars <- sapply(data[, c(betweenvars, withinvars), drop = FALSE], 
                       FUN = is.factor)
  if (!all(factorvars)) {
    nonfactorvars <- names(factorvars)[!factorvars]
    message("Automatically converting the following non-factors to factors: ", 
            paste(nonfactorvars, collapse = ", "))
    data[nonfactorvars] <- lapply(data[nonfactorvars], factor)
  }
  
  # Get the means from the un-normed data
  datac <- summarySE2(data, measurevar, groupvars=c(betweenvars, withinvars),
                      na.rm=na.rm, conf.interval=conf.interval)
  
  # Drop all the unused columns (these will be calculated with normed data)
  datac$sd <- NULL
  datac$se <- NULL
  datac$ci <- NULL
  
  # Norm each subject's data
  ndata <- normDataWithin2(data, idvar, measurevar, betweenvars, na.rm)
  
  # This is the name of the new column
  measurevar_n <- paste(measurevar, "Normed", sep="")
  
  # Collapse the normed data - now we can treat between and within vars the same
  ndatac <- summarySE2(ndata, measurevar_n, groupvars=c(betweenvars, withinvars),
                       na.rm=na.rm, conf.interval=conf.interval)
  
  # Apply correction from Morey (2008) to the standard error and confidence interval
  #  Get the product of the number of conditions of within-S variables
  nWithinGroups    <- prod(vapply(ndatac[,withinvars, drop=FALSE], FUN= function(x) length(levels(x)),
                                  FUN.VALUE=numeric(1)))
  correctionFactor <- sqrt( nWithinGroups / (nWithinGroups-1) )
  
  # Apply the correction factor
  ndatac$sd <- unlist(ndatac$sd) * correctionFactor
  ndatac$se <- unlist(ndatac$se) * correctionFactor
  ndatac$ci <- unlist(ndatac$ci) * correctionFactor
  
  # Combine the un-normed means with the normed results
  merged <- merge(datac, ndatac)
  #merged[, 1] <- as.numeric(as.character(merged[, 1]))
  #merged <- merged[order(merged[, 1]), ]
  return(merged)
}