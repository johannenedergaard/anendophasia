---
title: "Anendophasia analysis"
output:
  html_document:
    df_print: paged
    keep_md: true
---

Excluded nine participants for responding randomly, missing at least one out of the four experiments, or otherwise not complying with task instructions.



## Same/different judgments

Prior to this excluded trials above 5 seconds and below 200 ms.



#### Descriptive statistics by group: Same/different judgments



Generally, participants made the correct judgment on 95.13 % of trials. This did not differ between the high verbal (95.24 %) and the low verbal group (95.48. In subsequent analyses and plots, we only include correct trials. See Figure XX below for reaction times between the high verbal and low verbal groups for category ('do these two animals belong to the same category?') or identity ('are these two animals identical?') judgments.


![](anendophasia_results_files/figure-html/unnamed-chunk-5-1.png)<!-- -->

#### Statistical models: Same/different judgments



We conducted a linear mixed model of verbal score and judgment type predicting reaction time as well as the interaction between them including random intercepts per participant. This model indicated significant main effects of both judgment type and verbal score. Identity judgments were faster than category judgments ($\beta$ = -158.73, SE = 2.23, t = -71.19, p < .001)), and a higher verbal score was also associated with faster reaction times ($\beta$ = -31.72, SE = 2.53, t = -12.54, p < .001). There was no significant interaction effect (p = 0.071).

The key test for this experiment was whether the two groups behaved differently when giving correct 'DIFFERENT' responses on identity trials when the two images belonged to the same category. That is, we expected high verbal participants to be more susceptible to interference from a same-category distractor.



```r
ggplot(SD_rt_df_key_comparison, aes(same_category_animal, mean_rt, color=high_low_verbal)) +
  geom_violin(position = position_dodge(1),alpha=0.2) +
  geom_boxplot(position = position_dodge(1)) +
  theme_bw()+
  labs(y ='RT', title = 'Latency to correct DIFFERENT response on identity trials', x = 'Between or within category distractor') +
  scale_color_manual(values = color_palette[c(4,6)])
```

![](anendophasia_results_files/figure-html/unnamed-chunk-8-1.png)<!-- -->


A linear mixed model with verbal score and category membership of the distractor as predictors, including random intercepts per participant, provided evidence that high verbal participants were not particularly affected by the within-category interference (interaction effect: p = 0.317). However, there was a significant main effect of category membership of the distractor with within-category distractors being associated with slower reaction times ($\beta$ = 78.29, SE = 6.3, t = 12.43, p < .001). There was also a significant main effect of verbal score once again with higher verbal score being associated with faster reaction times ($\beta$ = -30.76, SE = 4.59, t = -6.7, p < .001).

#### Additional analyses

We also checked whether the kind of animal made a difference on a within-category distractor trial.

![](anendophasia_results_files/figure-html/unnamed-chunk-10-1.png)<!-- -->

A linear mixed model with verbal score and animal pair (dog-dog or cat-cat) as predictors, including random intercepts per participant, provided evidence that dog-dog trials were faster than cat-cat trials ($\beta$ = -74.48, SE = 6.79, t = -10.97, p < .001). The model again corroborated the result that a higher verbal score was associated with faster reaction times ($\beta$ = -43.95, SE = 5.42, t = -8.11, p < .001). However, this effect of verbal score was less strong when the stimuli were dog-dog than when they were cat-cat as indicated by a significant interaction effect between verbal score and animal pair ($\beta$ = 13.92, SE = 2.26, t = 6.16, p < .001).

## Rhyme judgments

Excluded five rhyming pairs as they had below-chance performance for at least one group. These were bin/chin, cab/crab, rake/cake, wave/cave, and park/shark. 


```r
rhyming_trials <- read.csv('rhyming_trials_221017.csv',row.names = 1)
```

## Verbal working memory


```r
# phonSet = c('bought', 'sort','taut','caught','wart')
# orthoSet = c('rough', 'cough', 'through','dough','bough')
# ctrlSet = c('plea','friend', 'sleigh','row','board')

phon_sim_trials <- read.csv('phon_sim_trials_221017.csv',row.names = 1)
```

## Task switching

Prior to this: excluded trials over 10 seconds.


```r
task_switch_trials <- read.csv('task_switch_trials_221017.csv',row.names = 1)
```


## Intertask correlations


