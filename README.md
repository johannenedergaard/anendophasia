# Alexinoia
## Inner speech and cognition

The `alexinoia_raw` folder contains two raw csv files from each participant, one with browser interaction data and one with experiment data. Participants were recruited to participate in four behavioural experiments: rhyme judgments from images, task switching with simple arithmetic problems, reproduction memory for a string of words, and same/different judgments of pictures of cats and dogs.

The raw files contain a lot of irrelevant information. There are four cleaned up dataframes here (one for each experiment) as well as dataframes containing visual and verbal scores (from the Internal Representations Questionnaire) and dataframes containing questionnaire data.

## Column dictionary divided into the different experiments 
Columns common to all experiments:
| Column name  | Explanation  |
|---|---|
|trial_index   |across the whole series of experiments, when did this trial occur   |
|time_elapsed  |time (ms) since starting the experiment series   |
|worker_id   |MTurk worker ID   |
|start_time   |time participant started experiment series   |
|experiment_order   |order of the four experiments for that participant   |
|phase   |practice or experiment   |
|stimulus   |html string of what the participant saw on a given trial   |
|talk_out_loud   |did you talk to yourself to solve the problems in this experiment? 'yes' or 'no' (required)   |
|strategy_free_ans   |anything else you would like to add about how you solved the problems? (not required)   |
|VerbalScored   |mean score across verbal representation questions in the IRQ (1-5)   |
|VisualScored   |mean score across visual representation questions in the IRQ (1-5)   |
|high_low_verbal   |participant recruited as 'high_verbal' or 'low_verbal' |

### Rhyme judgments
rt
correct
image_1
image_2
cor_key
type
