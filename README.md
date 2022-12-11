# Anendophasia
## Inner speech and cognition

The `alexinoia_raw` folder contains two raw csv files from each participant, one with browser interaction data and one with experiment data. Participants were recruited to participate in four behavioural experiments: rhyme judgments from images, task switching with simple arithmetic problems, recall for a string of words, and same/different judgments of pictures of cats and dogs.

The raw files contain a lot of irrelevant information. There are four cleaned up dataframes here (one for each experiment) as well as dataframes containing visual and verbal scores (from the Internal Representations Questionnaire) and dataframes containing questionnaire data.

Participants AFFXVHHBUWW4D and A1Q56N80RJLQ7S were excluded from all experiments because they responded randomly. 

## Column dictionary
Columns common to all experiments:
| Column name  | Explanation  |
|---|---|
|trial_index   |across the whole series of experiments, when did this trial occur   |
|time_elapsed  |time (ms) since starting the experiment series   |
|worker_id   |MTurk worker ID   |
|start_time   |time participant started experiment series   |
|experiment_order   |order of the four experiments for that participant   |
|experiment   |which of the four experiments  |
|phase   |practice or experiment   |
|stimulus   |html string of what the participant saw on a given trial   |
|talk_out_loud   |did you talk to yourself to solve the problems in this experiment? 'yes' or 'no' (required)   |
|strategy_free_ans   |anything else you would like to add about how you solved the problems? (not required)   |
|VerbalScored   |mean score across verbal representation questions in the IRQ (1-5)   |
|VisualScored   |mean score across visual representation questions in the IRQ (1-5)   |
|high_low_verbal   |participant recruited as 'high_verbal' or 'low_verbal' |

### Rhyme judgments
The following participants were excluded for responding randomly: A1KOBLL83SICGQ, A26BQ33MHKVYFB, A1PUSSRD8P5HHH.

The following pairs were excluded for being associated with below chance performance for at least one of the two groups: chin/bin, park/shark, rake/cake, cave/wave, cab/crab.

|Column name   |Explanation   |
|---|---|
|rt   |reaction time (ms) to make the rhyme judgment (max 5000)   |
|response   |response given: 'arrowup' (images rhyme) or 'arrowdown' (images do not rhyme)   |
|correct  |whether the judgment was correct (1) or incorrect (0)   |
|image_1   |left-positioned image (name of file indicates target word)   |
|image_2   |right-positioned image (name of file indicates target word)   |
|cor_key   |correct response: 'arrowup' (images rhyme) or 'arrowdown' (images do not rhyme)   |
|type   |'NR' (no rhyme), 'ortho' (orthographic rhyme), 'non-ortho' (non-orthographical rhyme)   |

### Ordered word recall (phonological similarity)

|Column name   |Explanation   |
|---|---|
|word_1   |first word presented  |
|word_2   |second word presented  |
|word_3  |third word presented  |
|word_4   |fourth word presented |
|word_5   |fifth word presented |
|original_word_set   |'orthoSet' (orthographically similar words), 'phonSet' (phonologically similar words, or 'ctrlSet' (no-similarity words) |
|response_1   |first word produced - if nothing, contains the string 'none'  |
|response_2   |second word produced - if nothing, contains the string 'none'  |
|response_3  |third word produced  - if nothing, contains the string 'none' |
|response_4   |fourth word produced - if nothing, contains the string 'none' |
|response_5   |fifth word produced - if nothing, contains the string 'none' |
|score   |how many did they get right in the right position (0-5) |
|score_any_position   |how many did they get right regardless of position  |

### Same-different judgments (category judgment and physical similarity judgment)

|Column name   |Explanation   |
|---|---|
|rt   |reaction time to make decision (cut off less than 200 ms and more than 5000 ms) |
|response   |'arrowup' (same) or 'arrowdown' (different) |
|answer  |correct answer: 'different' or 'same'  |
|correct   |1 or 0 |
|judgment_type   |'identical_image' or 'categorical_image' |
|stim_1   |first image presented on a given trial |
|stim_2   |second image presented on a given trial |
|inverted   |was one image horizontally inverted?  |
|true_neg  |correct rejection ('different' response + images are not same)|
|true_pos   |correct identification ('same' response + images are same) |
|false_pos   |false alarm ('same' response + images are not same)|
|false_neg   |false rejection ('different' response + images are same)|
|block_index   |trial index within each block  |
|trial_no_ptcpt   |trial index within each participant  |
|stim_1_animal   |first image presented: 'C04', 'C09', 'C14', 'D07', 'D09', or 'D11'|
|stim_1_category   |first image presented: 'cat' or 'dog'  |
|stim_2_animal   |second image presented: 'C04', 'C09', 'C14', 'D07', 'D09', or 'D11' |
|stim_2_category   |second image presented: 'cat' or 'dog'   |
|same_category_animal   |'between_category' or 'within_category'|
|cat_or_dog   |'cat-cat', 'cat-dog', or 'dog-dog'|


### Task switching (simple arithmetic problems)
|Column name   |Explanation   |
|---|---|
|condition   |'addition', 'subtraction', 'colorcue', 'symbolcue', 'uncued'  |
|rt   |reaction time (ms) to complete the individual arithmetic problem   |
|stimulus  |two-digit number presented  |
|answer   |answer produced by participant |
|correct   |strict accuracy (both correct operation and correct arithmetic) |
|operation   |operation that should be used on a given trial |
|symbol_cue   |which symbol cue did they see |
|color_cue   |which color cue did they see  |
|correct_if_add  |what would be the correct answer if the each problem was addition |
|correct_if_subtract   |what would be the correct answer if the each problem was subtraction |
|list_completion   |time (seconds) to complete a given block|
|operation_used   |which operation did they use (regardless of arithmetic) |
|correct_operation   |was the operation correct (regardless of correct arithmetic)  |
|correct_arithmetic   |was the arithmetic correct (regardless of correct operation)  |
|switching_is_correct   |for the switching block, any failure to switch (repeated operation) counts as an error and any trial with successful switch counts as correct (if arithmetic is also correct) |
