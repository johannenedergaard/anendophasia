# correlation plots
library(Hmisc)

# total plot
# correlations <- rcorr(as.matrix(score_df %>%select(!c(worker_id, VisualScored,VerbalScored, high_low_verbal))))
# cors <- correlations$r
# ps <- cor.mtest(as.matrix(score_df%>%select(!c(worker_id, VisualScored,high_low_verbal))))$p
# rownames(correlations$r) <- score_df_names
# colnames(correlations$r) <- score_df_names
# rownames(ps) <- score_df_names
# colnames(ps) <- score_df_names
# png(height=1800, width=1800, file="figures/cor_plot_total_v2.png")
# total_cor <- corrplot(correlations$r,p.mat=ps, sig.level = 0.01,insig='blank', tl.cex =2, 
#          type='lower', tl.col='black', cl.cex=2, order= 'hclust', addCoef.col = 'black')
# dev.off()

# total_corr_hclust_order <- corrMatOrder(correlations$r, order='hclust')
# var_names <- colnames(correlations$r)
# length(var_names[total_corr_hclust_order])

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
png(height=1800, width=1800, file="../figures/cor_plot_contrast.png")
corrplot(correlations_hv$r[ord,ord], p.mat=ps_hv[ord,ord], sig.level = 0.01,insig='blank',method='square',
         outline = T, addgrid.col = "white",tl.col='black',cl.pos = "r", tl.cex = 1.5, 
         cl.cex = 1.5, mar = c(4,0,4,0), type = "upper", tl.pos = "tl", bg = '#e1deed',addCoef.col = 'white')
corrplot(correlations_lv$r[ord,ord],p.mat=ps_lv[ord,ord], sig.level = 0.01,insig='blank',method='square',
         outline = T, addgrid.col = "white",tl.col='black',cl.pos = "r", tl.cex = 1.5, 
         cl.cex = 1.5, mar = c(4,0,4,0), type = "lower", tl.pos = "tl", add=T,bg = '#f2d9dd', addCoef.col = 'white')
dev.off()

# subtracted
# cors_subtracted <- correlations_lv$r - correlations_hv$r
# png(height=1800, width=1800, file="figures/cor_plot_subtracted_v2.png")
# corrplot(cors_subtracted,insig='blank', tl.cex =2, 
#          type='lower', tl.col='black', cl.cex=2, order= 'FPC')
# dev.off()
 

# correlation plot survey
survey_colnames <- c('Rehearse public speaking', 'Difficulty focusing on real-life conversation', 
                     'Earworms', 'Remember friend conversation', 'Remember self conversation', 'Remembering feels like hearing',
                     'Sing along mentally', 'Sing along feels like thinking', 'Experience of imagined voices', 
                     'Difficulty expressing inner states', 'Inner speech sounds stressful', 'Inner speech is just a narrative tool',
                     'Simulate future conversations' ,'Simulate past conversations', 'Impulsiveness - Do not understand own actions',
                     'Impulsiveness - Thinking things through', 'Impulsiveness - Like acting on whim', 
                     'Others experience conversation', "Others experience mind's eye", "Others experience mind's ear", 
                     'VISQ - Brief phrases', 'VISQ - Dialogue with self', 'VISQ - Voice of another person',
                     'VISQ - Questions from others', 'VISQ - Nagging from others', 'VISQ - Dialogue not monologue',
                     'VISQ - Full sentences', 'VISQ - Telegraphic inner speech', 'VISQ - Right or wrong actions',
                     'VISQ - Conversation with self', 'VISQ - Tell self to do things', 'VISQ - Other voices unheard utterances',
                     'VISQ - Back and forth conversation', 'VISQ - Only content words', 'VISQ - Full grammatical sentences',
                     'VISQ - Other voices already heard utterances', 'VISQ - Evaluate own behavior', 'VISQ - Tell self not to do things')


survey_df_high_verbal <- subset(Q_anendophasia_numeric, high_low_verbal == 'high_verbal')
survey_df_high_verbal <- survey_df_high_verbal %>% select(rehearse_question, conversation_focus, earworms,
                                                                           convo_memory_friend, convo_memory_self, hearing_conversation,
                                                                           sing_along, sing_along_thinking, other_voice_quality,
                                                                           express_inner_states, stress_IS, narrative_IS, rehearse_convo,
                                                                           revise_convo, impulsiveness_1, impulsiveness_2,
                                                                           impulsiveness_3, others_experiences_1, others_experiences_4,
                                                                           others_experiences_5,
                                                                           starts_with('visq'))
correlations_hv_survey <- rcorr(as.matrix(survey_df_high_verbal))
rownames(correlations_hv_survey$r) <- survey_colnames
colnames(correlations_hv_survey$r) <- survey_colnames
ps_hv_survey <- cor.mtest(as.matrix(survey_df_high_verbal))$p
rownames(ps_hv_survey) <- survey_colnames
colnames(ps_hv_survey) <- survey_colnames

# low inner speech correlations
survey_df_low_verbal <- subset(Q_anendophasia_numeric, high_low_verbal == 'low_verbal')
survey_df_low_verbal <- survey_df_low_verbal %>% select(rehearse_question, conversation_focus, earworms,
                                                                           convo_memory_friend, convo_memory_self, hearing_conversation,
                                                                           sing_along, sing_along_thinking, other_voice_quality,
                                                                           express_inner_states, stress_IS, narrative_IS, rehearse_convo,
                                                                           revise_convo, impulsiveness_1, impulsiveness_2,
                                                                           impulsiveness_3, others_experiences_1, others_experiences_4,
                                                                           others_experiences_5,
                                                                           starts_with('visq'))
correlations_lv_survey <- rcorr(as.matrix(survey_df_low_verbal))
cors_lv_survey <- correlations_lv_survey$r
ps_lv_survey <- cor.mtest(as.matrix(survey_df_low_verbal))$p
rownames(correlations_lv_survey$r) <- survey_colnames
colnames(correlations_lv_survey$r) <- survey_colnames
rownames(ps_lv_survey) <- survey_colnames
colnames(ps_lv_survey) <- survey_colnames

# plot both together incl correlation coefficients
# trick to plot both from: https://rpubs.com/melike/corrplot
ord=hclust(1-as.dist(correlations_hv_survey$r))$order
png(height=1800, width=1800, file="figures/survey_cor_contrast.png")
corrplot(correlations_hv_survey$r[ord,ord], p.mat=ps_hv_survey[ord,ord], sig.level = 0.01,insig='blank',
         outline = T, addgrid.col = "white",tl.col='black',cl.pos = "r", tl.cex = 1.5, method='square',
         cl.cex = 1.5, mar = c(4,0,4,0), type = "upper", tl.pos = "tl", bg = '#e1deed',addCoef.col = 'white')
corrplot(correlations_lv_survey$r[ord,ord],p.mat=ps_lv_survey[ord,ord], sig.level = 0.01,insig='blank',
         outline = T, addgrid.col = "white",tl.col='black',cl.pos = "r", tl.cex = 1.5, method='square',
         cl.cex = 1.5, mar = c(4,0,4,0), type = "lower", tl.pos = "tl", add=T,bg = '#f2d9dd',addCoef.col = 'white')
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
png(height=1800, width=1800, file="figures/survey_selected_total.png")
corrplot(cors_survey, p.mat=ps_survey, sig.level = 0.01,insig='blank',
         outline = T, addgrid.col = "white",tl.col='black',cl.pos = "r", tl.cex = 3, method='square',
         cl.cex = 1.5, mar = c(4,0,4,0), type = "lower",addCoef.col = 'white', number.cex = 3)
dev.off()

