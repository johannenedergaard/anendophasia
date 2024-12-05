# correlation plots
library(Hmisc)
library(tidyverse)
library(corrplot)

# read in data
score_df <- read.csv('data/collected_scores_df.csv', row.names = 1)
score_df_names <- c('Verbal recall: Control set', 'Verbal recall: Orthographic set', 'Verbal recall: Phonological set', 'Verbal recall (any position): Control set', 'Verbal recall (any position): Orthographic set', 'Verbal recall (any position): Phonological set', 'Rhyme accuracy: Non-orthographic', 'Rhyme accuracy: No-rhyme', 'Rhyme accuracy: Orthographic', 'Rhyme reaction time: Non-orthographic', 'Rhyme reaction time: No-rhyme',
                    'Rhyme reaction time: Orthographic', 'Category judgment: Between-category', 'Category judgment: Within-category', 'Identity judgment: Between-category', 'Identity judgment: Within-category', 'Task switch reaction time: Addition', 'Task switch reaction time: Color-cued', 'Task switch reaction time: Subtraction', 'Task switch reaction time: Symbol-cued', 'Task switch reaction time: Uncued','Task switch accuracy: Addition','Task switch accuracy: Color-cued','Task switch accuracy: Subtraction','Task switch accuracy: Symbol-cued','Task switch accuracy: Uncued')
Q_anendophasia_numeric <- read.csv('data/survey_data/q_anendophasia_numeric.csv', row.names =1)
Q_anendophasia_text <- read.csv('data/survey_data/q_anendophasia_text.csv', row.names =1)

# high inner speech
score_df_high_verbal <- subset(score_df, high_low_verbal =='high_verbal')
correlations_hv <- rcorr(as.matrix(score_df_high_verbal %>% select(!c(worker_id,VerbalScored, VisualScored,high_low_verbal))))
cors_hv <- correlations_hv$r
ps_hv <- cor.mtest(as.matrix(score_df_high_verbal %>% select(!c(worker_id, VerbalScored, VisualScored,high_low_verbal))))$p
rownames(correlations_hv$r) <- score_df_names
colnames(correlations_hv$r) <- score_df_names
rownames(ps_hv) <- score_df_names
colnames(ps_hv) <- score_df_names
# png(height=1800, width=1800, file="figures/cor_plot_hv_v2.png")
# corrplot(correlations_hv$r,p.mat=ps_hv, sig.level = 0.01,insig='blank', tl.cex =2, 
#          type='lower', tl.col='black', cl.cex=2, order= 'hclust')
# dev.off()

# low inner speech
score_df_low_verbal <- subset(score_df, high_low_verbal =='low_verbal')
correlations_lv <- rcorr(as.matrix(score_df_low_verbal %>% select(!c(worker_id, VerbalScored,VisualScored,high_low_verbal))))
cors_lv <- correlations_lv$r
ps_lv <- cor.mtest(as.matrix(score_df_low_verbal %>% select(!c(worker_id, VerbalScored,VisualScored,high_low_verbal))))$p
rownames(correlations_lv$r) <- score_df_names
colnames(correlations_lv$r) <- score_df_names
rownames(ps_lv) <- score_df_names
colnames(ps_lv) <- score_df_names
# png(height=1800, width=1800, file="figures/cor_plot_lv_v2.png")
# corrplot(correlations_lv$r,p.mat=ps_lv, sig.level = 0.01,insig='blank', tl.cex =2, 
#          type='lower', tl.col='black', cl.cex=2, order= 'hclust')
# dev.off()

# trick to plot both from: https://rpubs.com/melike/corrplot
ord=hclust(1-as.dist(correlations_hv$r))$order
pdf(height=12, width=12, file="figures/cor_plot_contrast_fig12.pdf")
corrplot(correlations_hv$r[ord,ord], method='square', p.mat=ps_hv[ord,ord],sig.level = 0.01,insig='blank',
         outline = T, addgrid.col = "white",tl.col='black',cl.pos = "r", tl.cex = 0.5,
         cl.cex = 0.5, mar = c(4,0,4,0), type = "upper", tl.pos = "tl", bg = '#e1deed')$corrPos -> p1
corrplot(correlations_lv$r[ord,ord],method='square',p.mat=ps_lv[ord,ord],sig.level = 0.01,insig='blank',
         outline = T, addgrid.col = "white",tl.col='black',cl.pos = "r", tl.cex = 0.5, 
         cl.cex = 0.5, mar = c(4,0,4,0), type = "lower", tl.pos = "tl", add=T,bg = '#f2d9dd')$corrPos ->p2
text(p1$x, p1$y, round(p1$corr, 2),cex=0.3)
text(p2$x, p2$y, round(p2$corr, 2),cex=0.3)
dev.off()
#p1

# correlation plot survey
survey_colnames <- c('IRQ Verbal Score', 'ConversationFocus', 'EarWorms', 'RecallFriendConvo',
                     'RecallSelfConvo','HearConversation',
                     'SingAlongAbility', 'SingAlongThinking','OtherVoiceQuality',                     
                     'ExpressInnerStates',
                     'SimulatePastConvo', 'SimulateFutureConvo','ImpulsivenessLackOfInsight',
                     'ImpulsivenessThinkThingsThrough', 'ImpulsivenessWhim',
                     'OthersExperiencesConversation', "OthersExperiencesMindsEye", "OthersExperiencesMindsEar", 
                     'VISQ - Brief phrases', 'VISQ - Dialogue with self', 'VISQ - Voice of another person',
                     'VISQ - Questions from others', 'VISQ - Nagging from others', 'VISQ - Dialogue not monologue',
                     'VISQ - Full sentences', 'VISQ - Telegraphic inner speech', 'VISQ - Right or wrong actions',
                     'VISQ - Conversation with self', 'VISQ - Tell self to do things', 'VISQ - Other voices unheard utterances',
                     'VISQ - Back and forth conversation', 'VISQ - Only content words', 'VISQ - Full grammatical sentences',
                     'VISQ - Other voices already heard utterances', 'VISQ - Evaluate own behavior', 'VISQ - Tell self not to do things')
#
survey_df_total <- Q_anendophasia_numeric %>% select(VerbalScored, conversation_focus, earworms,
                                                        convo_memory_friend, convo_memory_self, hearing_conversation,
                                                        sing_along, sing_along_thinking, other_voice_quality,
                                                        express_inner_states, rehearse_convo,
                                                        revise_convo, impulsiveness_1, impulsiveness_2,
                                                        impulsiveness_3, others_experiences_1, others_experiences_4,
                                                        others_experiences_5,
                                                        starts_with('visq'))
# some 'other' responses should be NA
survey_df_total$convo_memory_friend <- ifelse(survey_df_total$convo_memory_friend == 1, NA, survey_df_total$convo_memory_friend)
survey_df_total$convo_memory_self <- ifelse(survey_df_total$convo_memory_self == 1, NA, survey_df_total$convo_memory_self)
survey_df_total$sing_along_thinking <- ifelse(survey_df_total$sing_along_thinking == 6, NA, survey_df_total$sing_along_thinking)


survey_df_total_cors <- rcorr(as.matrix(survey_df_total))
cors_survey <- survey_df_total_cors$r
ps_survey <- cor.mtest(as.matrix(survey_df_total))$p
rownames(survey_df_total_cors$r) <- survey_colnames
colnames(survey_df_total_cors$r) <- survey_colnames
rownames(ps_survey) <- survey_colnames
colnames(ps_survey) <- survey_colnames

# plot both together incl correlation coefficients
# trick to plot both from: https://rpubs.com/melike/corrplot
#ord=hclust(1-as.dist(correlations_hv_survey$r))$order
pdf(height=12, width=12, file="figures/survey_cor_total_v2.pdf")
corrplot(survey_df_total_cors$r, p.mat=ps_survey, sig.level = 0.01,insig='blank',
         outline = T, addgrid.col = "white",tl.col='black',cl.pos = "r", tl.cex = 0.5, method='square',
         cl.cex = 0.5, mar = c(4,0,4,0), type = "lower")$corrPos -> p3
corrplot(survey_df_total_cors$r, p.mat=ps_survey, sig.level = 0.01,insig='blank',
         outline = T, addgrid.col = "lightgrey",tl.col='black',cl.pos = "r", tl.cex = 0.5, method='square',
         cl.cex = 0.5, mar = c(4,0,4,0), type = "lower",add=T)
text(p3$x, p3$y, round(p3$corr, 2),cex=0.3)
dev.off()

# make corgram of selected questions (full participant sample)
selected_correlations_survey <- rcorr(as.matrix(Q_anendophasia_numeric %>% select(rehearse_convo,
                                                                   revise_convo, visq_dial_4, earworms, 
                                                                   others_experiences_1,others_experiences_4,
                                                                   others_experiences_5, VerbalScored)))
cors_survey <- selected_correlations_survey$r
ps_survey <- cor.mtest(as.matrix(Q_anendophasia_numeric %>% select(rehearse_convo,
                                                                   revise_convo, visq_dial_4, earworms, 
                                                                   others_experiences_1,others_experiences_4,
                                                                   others_experiences_5, VerbalScored)))$p
rownames(cors_survey) <- c('Simulate future conversations' ,'Simulate past conversations', 'VISQ dialogic', 
                             'Earworms', 'Others experience conversation', "Others experience mind's eye", 
                             "Others experience mind's ear", 'IRQ Verbal Score')
colnames(cors_survey) <- c('Simulate future conversations' ,'Simulate past conversations', 'VISQ dialogic', 
                             'Earworms', 'Others experience conversation', "Others experience mind's eye", 
                             "Others experience mind's ear", 'IRQ Verbal Score')
rownames(ps_survey) <- c('Simulate future conversations' ,'Simulate past conversations', 'VISQ dialogic', 
                         'Earworms', 'Others experience conversation', "Others experience mind's eye", 
                         "Others experience mind's ear", 'IRQ Verbal Score')
colnames(ps_survey) <- c('Simulate future conversations' ,'Simulate past conversations', 'VISQ dialogic', 
                         'Earworms', 'Others experience conversation', "Others experience mind's eye", 
                         "Others experience mind's ear", 'IRQ Verbal Score')
pdf(height=12, width=12, file="figures/survey_selected_total.pdf")
corrplot(cors_survey, p.mat=ps_survey, sig.level = 0.01,insig='blank',
         outline = T, addgrid.col = "white",tl.col='black',cl.pos = "r", tl.cex = 2, method='square',
         cl.cex = 1, mar = c(4,0,4,0), type = "lower",addCoef.col = 'white', number.cex = 1)
dev.off()

