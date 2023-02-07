# processing script
library(tidyverse)

# read in aggregated raw data
anendophasia_raw <- read.csv('raw_data/anendophasia_raw_anonymized.csv', row.names = 1)

# make separate dataframes for each experiment and remove NA columns
rhyme_df <- anendophasia_raw[which(anendophasia_raw$experiment == 'rhyme'),]
rhyme_df <- rhyme_df[ , colSums(is.na(rhyme_df)) < nrow(rhyme_df)]
task_switch_df <- anendophasia_raw[which(anendophasia_raw$experiment == 'task_switching'),]
task_switch_df <- task_switch_df[ , colSums(is.na(task_switch_df)) < nrow(task_switch_df)]
same_different_df <- anendophasia_raw[which(anendophasia_raw$experiment == 'same_different'),]
same_different_df <- same_different_df[ , colSums(is.na(same_different_df)) < nrow(same_different_df)]
phon_sim_df <- anendophasia_raw[which(anendophasia_raw$experiment == 'phon_sim'),]
phon_sim_df <- phon_sim_df[ , colSums(is.na(phon_sim_df)) < nrow(phon_sim_df)]

######################### verbal working memory  ################################
# move rows 42-46 up one
shift <- function(x, n){
  c(x[-(seq(n))], rep(NA, n))
}
phon_sim_df$response <- tolower(phon_sim_df$response)
# figure out a way to get the words and responses anyway
get_presented_word <- function(stim_string,position) {
  index <- position +2
  first_attempt <- unlist(str_split(stim_string, pattern='">'))[index]
  word <- unlist(str_split(first_attempt, pattern='<'))[1]
  return(word)
}
phon_sim_df <- phon_sim_df%>% 
  dplyr::arrange(worker_id, trial_index) %>%
  tidyr::fill(talk_out_loud, .direction = 'up')
test <- phon_sim_df %>%
  filter(!is.na(strategy_free_ans)) %>%
  select(worker_id, strategy_free_ans)
non_strategists <- phon_sim_df %>%
  filter(!worker_id %in% test$worker_id) %>%
  mutate(strategy_free_ans = 'no_answer')
strategists <-  phon_sim_df %>%
  filter(worker_id %in% test$worker_id)
phon_sim_df <- bind_rows(non_strategists, strategists)
phon_sim_df <- phon_sim_df%>% 
  dplyr::arrange(worker_id, trial_index) %>%
  tidyr::fill(strategy_free_ans, .direction = 'up')

# get data in a more reliable way
phon_sim_df$word_1 <- sapply(phon_sim_df$stimulus, get_presented_word,1)
phon_sim_df$word_2 <- sapply(phon_sim_df$stimulus, get_presented_word,2)
phon_sim_df$word_3 <- sapply(phon_sim_df$stimulus, get_presented_word,3)
phon_sim_df$word_4 <- sapply(phon_sim_df$stimulus, get_presented_word,4)
phon_sim_df$word_5 <- sapply(phon_sim_df$stimulus, get_presented_word,5)

get_word_response <- function(resp_string,position) {
  index <- position +1
  first_attempt <- unlist(str_split(resp_string, pattern=':'))[index]
  second_attempt <- unlist(str_split(first_attempt, pattern=','))
  word <- str_extract(second_attempt[1], "[a-z]+")
  return(word)
}
phon_sim_df$response_1 <- sapply(phon_sim_df$response, get_word_response,1)
phon_sim_df$response_2 <- sapply(phon_sim_df$response, get_word_response,2)
phon_sim_df$response_3 <- sapply(phon_sim_df$response, get_word_response,3)
phon_sim_df$response_4 <- sapply(phon_sim_df$response, get_word_response,4)
phon_sim_df$response_5 <- sapply(phon_sim_df$response, get_word_response,5)
# shift one up
phon_sim_df$response_1 <- shift(phon_sim_df$response_1,1)
phon_sim_df$response_2 <- shift(phon_sim_df$response_2,1)
phon_sim_df$response_3 <- shift(phon_sim_df$response_3,1)
phon_sim_df$response_4 <- shift(phon_sim_df$response_4,1)
phon_sim_df$response_5 <- shift(phon_sim_df$response_5,1)

phon_sim_trials <- subset(phon_sim_df, !is.na(response_1))
phon_sim_trials$response_1 <- ifelse(is.na(phon_sim_trials$response_1), 'none', phon_sim_trials$response_1)
phon_sim_trials$response_2 <- ifelse(is.na(phon_sim_trials$response_2), 'none', phon_sim_trials$response_2)
phon_sim_trials$response_3 <- ifelse(is.na(phon_sim_trials$response_3), 'none', phon_sim_trials$response_3)
phon_sim_trials$response_4 <- ifelse(is.na(phon_sim_trials$response_4), 'none', phon_sim_trials$response_4)
phon_sim_trials$response_5 <- ifelse(is.na(phon_sim_trials$response_5), 'none', phon_sim_trials$response_5)

phon_sim_trials$score <- ifelse(phon_sim_trials$word_1 == phon_sim_trials$response_1, 1,0)
phon_sim_trials$score <- ifelse(phon_sim_trials$word_2 == phon_sim_trials$response_2, phon_sim_trials$score+1,phon_sim_trials$score+0)
phon_sim_trials$score <- ifelse(phon_sim_trials$word_3 == phon_sim_trials$response_3, phon_sim_trials$score+1,phon_sim_trials$score+0)
phon_sim_trials$score <- ifelse(phon_sim_trials$word_4 == phon_sim_trials$response_4, phon_sim_trials$score+1,phon_sim_trials$score+0)
phon_sim_trials$score <- ifelse(phon_sim_trials$word_5 == phon_sim_trials$response_5, phon_sim_trials$score+1,phon_sim_trials$score+0)

phonSet = c('bought', 'sort','taut','caught','wart')
orthoSet = c('rough', 'cough', 'through','dough','bough')
ctrlSet = c('plea','friend', 'sleigh','row','board')
phon_sim_trials <- subset(phon_sim_trials, phase=='experiment')

phon_sim_trials$original_word_set <- ifelse(phon_sim_trials$word_1 %in% phonSet, 'phonSet', 
                                            ifelse(phon_sim_trials$word_1 %in% orthoSet, 'orthoSet',
                                                   ifelse(phon_sim_trials$word_1 %in% ctrlSet, 'ctrlSet',NA)))
phon_sim_trials <- subset(phon_sim_trials, trial_type != 'survey-text')
# compute score in any position
phon_sim_trials$score_any_position <- NA
for (i in 1:length(phon_sim_trials$score)) {
  first_p = 0
  second_p = 0
  third_p = 0
  fourth_p = 0
  fifth_p = 0
  target_set <- c(phon_sim_trials$word_1[i],phon_sim_trials$word_2[i],phon_sim_trials$word_3[i],
                  phon_sim_trials$word_4[i],phon_sim_trials$word_5[i])
  if (phon_sim_trials$response_1[i] %in% target_set) {
    first_p = 1
  } 
  if (phon_sim_trials$response_2[i] %in% target_set) {
    second_p = 1
  } 
  if (phon_sim_trials$response_3[i] %in% target_set) {
    third_p = 1
  } 
  if (phon_sim_trials$response_4[i] %in% target_set) {
    fourth_p = 1
  } 
  if (phon_sim_trials$response_5[i] %in% target_set) {
    fifth_p = 1
  } 
  points = sum(first_p, second_p, third_p, fourth_p, fifth_p)
  phon_sim_trials$score_any_position[i] <- points
}
# create trial number per participant
phon_sim_trials <- phon_sim_trials %>%
  group_by(worker_id) %>%
  dplyr::arrange(trial_index, by_group=T) %>%
  dplyr::mutate(trial_no_ptcp = row_number())

# get strategies
phon_strategies <- phon_sim_trials %>%
  filter(!is.na(strategy_free_ans)) %>%
  select(strategy_free_ans, high_low_verbal, talk_out_loud, worker_id) %>%
  group_by(strategy_free_ans, high_low_verbal, talk_out_loud, worker_id) %>%
  tally()
phon_strategies$experiment <- 'phon_sim'

phon_sim_trials <- phon_sim_trials %>%
  select(-c(question_order, trial_type,response))

# write csv
write.csv(phon_sim_trials, 'processed_data/phon_sim_trials.csv')

######################### rhyme judgment  #######################################
rhyming_image_agreement <- read.csv('rhyming_image_agreement.csv', row.names = 1)
rhyme_df <- rhyme_df%>% 
  dplyr::arrange(worker_id, trial_index) %>%
  tidyr::fill(talk_out_loud, .direction = 'up')
test <- rhyme_df %>%
  filter(!is.na(strategy_free_ans)) %>%
  select(worker_id, strategy_free_ans)
non_strategists <- rhyme_df %>%
  filter(!worker_id %in% test$worker_id) %>%
  mutate(strategy_free_ans = 'no_answer')
strategists <-  rhyme_df %>%
  filter(worker_id %in% test$worker_id)
rhyme_df <- bind_rows(non_strategists, strategists)
rhyme_df <- rhyme_df%>% 
  dplyr::arrange(worker_id, trial_index) %>%
  tidyr::fill(strategy_free_ans, .direction = 'up')
# put in name agreement from separate experiment
colnames(rhyming_image_agreement)[1] <- 'image_1'
colnames(rhyming_image_agreement)[2] <- 'name_agreement_img1'
rhyme_df <- merge(rhyme_df, rhyming_image_agreement, all.x = T, by = 'image_1')
colnames(rhyming_image_agreement)[1] <- 'image_2'
colnames(rhyming_image_agreement)[2] <- 'name_agreement_img2'
rhyme_df <- merge(rhyme_df, rhyming_image_agreement, all.x = T, by = 'image_2')
# only keep actual trials
rhyming_trials <- subset(rhyme_df, !is.na(correct))
rhyming_trials$correct <- ifelse(rhyming_trials$correct, 1, 0)
rhyming_trials$rt <- as.numeric(rhyming_trials$rt)
# exclude low nameability pairs
excluded<- c("visual/bin.png", "visual/chin.png", 'visual/cab.png','visual/crab.png',
             'visual/cake.png','visual/rake.png', 'visual/wave.png','visual/cave.png',
             'visual/park.png','visual/shark.png')
rhyming_trials <- rhyming_trials[-which(rhyming_trials$image_1 %in% excluded),]
# only experiment trials, not training
rhyming_trials <- rhyming_trials[-which(rhyming_trials$phase == 'training'),]
rhyming_trials <- rhyming_trials %>%
  select(-c(wait_time, trial_type))
rhyming_trials$cor_key <- tolower(rhyming_trials$cor_key)
rhyming_trials$type <- ifelse(rhyming_trials$type == 'non-orthoh', 'non-ortho', rhyming_trials$type)
# insert trial number per participant
rhyming_trials <- rhyming_trials %>%
  group_by(worker_id) %>%
  dplyr::arrange(trial_index, by_group=T) %>%
  dplyr::mutate(trial_no_ptcp = row_number())
# look at free answer strategies
rhyme_strategies <- rhyming_trials %>%
  filter(!is.na(strategy_free_ans)) %>%
  select(strategy_free_ans, high_low_verbal, talk_out_loud, worker_id) %>%
  group_by(strategy_free_ans, high_low_verbal, talk_out_loud, worker_id) %>%
  tally()
rhyme_strategies$experiment <- 'rhyme'

# save csv
write.csv(rhyming_trials, 'processed_data/rhyming_trials.csv')

######################### task switching ########################################
get_condition <- function(response) {
  first_attempt <- unlist(str_split(response, pattern='"'))[2]
  condition <- unlist(str_split(first_attempt, pattern='_'))[1]
  return(condition)
}
task_switch_df$condition <- sapply(task_switch_df$response, get_condition)
task_switch_df <- task_switch_df%>% 
  dplyr::arrange(worker_id, trial_index) %>%
  tidyr::fill(talk_out_loud, .direction = 'up')
test <- task_switch_df %>%
  filter(!is.na(strategy_free_ans)) %>%
  select(worker_id, strategy_free_ans)
non_strategists <- task_switch_df %>%
  filter(!worker_id %in% test$worker_id) %>%
  mutate(strategy_free_ans = 'no_answer')
strategists <-  task_switch_df %>%
  filter(worker_id %in% test$worker_id)
task_switch_df <- bind_rows(non_strategists, strategists)
task_switch_df <- task_switch_df%>% 
  dplyr::arrange(worker_id, trial_index) %>%
  tidyr::fill(strategy_free_ans, .direction = 'up')
task_switch_trials <- task_switch_df[-c(which(is.na(task_switch_df$condition))),] 
task_switch_trials <- subset(task_switch_trials, phase !='training') 
task_switch_trials$correct <- ifelse(task_switch_trials$correct,1,0)
task_switch_trials$rt <- as.numeric(task_switch_trials$rt)
task_switch_trials$stimulus <- as.numeric(task_switch_trials$stimulus)
task_switch_trials$answer <- as.numeric(task_switch_trials$answer)
nas <- task_switch_trials[which(is.na(task_switch_trials$answer)),] 

# we can see in response that they tried to answer correctly
task_switch_trials$correct[which(is.na(task_switch_trials$answer) & 
                                   task_switch_trials$worker_id == 'Ny0Ml3uz')] <- 0
task_switch_trials$answer[which(is.na(task_switch_trials$answer) & 
                                  task_switch_trials$worker_id == 'Ny0Ml3uz')] <- 35
task_switch_trials$correct[which(is.na(task_switch_trials$answer) & 
                                   task_switch_trials$worker_id == 'RHqN8QGm')] <- 1
task_switch_trials$answer[which(is.na(task_switch_trials$answer) & 
                                  task_switch_trials$worker_id == 'RHqN8QGm')] <- 68
task_switch_trials$correct[which(is.na(task_switch_trials$answer) & 
                                   task_switch_trials$worker_id == 'ycrZF9Ui' &
                                   task_switch_trials$trial_index == 1159)] <- 1
task_switch_trials$answer[which(is.na(task_switch_trials$answer) & 
                                  task_switch_trials$worker_id == 'ycrZF9Ui' &
                                  task_switch_trials$trial_index == 1159)] <- 50
task_switch_trials$correct[which(is.na(task_switch_trials$answer) & 
                                   task_switch_trials$worker_id == 'ycrZF9Ui' &
                                   task_switch_trials$trial_index == 1166)] <- 1
task_switch_trials$answer[which(is.na(task_switch_trials$answer) & 
                                  task_switch_trials$worker_id == 'ycrZF9Ui' &
                                  task_switch_trials$trial_index == 1166)] <- 70
task_switch_trials$correct[which(is.na(task_switch_trials$answer) & 
                                   task_switch_trials$worker_id == 'ycrZF9Ui' &
                                   task_switch_trials$trial_index == 1250)] <- 1
task_switch_trials$answer[which(is.na(task_switch_trials$answer) & 
                                  task_switch_trials$worker_id == 'ycrZF9Ui' &
                                  task_switch_trials$trial_index == 1250)] <- 80
task_switch_trials$correct[which(is.na(task_switch_trials$answer) & 
                                   task_switch_trials$worker_id == 'xnNpmgQR')] <- 1
task_switch_trials$answer[which(is.na(task_switch_trials$answer) & 
                                  task_switch_trials$worker_id == 'xnNpmgQR')] <- 80
task_switch_trials$correct[which(is.na(task_switch_trials$answer) & 
                                   task_switch_trials$worker_id == '8yyEgSuX')] <- 1
task_switch_trials$answer[which(is.na(task_switch_trials$answer) & 
                                  task_switch_trials$worker_id == '8yyEgSuX')] <- 16

task_switch_trials <- task_switch_trials %>% 
  dplyr::mutate(correct_if_add = stimulus+3, correct_if_subtract=stimulus-3) %>% 
  dplyr::mutate(correct_2 = as.numeric(answer==if_else(operation=="subtract",correct_if_subtract,correct_if_add)))
identical(task_switch_trials$correct, task_switch_trials$correct_2)
# they are the same, no need to use correct_2
task_switch_trials <- task_switch_trials %>%
  select(-correct_2)

# get rid of trials above 10 secs
task_switch_trials <- task_switch_trials[which(task_switch_trials$rt < 10000),] # 73 trials are over 10 secs
task_switch_trials$operation <- ifelse(task_switch_trials$condition == 'addition','add',NA)
task_switch_trials$operation <- ifelse(task_switch_trials$condition == 'subtraction','subtract',task_switch_trials$operation)

test <- task_switch_trials %>% # put switching operation in other three conditions
  filter(!condition %in% c('subtraction', 'addition')) %>%
  group_by(worker_id, condition) %>%
  dplyr::arrange(trial_index, .by_group = T) %>%
  dplyr::mutate(operation = rep(c('add', 'subtract'), length.out=length(worker_id)))
task_switch_trials <- subset(task_switch_trials, condition%in% c('subtraction', 'addition'))
task_switch_trials <- bind_rows(task_switch_trials, test) # put them back together

# create trial number by participant
task_switch_trials <- task_switch_trials %>%
  group_by(worker_id) %>%
  dplyr::arrange(trial_index, .by_group = TRUE) %>%
  dplyr::mutate(trial_no_ptcpt = row_number())

# insert list completion time
list_completion_times <- task_switch_trials %>%
  filter(phase == 'experiment') %>%
  group_by(worker_id,condition) %>%
  dplyr::summarise(list_completion = sum(rt/1000))
task_switch_trials <- merge(task_switch_trials, list_completion_times, by=c('worker_id', 'condition'), all.x=T)

# look at operation accuracy regardless of arithmetic
task_switch_trials$operation_used <- ifelse(task_switch_trials$stimulus < task_switch_trials$answer, 'add', 'subtract')
task_switch_trials$operation_used <- as.factor(task_switch_trials$operation_used)
task_switch_trials$operation <- as.factor(task_switch_trials$operation)
task_switch_trials$correct_operation <- ifelse(task_switch_trials$operation == task_switch_trials$operation_used,1,0)

# look at arithmetic accuracy regardless of operation
task_switch_trials$correct_arithmetic <- ifelse(as.numeric(task_switch_trials$answer) - 3 == task_switch_trials$stimulus | 
                                                  as.numeric(task_switch_trials$answer) + 3 == task_switch_trials$stimulus,1,0)

# find better way to score switching
only_uncued <-
  task_switch_trials %>%
  group_by(worker_id) %>%
  dplyr::arrange(trial_index, .by_group = TRUE) %>%
  filter(condition=='uncued') %>%
  dplyr::mutate(switching_is_correct = ifelse(operation_used == lag(operation_used), 0, 1))
uncued_count <- only_uncued %>%
  group_by(high_low_verbal, correct) %>%
  tally()
only_uncued$switching_is_correct <- ifelse(is.na(only_uncued$switching_is_correct), 1, only_uncued$switching_is_correct)
# make sure that they also have to do the arithmetic right
only_uncued$switching_is_correct <- ifelse(only_uncued$correct_arithmetic == 0, 0, only_uncued$switching_is_correct)
task_switch_trials <- subset(task_switch_trials, condition != 'uncued')
task_switch_trials$switching_is_correct <- NA
task_switch_trials <- bind_rows(task_switch_trials, only_uncued)

only_colorcue <-
  task_switch_trials %>%
  group_by(worker_id) %>%
  dplyr::arrange(trial_index,.by_group = TRUE) %>%
  filter(condition=='colorcue') %>%
  dplyr::mutate(switching_is_correct = ifelse(operation_used == lag(operation_used), 0, 1))
colorcue_count <- only_colorcue %>%
  group_by(high_low_verbal, correct) %>%
  tally()
table(only_colorcue$switching_is_correct, useNA = 'ifany')
only_colorcue$switching_is_correct <- ifelse(is.na(only_colorcue$switching_is_correct), 1, only_colorcue$switching_is_correct)
# make sure that they also have to do the arithmetic right
only_colorcue$switching_is_correct <- ifelse(only_colorcue$correct_arithmetic == 0, 0, only_colorcue$switching_is_correct)
task_switch_trials <- subset(task_switch_trials, condition != 'colorcue')
task_switch_trials <- bind_rows(task_switch_trials, only_colorcue)

only_symbolcue <-
  task_switch_trials %>%
  group_by(worker_id) %>%
  dplyr::arrange(trial_index,.by_group = TRUE) %>%
  filter(condition=='symbolcue') %>%
  dplyr::mutate(switching_is_correct = ifelse(operation_used == lag(operation_used), 0, 1))
symbolcue_count <- only_symbolcue %>%
  group_by(high_low_verbal, correct) %>%
  tally()
table(only_symbolcue$switching_is_correct, useNA = 'ifany')
only_symbolcue$switching_is_correct <- ifelse(is.na(only_symbolcue$switching_is_correct), 1, only_symbolcue$switching_is_correct)
# make sure that they also have to do the arithmetic right
only_symbolcue$switching_is_correct <- ifelse(only_symbolcue$correct_arithmetic == 0, 0, only_symbolcue$switching_is_correct)
task_switch_trials <- subset(task_switch_trials, condition != 'symbolcue')
task_switch_trials <- bind_rows(task_switch_trials, only_symbolcue)

# add in addition and subtraction
addition <- subset(task_switch_trials, condition=='addition')
subtraction <- subset(task_switch_trials, condition=='subtraction')
addition$switching_is_correct <- addition$correct
subtraction$switching_is_correct <- subtraction$correct
task_switch_trials <- subset(task_switch_trials, !condition %in% c('addition', 'subtraction'))
task_switch_trials <- bind_rows(task_switch_trials, addition, subtraction)

# fix strange trials
what <- task_switch_trials %>% filter(correct==1 & correct_operation==0)
# something wrong with operation rather than with correct
only_weird <- task_switch_trials[which(task_switch_trials$correct==1 & task_switch_trials$correct_operation==0),]
only_weird$operation <- ifelse(only_weird$operation == 'add', 'subtract', 
                               ifelse(only_weird$operation == 'subtract', 'add', NA))
temp <- task_switch_trials[-which(task_switch_trials$correct==1 & task_switch_trials$correct_operation==0),]
task_switch_trials <- bind_rows(temp, only_weird)
task_switch_trials$operation_used <- ifelse(task_switch_trials$stimulus < task_switch_trials$answer, 'add', 'subtract')
task_switch_trials$correct_operation <- ifelse(task_switch_trials$operation == task_switch_trials$operation_used,1,0)
task_switch_trials %>% filter(correct==1 & correct_operation==0)
# now zero weird - nice 

# get strategy
TS_strategies <- task_switch_trials %>%
  filter(!is.na(strategy_free_ans)) %>%
  select(strategy_free_ans, high_low_verbal, talk_out_loud, worker_id) %>%
  group_by(strategy_free_ans, high_low_verbal, talk_out_loud, worker_id) %>%
  tally()
TS_strategies$experiment <- 'task_switching'

# save csv
task_switch_trials <- task_switch_trials %>%
  select(-c(question_order, trial_type,response))
write.csv(task_switch_trials, 'processed_data/task_switch_trials.csv')

######################### same/different judgment ###############################
same_different_df$rt <- as.numeric(same_different_df$rt)
same_different_df$rt <- same_different_df$rt - 800 # remove stimulus presentation
same_different_df <- same_different_df%>% 
  dplyr::arrange(worker_id, trial_index) %>%
  tidyr::fill(talk_out_loud, .direction = 'up')
test <- same_different_df %>%
  filter(!is.na(strategy_free_ans)) %>%
  select(worker_id, strategy_free_ans)
non_strategists <- same_different_df %>%
  filter(!worker_id %in% test$worker_id) %>%
  mutate(strategy_free_ans = 'no_answer')
strategists <-  same_different_df %>%
  filter(worker_id %in% test$worker_id)
same_different_df <- bind_rows(non_strategists, strategists)
same_different_df <- same_different_df%>% 
  dplyr::arrange(worker_id, trial_index) %>%
  tidyr::fill(strategy_free_ans, .direction = 'up')
# only keep the actual judgment trials:
same_different_trials <- subset(same_different_df, !is.na(judgment_type))
# exclude  trials where it took more than 5 seconds:
same_different_trials<-same_different_trials[-which(same_different_trials$rt > 5000),]
# exclude  trials where it took less than 200 ms:
same_different_trials<-same_different_trials[-which(same_different_trials$rt < 200),]
# change correct
same_different_trials$correct <- ifelse(same_different_trials$correct, 1, 0)
# get first image animal
get_animal <- function(image_file) {
  str <- unlist(str_split(image_file, pattern='/'))[2]
  animal <- unlist(str_split(str, pattern = ''))[1:3]
  paste(animal, collapse = '')
}
same_different_trials$stim_1_animal <- sapply(same_different_trials$stim_1, get_animal)
same_different_trials$stim_1_category <- ifelse(startsWith(same_different_trials$stim_1_animal, 'D'), 'dog', 'cat')
same_different_trials$stim_2_animal <- sapply(same_different_trials$stim_2, get_animal)
same_different_trials$stim_2_category <- ifelse(startsWith(same_different_trials$stim_2_animal, 'D'), 'dog', 'cat')
same_different_trials$same_category_animal <- ifelse(same_different_trials$stim_1_category == same_different_trials$stim_2_category, 'within_category', 'between_category')
same_different_trials$cat_or_dog <- ifelse(same_different_trials$stim_1_category == 'cat' & same_different_trials$stim_2_category == 'cat', 'cat-cat', 
                                           ifelse(same_different_trials$stim_1_category == 'dog' & same_different_trials$stim_2_category == 'dog', 'dog-dog', 'cat-dog'))
# strategy
SD_strategies <- same_different_trials %>%
  filter(!is.na(strategy_free_ans)) %>%
  select(strategy_free_ans, high_low_verbal, talk_out_loud, worker_id) %>%
  group_by(strategy_free_ans, high_low_verbal, talk_out_loud, worker_id) %>%
  tally()
SD_strategies$experiment <- 'same_different'
same_different_trials <- same_different_trials %>%
  select(-c(question_order, trial_type))

# save csv
write.csv(same_different_trials, 'processed_data/same_different_trials.csv')

#################### strategies df ################################

# make one dataframe with all the strategies
strategies_df <- bind_rows(SD_strategies, rhyme_strategies, TS_strategies, phon_strategies)
write.csv(strategies_df, 'strategies_all_four_df.csv')

