

var total_timeline = [];
var mturk_or_sona = jsPsych.data.getURLVariable('source');

// images needed for all four experiments - first for rhyme
var all_visual = ['square.png', 'arrow.png', 'arrow_up.png', 'arrow_down.png', 'visual/house.png', 'visual/mouse.png','visual/spoon.png', 'visual/fan.png', 'visual/king.png', 'visual/whale.png', 'visual/saw.png', 'visual/cake.png', 'visual/flag.png', 'visual/train.png', 'visual/bell.png', 
  'visual/hair.png', 'visual/hat.png', 'visual/jar.png', 'visual/suit.png', 'visual/cab.png', 'visual/rose.png', 'visual/park.png', 'visual/fly.png', 'visual/bread.png', 'visual/deer.png', 
  'visual/plane.png', 'visual/key.png', 'visual/well.png', 'visual/wheel.png', 'visual/drawer.png', 'visual/screw.png', 'visual/chain.png', 'visual/chess.png', 'visual/brain.png', 
  'visual/nose.png', 'visual/cone.png', 'visual/shark.png', 'visual/beer.png', 'visual/bed.png', 'visual/shoe.png', 'visual/socks.png', 'visual/heart.png', 'visual/moon.png', 'visual/leg.png', 
  'visual/nail.png', 'visual/man.png', 'visual/ring.png', 'visual/cat.png', 'visual/chin.png', 'visual/cave.png', 'visual/chair.png', 'visual/wave.png', 'visual/pear.png', 'visual/tree.png', 
  'visual/door.png', 'visual/drum.png', 'visual/eye.png', 'visual/bin.png', 'visual/clock.png', 'visual/crab.png', 'visual/tie.png', 'visual/crane.png', 'visual/seal.png', 'visual/soap.png', 
  'visual/claw.png', 'visual/bone.png', 'visual/star.png', 'visual/boot.png', 'visual/fox.png', 'visual/egg.png', 'visual/rope.png', 'visual/dress.png', 'visual/dart.png', 'visual/rake.png',
  'visual/box.png', 'visual/square_rhyme.png', 'visual/pope.png', 'visual/sock.png', 'visual/bear.png', 'visual/bag.png', 'visual/thumb.png', 'visual/snail.png',
    // for same-different
  'same_diff_imgs/D11.gif', 'same_diff_imgs/D07.gif', 'same_diff_imgs/D09.gif',
  'same_diff_imgs/C04.gif', 'same_diff_imgs/C14.gif','same_diff_imgs/C09.gif'];

// first preload all materials
var preload = {
    type: 'preload',
    images: all_visual
  }
total_timeline.push(preload);

if (mturk_or_sona == 'sona') {
// general instructions
var general_instructions = {
  type: 'instructions',
  pages: ["<div style='text-align:left'><p>University of Wisconsin-Madison researchers are asking you to take part in a study called 'Discovering new differences in people's experience'.</p>" +
  '<p>The task involves answering questions about your preferences, experiences, and abilities. For example, you may be asked to rate which of several foods is most bitter, whether you can perceive some letters as having colors, and to describe how you add two-digit numbers. <b>More detailed instructions will be provided on the next screen.</b></p>'+
  '<p>We will first ask you to complete four small experiments. The experiments will take about 40 minutes to complete in total, followed by some questionnaires which will take approximately 10 minutes to complete.</p>'+
  '<p>This task has no direct benefits. We do not anticipate any psychosocial risks. There is a risk of a confidentiality breach. The responses you submit as part of this task will be stored on a secure server and accessible only to researchers who have been approved by UW-Madison.</p>' +
  '<p>Processed data with all identifiers removed could be used for future research studies or distributed to another investigator for future research studies without additional informed consent from the subject or the legally authorized representative.</p>'+
  '<p>You are free to decline to participate, to end participation at any time for any reason. We will not retain data from partial responses. If you would like to withdraw your data after participating, you may send an email lupyan@wisc.edu or complete <a href="http://tinyurl.com/withdrawdata-lupyanlab" target="_blank">this form</a> which will allow you to make a request anonymously.</p>'+
  '<p>If you have any questions or concerns about this task please contact the principal investigator: Prof. Gary Lupyan at lupyan@wisc.edu.</p>'+
  "If you are not satisfied with response of the research team, have more questions, or want to talk with someone about your rights as a research participant, you should contact University of Wisconsin's Education Research and Social & Behavioral Science IRB Office at 608-263-2320. We encourage you to save or print a copy of this consent form.</p>"+
  "<p>By continuing, you confirm that you have read and understood this consent form.</p></div>"], 
  allow_keys: false,
  show_clickable_nav: true
}} else {
    var general_instructions = {
    type: 'instructions',
    pages: ["<div style='text-align:left'><p>University of Wisconsin-Madison researchers are asking you to take part in a study called 'Discovering new differences in people's experience'.</p>" +
    '<p>The task involves answering questions about your preferences, experiences, and abilities. For example, you may be asked to rate which of several foods is most bitter, whether you can perceive some letters as having colors, and to describe how you add two-digit numbers. <b>More detailed instructions will be provided on the next screen.</b></p>'+
    '<p>We will first ask you to complete four small experiments. The experiments will take about 40 minutes to complete in total, followed by some questionnaires which will take approximately 10 minutes to complete. You will be paid $5.</p>'+
    '<p>This task has no direct benefits. We do not anticipate any psychosocial risks. There is a risk of a confidentiality breach. The responses you submit as part of this task will be stored on a secure server and accessible only to researchers who have been approved by UW-Madison.</p>' +
    '<p>Processed data with all identifiers removed could be used for future research studies or distributed to another investigator for future research studies without additional informed consent from the subject or the legally authorized representative.</p>'+
    '<p>You are free to decline to participate, to end participation at any time for any reason. We will not retain data from partial responses. If you would like to withdraw your data after participating, you may send an email lupyan@wisc.edu or complete <a href="http://tinyurl.com/withdrawdata-lupyanlab" target="_blank">this form</a> which will allow you to make a request anonymously.</p>'+
    '<p>If you have any questions or concerns about this task please contact the principal investigator: Prof. Gary Lupyan at lupyan@wisc.edu.</p>'+
    "If you are not satisfied with response of the research team, have more questions, or want to talk with someone about your rights as a research participant, you should contact University of Wisconsin's Education Research and Social & Behavioral Science IRB Office at 608-263-2320. We encourage you to save or print a copy of this consent form.</p>"+
    "<p>By continuing, you confirm that you have read and understood this consent form.</p></div>"], 
    allow_keys: false,
    show_clickable_nav: true
  }
  var mturk_or_sona = 'mturk'
}
total_timeline.push(general_instructions)

// go into full screen
total_timeline.push({
  type: 'fullscreen',
  message:'<p><b>You must maximize your browser window to complete these tasks. Please press "Continue" to maximize.</b></p>',
  fullscreen_mode: true
});

// this is also the same for all of them
var experiment_begins = {
    type: 'instructions',
    pages: ['<p>Now the real experiment begins...'],
    allow_keys: false,
    show_clickable_nav: true
  }

// saving data (same for all)
function saveData(name, data){
    var url = 'record_result.php';
    var data = {filename: name, filedata: data};
    
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
                'Content-Type': 'application/json'
        })
    });
    }

// these are common to all four experiments
var worker_id = jsPsych.data.getURLVariable('workerId');
jsPsych.data.addProperties({
      worker_id: worker_id,
      start_time: (new Date()).toISOString()
      });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// PHONOLOGICAL SIMILARITY TIMELINE ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var phon_sim_timeline = [];

var phonSet = ['bought', 'sort','taut','caught','wart'] // similar pronunciation but different letter structure
var orthoSet = ['rough', 'cough', 'through','dough','bough'] // similar letter structure but different pronunciation
var ctrlSet = ['plea','friend', 'sleigh','row','board'] // control (no similarity, same weird orthographical quirks as setA and setB)

    // create instructions node
var instructions_phon_sim = {
        type: 'instructions',
        pages: ['This is an experiment investigating memory for words. ' +
        '<p>During each trial, you will see five words presented in sequence 1 second each. You will have to remember the words and the order they were presented in as you will be asked to reproduce them in the right order afterwards.</p>' +
        '<p>First there will be a few practice trials</p>'+
        '<p>Click the button below to begin.</p>'],
        allow_keys: false,
        show_clickable_nav: true,
        data: {experiment:'phon_sim'}

    }
    // add this node to the phon_sim_timeline
phon_sim_timeline.push(instructions_phon_sim);

    // create 24 sequences
var word_sequences = [];
for (i = 0; i<8;i++) {
        word_sequences.push(jsPsych.randomization.sampleWithoutReplacement(phonSet,5))
        word_sequences.push(jsPsych.randomization.sampleWithoutReplacement(orthoSet,5))
        word_sequences.push(jsPsych.randomization.sampleWithoutReplacement(ctrlSet,5))
    }

var training_word_presentation = {
        type: 'html-keyboard-response',
        stimulus:function () {
            // note: the outer parentheses are only here so we can break the line
            return ('<div style="display:grid">'+
                '<h1 id="word_1" style="grid-column:1; grid-row:1">'+ jsPsych.timelineVariable("word_1")+'</h1>'+
                '<h1 id="word_2" style="visibility:hidden;grid-column:1; grid-row:1">'+ jsPsych.timelineVariable("word_2")+'</h1>'+
                '<h1 id="word_3" style="visibility:hidden;grid-column:1; grid-row:1">'+ jsPsych.timelineVariable("word_3")+'</h1>'+
                '<h1 id="word_4" style="visibility:hidden;grid-column:1; grid-row:1">'+ jsPsych.timelineVariable("word_4")+'</h1>'+
                '<h1 id="word_5" style="visibility:hidden;grid-column:1; grid-row:1">'+ jsPsych.timelineVariable("word_5")+'</h1>'+
                '</div>')
        },
        choices: jsPsych.NO_KEYS,
        trial_duration: 13000,
        on_load: function(){
            setTimeout(function() {
                document.getElementById('word_1').style.visibility = 'hidden'
            }, 1000);
            setTimeout(function() {
                document.getElementById('word_2').style.visibility = 'visible'
            }, 3000);
            setTimeout(function() {
                document.getElementById('word_2').style.visibility = 'hidden'
            }, 4000);
            setTimeout(function() {
                document.getElementById('word_3').style.visibility = 'visible'
            }, 6000);
            setTimeout(function() {
                document.getElementById('word_3').style.visibility = 'hidden'
            }, 7000);
            setTimeout(function() {
                document.getElementById('word_4').style.visibility = 'visible'
            }, 9000);
            setTimeout(function() {
                document.getElementById('word_4').style.visibility = 'hidden'
            }, 10000);
            setTimeout(function() {
                document.getElementById('word_5').style.visibility = 'visible'
            }, 12000);
            },
        data: {
            phase:'training',
            word_1: jsPsych.timelineVariable("word_1"),
            word_2: jsPsych.timelineVariable("word_2"),
            word_3: jsPsych.timelineVariable("word_3"),
            word_4: jsPsych.timelineVariable("word_4"),
            word_5: jsPsych.timelineVariable("word_5"),
            original_word_set: 'training',
            experiment:'phon_sim'
        }
    }

var training_word_reproduction = {
        type: 'survey-text',
        preamble:'Write down the words you saw in the order you remember them',
        questions: [
        {prompt: '',columns:7,name:'position_1'},
        {prompt: '',columns:7,name:'position_2'},
        {prompt: '',columns:7,name:'position_3'},
        {prompt: '',columns:7,name:'position_4'},
        {prompt: '',columns:7,name:'position_5'}
        ],
        on_finish: function(data){
        data.phase = 'training',
        data.response_1 = data.response.position_1
        data.response_2 = data.response.position_2
        data.response_3 = data.response.position_3
        data.response_4 = data.response.position_4
        data.response_5 = data.response.position_5
        data.experiment = 'phon_sim'
    }
    }

var feedback_phon_sim = {
        type:'html-keyboard-response',
        prompt:'These were the words you saw.',
        trial_duration:5000,
        stimulus: function() {
            return(
                '<h1 id="word_1">'+ jsPsych.timelineVariable("word_1")+'</h1>'+
                '<h1 id="word_2">'+ jsPsych.timelineVariable("word_2")+'</h1>'+
                '<h1 id="word_3">'+ jsPsych.timelineVariable("word_3")+'</h1>'+
                '<h1 id="word_4">'+ jsPsych.timelineVariable("word_4")+'</h1>'+
                '<h1 id="word_5">'+ jsPsych.timelineVariable("word_5")+'</h1>'
        )},
        choices: jsPsych.NO_KEYS,
        data: {experiment:'phon_sim'}
    }

var phon_sim_training_procedure = {
    timeline: [training_word_presentation, training_word_reproduction,feedback_phon_sim],
    timeline_variables: [
    {word_1: 'mad',word_2:'man', word_3: 'map',word_4:'mat', word_5:'max'},
    {word_1: 'pen',word_2:'rig', word_3:'day',word_4:'bar', word_5:'cow'},
    ],
    randomize_order:true
    }
phon_sim_timeline.push(phon_sim_training_procedure)

phon_sim_timeline.push(experiment_begins)

var word_presentation = {
                    type: 'html-keyboard-response',
                    stimulus:function () {
                        // note: the outer parentheses are only here so we can break the line
                        return ('<div style="display:grid">'+
                            '<h1 id="word_1" style="grid-column:1; grid-row:1">'+ jsPsych.timelineVariable("word_1")+'</h1>'+
                            '<h1 id="word_2" style="visibility:hidden;grid-column:1; grid-row:1">'+ jsPsych.timelineVariable("word_2")+'</h1>'+
                            '<h1 id="word_3" style="visibility:hidden;grid-column:1; grid-row:1">'+ jsPsych.timelineVariable("word_3")+'</h1>'+
                            '<h1 id="word_4" style="visibility:hidden;grid-column:1; grid-row:1">'+ jsPsych.timelineVariable("word_4")+'</h1>'+
                            '<h1 id="word_5" style="visibility:hidden;grid-column:1; grid-row:1">'+ jsPsych.timelineVariable("word_5")+'</h1>'+
                            '</div>')
                    },
                    choices: jsPsych.NO_KEYS,
                    trial_duration: 13000,
                    on_load: function(){
                        setTimeout(function() {
                            document.getElementById('word_1').style.visibility = 'hidden'
                        }, 1000);
                        setTimeout(function() {
                            document.getElementById('word_2').style.visibility = 'visible'
                        }, 3000);
                        setTimeout(function() {
                            document.getElementById('word_2').style.visibility = 'hidden'
                        }, 4000);
                        setTimeout(function() {
                            document.getElementById('word_3').style.visibility = 'visible'
                        }, 6000);
                        setTimeout(function() {
                            document.getElementById('word_3').style.visibility = 'hidden'
                        }, 7000);
                        setTimeout(function() {
                            document.getElementById('word_4').style.visibility = 'visible'
                        }, 9000);
                        setTimeout(function() {
                            document.getElementById('word_4').style.visibility = 'hidden'
                        }, 10000);
                        setTimeout(function() {
                            document.getElementById('word_5').style.visibility = 'visible'
                        }, 12000);
                        },
                    data: {
                        phase:'experiment',
                        word_1: jsPsych.timelineVariable("word_1"),
                        word_2: jsPsych.timelineVariable("word_2"),
                        word_3: jsPsych.timelineVariable("word_3"),
                        word_4: jsPsych.timelineVariable("word_4"),
                        word_5: jsPsych.timelineVariable("word_5"),
                        experiment:'phon_sim',
                        original_word_set: function(){
                            if (orthoSet.includes(jsPsych.timelineVariable("word_1"))) {
                                return('orthoSet')
                            } else if (phonSet.includes(jsPsych.timelineVariable("word_1"))) {
                                return('phonSet')
                            } else {
                                return('controlSet')
                            }
                        }}
                    }

var word_reproduction = {
            type: 'survey-text',
            preamble:'Write down the words you saw in the order you remember them',
            questions: [
                {prompt: '',columns:7,name:'position_1'},
                {prompt: '',columns:7,name:'position_2'},
                {prompt: '',columns:7,name:'position_3'},
                {prompt: '',columns:7,name:'position_4'},
                {prompt: '',columns:7,name:'position_5'}
                ],
            on_finish: function(data){
                data.phase = 'experiment'
                data.response_1 = data.response.position_1
                data.response_2 = data.response.position_2
                data.response_3 = data.response.position_3
                data.response_4 = data.response.position_4
                data.response_5 = data.response.position_5
                data.experiment = 'phon_sim'

            }
        }
        
var phon_sim_procedure = {
        timeline: [word_presentation, word_reproduction],
        timeline_variables: [
            {word_1: word_sequences[0][0],word_2:word_sequences[0][1] , word_3:word_sequences[0][2] ,word_4:word_sequences[0][3], word_5:word_sequences[0][4]},
            {word_1: word_sequences[1][0],word_2:word_sequences[1][1] , word_3:word_sequences[1][2] ,word_4:word_sequences[1][3], word_5:word_sequences[1][4]},
            {word_1: word_sequences[2][0],word_2:word_sequences[2][1] , word_3:word_sequences[2][2] ,word_4:word_sequences[2][3], word_5:word_sequences[2][4]},
            {word_1: word_sequences[3][0],word_2:word_sequences[3][1] , word_3:word_sequences[3][2] ,word_4:word_sequences[3][3], word_5:word_sequences[3][4]},
            {word_1: word_sequences[4][0],word_2:word_sequences[4][1] , word_3:word_sequences[4][2] ,word_4:word_sequences[4][3], word_5:word_sequences[4][4]},
            {word_1: word_sequences[5][0],word_2:word_sequences[5][1] , word_3:word_sequences[5][2] ,word_4:word_sequences[5][3], word_5:word_sequences[5][4]},
            {word_1: word_sequences[6][0],word_2:word_sequences[6][1] , word_3:word_sequences[6][2] ,word_4:word_sequences[6][3], word_5:word_sequences[6][4]},
            {word_1: word_sequences[7][0],word_2:word_sequences[7][1] , word_3:word_sequences[7][2] ,word_4:word_sequences[7][3], word_5:word_sequences[7][4]},
            {word_1: word_sequences[8][0],word_2:word_sequences[8][1] , word_3:word_sequences[8][2] ,word_4:word_sequences[8][3], word_5:word_sequences[8][4]},
            {word_1: word_sequences[9][0],word_2:word_sequences[9][1] , word_3:word_sequences[9][2] ,word_4:word_sequences[9][3], word_5:word_sequences[9][4]},
            {word_1: word_sequences[10][0],word_2:word_sequences[10][1] , word_3:word_sequences[10][2] ,word_4:word_sequences[10][3], word_5:word_sequences[10][4]},
            {word_1: word_sequences[11][0],word_2:word_sequences[11][1] , word_3:word_sequences[11][2] ,word_4:word_sequences[11][3], word_5:word_sequences[11][4]},
            {word_1: word_sequences[12][0],word_2:word_sequences[12][1] , word_3:word_sequences[12][2] ,word_4:word_sequences[12][3], word_5:word_sequences[12][4]},
            {word_1: word_sequences[13][0],word_2:word_sequences[13][1] , word_3:word_sequences[13][2] ,word_4:word_sequences[13][3], word_5:word_sequences[13][4]},
            {word_1: word_sequences[14][0],word_2:word_sequences[14][1] , word_3:word_sequences[14][2] ,word_4:word_sequences[14][3], word_5:word_sequences[14][4]},
            {word_1: word_sequences[15][0],word_2:word_sequences[15][1] , word_3:word_sequences[15][2] ,word_4:word_sequences[15][3], word_5:word_sequences[15][4]},
            {word_1: word_sequences[16][0],word_2:word_sequences[16][1] , word_3:word_sequences[16][2] ,word_4:word_sequences[16][3], word_5:word_sequences[16][4]},
            {word_1: word_sequences[17][0],word_2:word_sequences[17][1] , word_3:word_sequences[17][2] ,word_4:word_sequences[17][3], word_5:word_sequences[17][4]},
            {word_1: word_sequences[18][0],word_2:word_sequences[18][1] , word_3:word_sequences[18][2] ,word_4:word_sequences[18][3], word_5:word_sequences[18][4]},
            {word_1: word_sequences[19][0],word_2:word_sequences[19][1] , word_3:word_sequences[19][2] ,word_4:word_sequences[19][3], word_5:word_sequences[19][4]},
            {word_1: word_sequences[20][0],word_2:word_sequences[20][1] , word_3:word_sequences[20][2] ,word_4:word_sequences[20][3], word_5:word_sequences[20][4]},
            {word_1: word_sequences[21][0],word_2:word_sequences[21][1] , word_3:word_sequences[21][2] ,word_4:word_sequences[21][3], word_5:word_sequences[21][4]},
            {word_1: word_sequences[22][0],word_2:word_sequences[22][1] , word_3:word_sequences[22][2] ,word_4:word_sequences[22][3], word_5:word_sequences[22][4]},
            {word_1: word_sequences[23][0],word_2:word_sequences[23][1] , word_3:word_sequences[23][2] ,word_4:word_sequences[23][3], word_5:word_sequences[23][4]},
        ],
        randomize_order:true
    }
phon_sim_timeline.push(phon_sim_procedure)

// strategy question
var talk_out_loud_phon_sim = {
    type: 'survey-multi-choice',
    questions: [
    {prompt: "Did you repeat the words out loud to yourself to remember them?", options: ['Yes','No'], required:true}, 
    ],
    on_finish: function (data) {
    data.talk_out_loud = data.response.Q0
    data.experiment = 'phon_sim'
    }
};
phon_sim_timeline.push(talk_out_loud_phon_sim)

// strategy question
var open_text_survey_phon_sim = {
        type: 'survey-text',
        questions: [
        {prompt: "Anything else you would like to add about the strategy you used to remember the words?"}, 
        ],
        on_finish: function (data) {
        data.strategy_free_ans = data.response.Q0
        data.experiment = 'phon_sim'
        }
    };
phon_sim_timeline.push(open_text_survey_phon_sim)
    
// create thank-you node
var thanks_phon_sim = {
        type: 'instructions',
        pages: ['<p>Thank you! This experiment is finished. Please proceed.'],
        allow_keys: false,
        show_clickable_nav: true,
        data: {experiment:'phon_sim'},
        on_load: function () {
            saveData(worker_id + '_alexinoia_browserinteraction_data.csv', jsPsych.data.getInteractionData().csv())
            saveData(worker_id + '_alexinoia_data.csv', jsPsych.data.get().csv()); 
        }
        }
    // add this node to the phon_sim_timeline
phon_sim_timeline.push(thanks_phon_sim);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// RHYME JUDGMENT TIMELINE ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var rhyme_timeline = [];

// create instructions node
var instructions_rhyme = {
    type: 'instructions',
    pages: ['This is an experiment investigating rhyme judgments. ' +
    '<p>You will see two images at a time and have to judge whether the names of the items rhyme or not. </p>' +
    '<p>For example, if you see a picture of a LAMP and a picture of a CAMP, you should respond that they rhyme (press UP arrow). If you see a picture of a BEAR and a picture of a CUP, you should respond that they <b>do not</b> rhyme (press DOWN arrow).</p>' +
    '<p>All the words are short (one syllable). Please make the judgments as quickly and accurately as possible.'+
    '<p>Press UP arrow key if you think they rhyme, press DOWN arrow key if you think they do not rhyme.'+
      '<p>Click the button below to begin.</p>'],
    allow_keys: false,
    show_clickable_nav: true,
    data: {experiment:'rhyme'}
  }
// add this node to the rhyme_timeline
rhyme_timeline.push(instructions_rhyme);

var cur_wait;
// EXPERIMENT GOES HERE
var fixation_rhyme = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:60px;">+</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: function(){
      cur_wait = jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000], 1)[0]
      return cur_wait},
    data: {experiment:'rhyme'},
    on_finish: function(data){
        data.wait_time = cur_wait;
      }
    }

var square_attention_rhyme = {
      type: 'html-keyboard-response',
      stimulus: '<img src="square.png" width="306" height="306" style="position: fixed;left:14%;top:30%">'+'<img src="square.png" width="306" height="306" style="position: fixed;left:64%;top:30%">',
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      stimulus_duration: 500,
      data: {experiment:'rhyme'}
      // or function(){
      //return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];}
      }

var practice_rhyme = {
        type: 'categorize-html',
        stimulus: function () {
            // note: the outer parentheses are only here so we can break the line
            return (
              '<div style="border: 3px solid #000000; position: fixed;left:14%;top:30%"><img src="'+jsPsych.timelineVariable("image_1", true)+'" width="300"></div>'
              +'<div style="border: 3px solid #000000; position: fixed;left:64%;top:30%"><img src="'+jsPsych.timelineVariable("image_2", true)+'" width="300"></div>'
            );
        },
        choices: ['ArrowUp', 'ArrowDown'],
        key_answer: jsPsych.timelineVariable('cor_key'),
        trial_duration: 5000,
        feedback_duration: 1000,
        prompt: '<div style="font-size:24px;justify-content: center; align-items: center; text-align: center;padding: 100px 0"><p>Rhyme</p>'+ 
        '<p><img src="arrow_up.png" style="padding: 0px 0px 100px;"></p>'+
        '<p><img src="arrow_down.png" style="padding: 0px 0px;"></p>'+
        '<p>Do not rhyme</p></div>',
        show_stim_with_feedback: false,
        correct_text: 'Well done!',
        incorrect_text: 'Better luck next time!',
        show_feedback_on_timeout: true,
        data: {phase: 'training', 
              image_1:jsPsych.timelineVariable("image_1"),
              image_2:jsPsych.timelineVariable("image_2"),
              cor_key:jsPsych.timelineVariable("cor_key"),
              type:'NA',
              experiment:'rhyme'
            }
      }

var experiment_begins = {
        type: 'instructions',
        pages: ['<p>Now the real experiment begins...'],
        allow_keys: false,
        show_clickable_nav: true
      }

var training_trials_with_variables_rhyme = {
        timeline: [fixation_rhyme, square_attention_rhyme,practice_rhyme],
        timeline_variables: [
          {image_1: 'visual/dress.png', image_2: 'visual/chess.png', cor_key: 'ArrowUp', type:'ortho'},
          {image_1: 'visual/mouse.png', image_2: 'visual/dress.png', cor_key: 'ArrowDown', type:'NR'},
          {image_1: 'visual/house.png', image_2: 'visual/mouse.png', cor_key: 'ArrowUp', type: 'ortho'},
          {image_1: 'visual/chess.png', image_2: 'visual/suit.png', cor_key: 'ArrowDown', type:'NR'},
        ],
        randomize_order: true
            }

rhyme_timeline.push(training_trials_with_variables_rhyme, experiment_begins); 

var experiment_rhyme = {
  type: 'html-keyboard-response',
  stimulus: function () {
      // note: the outer parentheses are only here so we can break the line
      return (
        '<div style="border: 3px solid #000000; position: fixed;left:14%;top:30%"><img src="'+jsPsych.timelineVariable("image_1", true)+'" width="300"></div>'
        +'<div style="border: 3px solid #000000; position: fixed;left:64%;top:30%"><img src="'+jsPsych.timelineVariable("image_2", true)+'" width="300"></div>'
      );
  },
  choices: ['ArrowUp', 'ArrowDown'],
  key_answer: jsPsych.timelineVariable('cor_key'),
  trial_duration: 5000,
  prompt: '<div style="font-size:24px;justify-content: center; align-items: center; text-align: center;padding: 100px 0"><p>Rhyme</p>'+ 
  '<p><img src="arrow_up.png" style="padding: 0px 0px 100px;"></p>'+
  '<p><img src="arrow_down.png" style="padding: 0px 0px;"></p>'+
  '<p>Do not rhyme</p></div>',
  data: {phase: 'experiment',
    image_1:jsPsych.timelineVariable("image_1"),
    image_2:jsPsych.timelineVariable("image_2"),
    cor_key:jsPsych.timelineVariable("cor_key"),
    type:jsPsych.timelineVariable("type"),
    experiment:'rhyme'},
  on_finish: function(data){
      if(jsPsych.pluginAPI.compareKeys(data.response, jsPsych.timelineVariable("cor_key").toLowerCase())){
        data.correct = true;
      } else {
        data.correct = false;
      }
    }
}

// insert real images here
var exp_trials_with_variables_rhyme = {
  timeline: [fixation_rhyme, square_attention_rhyme,experiment_rhyme],
  timeline_variables: [
    // create trials 1/3 rhyme + ortho, 1/3 rhyme + non-ortho, 1/3 no rhyme = 60 trials
    {image_1: 'visual/spoon.png', image_2: 'visual/moon.png', cor_key: 'ArrowUp',type:'ortho'},
    {image_1: 'visual/deer.png', image_2: 'visual/beer.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/well.png', image_2: 'visual/bell.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/box.png', image_2: 'visual/fox.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/cake.png', image_2: 'visual/rake.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/cat.png', image_2: 'visual/hat.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/sock.png', image_2: 'visual/clock.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/bone.png', image_2: 'visual/cone.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/rose.png', image_2: 'visual/nose.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/wave.png', image_2: 'visual/cave.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/chain.png', image_2: 'visual/brain.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/fan.png', image_2: 'visual/man.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/saw.png', image_2: 'visual/claw.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/flag.png', image_2: 'visual/bag.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/bin.png', image_2: 'visual/chin.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/star.png', image_2: 'visual/jar.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/egg.png', image_2: 'visual/leg.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/king.png', image_2: 'visual/ring.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/shark.png', image_2: 'visual/park.png', cor_key: 'ArrowUp', type:'ortho'},
    {image_1: 'visual/cab.png', image_2: 'visual/crab.png', cor_key: 'ArrowUp', type:'ortho'},
// now non-ortho
{image_1: 'visual/chair.png', image_2: 'visual/pear.png', cor_key: 'ArrowUp',type:'non-ortho'},
{image_1: 'visual/plane.png', image_2: 'visual/train.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/soap.png', image_2: 'visual/rope.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/key.png', image_2: 'visual/tree.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/snail.png', image_2: 'visual/whale.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/bear.png', image_2: 'visual/hair.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/drawer.png', image_2: 'visual/door.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/tie.png', image_2: 'visual/fly.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/train.png', image_2: 'visual/crane.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/bear.png', image_2: 'visual/square_rhyme.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/plane.png', image_2: 'visual/chain.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/nail.png', image_2: 'visual/whale.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/drum.png', image_2: 'visual/thumb.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/pope.png', image_2: 'visual/soap.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/socks.png', image_2: 'visual/fox.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/bed.png', image_2: 'visual/bread.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/dart.png', image_2: 'visual/heart.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/eye.png', image_2: 'visual/tie.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/wheel.png', image_2: 'visual/seal.png', cor_key: 'ArrowUp', type:'non-ortho'},
{image_1: 'visual/screw.png', image_2: 'visual/shoe.png', cor_key: 'ArrowUp', type:'non-ortho'},
// now non-rhyme (half from ortho, half from non-ortho)
{image_1: 'visual/soap.png', image_2: 'visual/shoe.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/jar.png', image_2: 'visual/whale.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/bear.png', image_2: 'visual/crane.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/drawer.png', image_2: 'visual/chair.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/train.png', image_2: 'visual/screw.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/dart.png', image_2: 'visual/tie.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/fly.png', image_2: 'visual/plane.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/pear.png', image_2: 'visual/rope.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/key.png', image_2: 'visual/snail.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/tree.png', image_2: 'visual/door.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/spoon.png', image_2: 'visual/crab.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/shark.png', image_2: 'visual/moon.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/king.png', image_2: 'visual/cab.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/egg.png', image_2: 'visual/ring.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/cat.png', image_2: 'visual/sock.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/well.png', image_2: 'visual/rose.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/nose.png', image_2: 'visual/bell.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/rake.png', image_2: 'visual/park.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/brain.png', image_2: 'visual/clock.png', cor_key: 'ArrowDown',type:'NR'},
{image_1: 'visual/claw.png', image_2: 'visual/beer.png', cor_key: 'ArrowDown',type:'NR'}
  ],
  randomize_order: true
      }
rhyme_timeline.push(exp_trials_with_variables_rhyme); 

var talk_out_loud_rhyme = {
    type: 'survey-multi-choice',
    questions: [
      {prompt: "Did you say the words out loud to yourself to judge whether they rhymed?", options: ['Yes', 'No'],required:true}
    ],
    on_finish: function (data) {
      data.talk_out_loud = data.response.Q0
      data.experiment = 'rhyme'
    }
  };
  rhyme_timeline.push(talk_out_loud_rhyme)

var open_text_survey_rhyme = {
  type: 'survey-text',
  questions: [
    {prompt: "Anything else you would like to add about the strategy you used to make the rhyme judgments?"}, 
  ],
  on_finish: function (data) {
    data.strategy_free_ans = data.response.Q0
    data.experiment = 'rhyme'
  }
};
rhyme_timeline.push(open_text_survey_rhyme)

// create thank-you node
var thanks_rhyme = {
    type: 'instructions',
    pages: ['<p>Thank you! This experiment is finished. Please proceed.'],
    allow_keys: false,
    show_clickable_nav: true,
    data: {experiment:'rhyme'},
    on_load: function () {
      saveData(worker_id + '_alexinoia_browserinteraction_data.csv', jsPsych.data.getInteractionData().csv())
      saveData(worker_id + '_alexinoia_data.csv', jsPsych.data.get().csv()); 
    }
  }
// add this node to the rhyme_timeline
rhyme_timeline.push(thanks_rhyme);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// SAME DIFFERENT TIMELINE ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var same_different_timeline = [];
  
var images = ['arrow_up.png','arrow_down.png', 'square.png', 'same_diff_imgs/D11.gif', 'same_diff_imgs/D07.gif', 'same_diff_imgs/D09.gif',
'same_diff_imgs/C04.gif', 'same_diff_imgs/C14.gif','same_diff_imgs/C09.gif'];

var dogs = ['same_diff_imgs/D11.gif', 'same_diff_imgs/D07.gif', 'same_diff_imgs/D09.gif']
var cats = ['same_diff_imgs/C04.gif', 'same_diff_imgs/C14.gif','same_diff_imgs/C09.gif']

var image_list = jsPsych.randomization.shuffle(dogs).concat(jsPsych.randomization.shuffle(cats))

var categorical_timeline_vars = [
  // SAME CATEGORY TRIALS (36)
  // all combinations of dogs no inversion
  {image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[0], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[0], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[1], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[1], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[2], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[2], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
  // all combinations of dogs with inversion
  {image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[0], image_2: image_list[1], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[0], image_2: image_list[2], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[1], image_2: image_list[0], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[1], image_2: image_list[2], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[2], image_2: image_list[0], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[2], image_2: image_list[1], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'yes',same_animal:'yes'},
  // all combinations of cats with no inversion
  {image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[3], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[3], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[4], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[4], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[5], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[5], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
  {image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
  // all combinations of cats with inverstion
  {image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[3], image_2: image_list[4], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[3], image_2: image_list[5], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[4], image_2: image_list[3], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[4], image_2: image_list[5], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[5], image_2: image_list[3], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[5], image_2: image_list[4], answer: 'same',inverted:'yes',same_animal:'yes'},
  {image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'yes',same_animal:'yes'},
  // DIFFERENT CATEGORY TRIALS (36)
  // all combinations of cats and dogs with  inversion
  {image_1: image_list[0], image_2: image_list[3], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[0], image_2: image_list[4], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[0], image_2: image_list[5], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[1], image_2: image_list[3], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[1], image_2: image_list[4], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[1], image_2: image_list[5], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[2], image_2: image_list[3], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[2], image_2: image_list[4], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[2], image_2: image_list[5], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[3], image_2: image_list[0], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[3], image_2: image_list[1], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[3], image_2: image_list[2], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[4], image_2: image_list[0], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[4], image_2: image_list[1], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[4], image_2: image_list[2], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[5], image_2: image_list[0], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[5], image_2: image_list[1], answer: 'different',inverted:'yes',same_animal:'no'},
  {image_1: image_list[5], image_2: image_list[2], answer: 'different',inverted:'yes',same_animal:'no'},
  // all combinations of cats and dogs with no inversion
  {image_1: image_list[0], image_2: image_list[3], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[0], image_2: image_list[4], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[0], image_2: image_list[5], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[1], image_2: image_list[3], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[1], image_2: image_list[4], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[1], image_2: image_list[5], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[2], image_2: image_list[3], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[2], image_2: image_list[4], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[2], image_2: image_list[5], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[3], image_2: image_list[0], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[3], image_2: image_list[1], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[3], image_2: image_list[2], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[4], image_2: image_list[0], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[4], image_2: image_list[1], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[4], image_2: image_list[2], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[5], image_2: image_list[0], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[5], image_2: image_list[1], answer: 'different',inverted:'no',same_animal:'no'},
  {image_1: image_list[5], image_2: image_list[2], answer: 'different',inverted:'no',same_animal:'no'}
  // all combincations of cats and dogs with second inverted
  ]

var identical_timeline_vars = [
// IDENTICAL TRIALS (6) - must repeat 12 times
// all identical pairs of cats and dogs with no inversion
// 1
{image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
// 2
{image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
// 3
{image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
// 4
{image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
// 5
{image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
// 6
{image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
// 7
{image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
// 8
{image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
// 9
{image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
// 10
{image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
// 11
{image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
// 12
{image_1: image_list[0], image_2: image_list[0], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[1], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[2], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[3], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[4], answer: 'same',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[5], answer: 'same',inverted:'no',same_animal:'yes'},
// NON-IDENTICAL TRIALS WITH SAME CATEGORY (BOTH DOGS OR BOTH CATS) (36)
// all combinations of dogs with no inverted
{image_1: image_list[0], image_2: image_list[1], answer: 'different',inverted:'no',same_animal:'yes'},
{image_1: image_list[0], image_2: image_list[2], answer: 'different',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[0], answer: 'different',inverted:'no',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[2], answer: 'different',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[0], answer: 'different',inverted:'no',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[1], answer: 'different',inverted:'no',same_animal:'yes'},
// all combinations of dogs with inversion
{image_1: image_list[0], image_2: image_list[1], answer: 'different',inverted:'yes',same_animal:'yes'},
{image_1: image_list[0], image_2: image_list[2], answer: 'different',inverted:'yes',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[0], answer: 'different',inverted:'yes',same_animal:'yes'},
{image_1: image_list[1], image_2: image_list[2], answer: 'different',inverted:'yes',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[0], answer: 'different',inverted:'yes',same_animal:'yes'},
{image_1: image_list[2], image_2: image_list[1], answer: 'different',inverted:'yes',same_animal:'yes'},
// all combinations of cats with no inverted
{image_1: image_list[3], image_2: image_list[4], answer: 'different',inverted:'no',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[5], answer: 'different',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[3], answer: 'different',inverted:'no',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[5], answer: 'different',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[3], answer: 'different',inverted:'no',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[4], answer: 'different',inverted:'no',same_animal:'yes'},
// all combinations of cats with inverstion
{image_1: image_list[3], image_2: image_list[4], answer: 'different',inverted:'yes',same_animal:'yes'},
{image_1: image_list[3], image_2: image_list[5], answer: 'different',inverted:'yes',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[3], answer: 'different',inverted:'yes',same_animal:'yes'},
{image_1: image_list[4], image_2: image_list[5], answer: 'different',inverted:'yes',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[3], answer: 'different',inverted:'yes',same_animal:'yes'},
{image_1: image_list[5], image_2: image_list[4], answer: 'different',inverted:'yes',same_animal:'yes'},
// NON-IDENTICAL TRIALS WITH DIFFERENT CATEGORIES (DOG AND CAT) (36)
// all combinations of cats and dogs with inversion
{image_1: image_list[0], image_2: image_list[3], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[0], image_2: image_list[4], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[0], image_2: image_list[5], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[1], image_2: image_list[3], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[1], image_2: image_list[4], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[1], image_2: image_list[5], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[2], image_2: image_list[3], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[2], image_2: image_list[4], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[2], image_2: image_list[5], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[3], image_2: image_list[0], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[3], image_2: image_list[1], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[3], image_2: image_list[2], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[4], image_2: image_list[0], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[4], image_2: image_list[1], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[4], image_2: image_list[2], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[5], image_2: image_list[0], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[5], image_2: image_list[1], answer: 'different',inverted:'yes',same_animal:'no'},
{image_1: image_list[5], image_2: image_list[2], answer: 'different',inverted:'yes',same_animal:'no'},
// all combincations of cats and dogs with no inversion
{image_1: image_list[0], image_2: image_list[3], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[0], image_2: image_list[4], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[0], image_2: image_list[5], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[1], image_2: image_list[3], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[1], image_2: image_list[4], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[1], image_2: image_list[5], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[2], image_2: image_list[3], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[2], image_2: image_list[4], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[2], image_2: image_list[5], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[3], image_2: image_list[0], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[3], image_2: image_list[1], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[3], image_2: image_list[2], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[4], image_2: image_list[0], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[4], image_2: image_list[1], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[4], image_2: image_list[2], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[5], image_2: image_list[0], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[5], image_2: image_list[1], answer: 'different',inverted:'no',same_animal:'no'},
{image_1: image_list[5], image_2: image_list[2], answer: 'different',inverted:'no',same_animal:'no'}]

// create instructions node
var instructions_same_different = {
  type: 'instructions',
  pages: ['This is an experiment investigating how you judge if two things are the same or different. ' +
  '<p>You will see two images presented one after another, and you will be asked to judge whether the two images are the same or different. </p>' +
  '<p>Whether "the same" means completely identical (e.g., same images of same dog) or belonging to the same category (e.g., two images of different dogs) will depend on the trial so pay attention to the instructions as you go along. </p>' +
    '<p>Click the button below to begin.</p>'],
  allow_keys: false,
  data: {experiment:'same_different'},
  show_clickable_nav: true
}
// add this node to the same_different_timeline
same_different_timeline.push(instructions_same_different);

//You will see pairs of small images with one image presented just before the second one. Press the up arrow if the two images are *exactly the same* and the down arrow if they are different. Please respond as quickly as possible, but not so quick that you start making errors.

// instructions for image identity
var instr_image_id = {
  type: 'instructions',
  pages: ['You will now see pairs of small images with one image presented just before the second one. Press the up arrow if the two images are <b>exactly the same</b> and the down arrow if they are different.'+
  '<p>Please respond as quickly as possible, but not so quick that you start making errors.</p>'+
  '<p>If you make a mistake, you will get a warning. If you are making too many mistakes, you are probably rushing.</p>'],
  allow_keys: false,
  show_clickable_nav: true,
  on_load: function () {
    saveData(worker_id + '_alexinoia_browserinteraction_data.csv', jsPsych.data.getInteractionData().csv())
    saveData(worker_id + '_alexinoia_data.csv', jsPsych.data.get().csv()); 
  }
}

// instructions for image category
var instr_image_category = {
  type: 'instructions',
  pages: ['You will now see pairs of small images with one image presented just before the second one. Press the up arrow if the two images are of <b>the same animal</b>, e.g., both are cats and the down arrow if they are different.'+
  '<p>Please respond as quickly as possible, but not so quick that you start making errors.</p>'+
  '<p>If you make a mistake, you will get a warning. If you are making too many mistakes, you are probably rushing.</p>'],
  allow_keys: false,
  show_clickable_nav: true,
  on_load: function () {
    saveData(worker_id + '_alexinoia_browserinteraction_data.csv', jsPsych.data.getInteractionData().csv())
    saveData(worker_id + '_alexinoia_data.csv', jsPsych.data.get().csv()); 
  }
}

// EXPERIMENT GOES HERE
var fixation_same_different = {
    type: 'html-keyboard-response',
    stimulus:'<div style="font-size:60px">+</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: 750,
    data: {experiment:'same_different'}
    }
var blank = {
      type: 'html-keyboard-response',
      stimulus: ' ',
      choices: jsPsych.NO_KEYS,
      trial_duration: 300,
      data: {experiment:'same_different'}
      }

var feedback_same_different = {
      type: 'html-keyboard-response',
      trial_duration: function() {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if (!last_trial_correct) {
            return 500
        } else {
            return 0
        }
      },
      choices: jsPsych.NO_KEYS,
      stimulus_duration: 500,
      stimulus: function () {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if (!last_trial_correct) {
          return '<div style="color:darkred; font-size:40px">Incorrect!</div>'
        } else if (last_trial_correct) {
          return ' '
        }
      }
    }

// make a procedure for image category judgments
var picture_trial_category = {
        type: 'html-keyboard-response',
        stimulus: function () {
          // note: the outer parentheses are only here so we can break the line
          var rand_pos = jsPsych.randomization.sampleWithoutReplacement([['40%','48%'],['55%','49%'], ['48%','34%'], ['48%', '62%']],2)
          if (jsPsych.timelineVariable("inverted") == 'no') {
            return (
            ['<img src="square.png" width="100" height="100" style="position: fixed;left:39%;top:47%">'+
            '<img src="square.png" width="100" height="100" style="position: fixed;left:54%;top:47%">' +
            '<img src="square.png" width="100" height="100" style="position: fixed;left:46.5%;top:32%">'+
            '<img src="square.png" width="100" height="100" style="position: fixed;left:46.5%;top:61%">'+
            '<div style="font-size:60px; text-align: center;margin-top:35.2%">+</div>'+
            '<div id="first" style="position: fixed;visibility: hidden;left:'+rand_pos[0][0]+';top:'+rand_pos[0][1]+'"><img src="'+jsPsych.timelineVariable("image_1", true)+'"></div>'+ 
            '<div id="delayed" style="position: fixed;visibility: hidden;left:'+rand_pos[1][0]+';top:'+rand_pos[1][1]+'"><img src="'+jsPsych.timelineVariable("image_2", true)+'"></div>']
          );
        } else if (jsPsych.timelineVariable("inverted") == 'yes') {
          return (
            ['<img src="square.png" width="100" height="100" style="position: fixed;left:39%;top:47%">'+
            '<img src="square.png" width="100" height="100" style="position: fixed;left:54%;top:47%">' +
            '<img src="square.png" width="100" height="100" style="position: fixed;left:46.5%;top:32%">'+
            '<img src="square.png" width="100" height="100" style="position: fixed;left:46.5%;top:61%">'+
            '<div style="font-size:60px;text-align: center;margin-top:35.2%">+</div>'+
            '<div id="first" style="position: fixed;visibility: hidden;left:'+rand_pos[0][0]+';top:'+rand_pos[0][1]+'"><img src="'+jsPsych.timelineVariable("image_1", true)+'" style="-webkit-transform: scaleX(-1);transform: scaleX(-1);"></div>'+ 
            '<div id="delayed" style="position: fixed;visibility: hidden;left:'+rand_pos[1][0]+';top:'+rand_pos[1][1]+'"><img src="'+jsPsych.timelineVariable("image_2", true)+'" style="-webkit-transform: scaleX(-1);transform: scaleX(-1);"></div>']
          );
        }
      },
      /*  prompt: '<div style="font-size:24px;justify-content: center; align-items: center; text-align: center;padding: 100px 0"><p>Same category</p>'+ 
        '<p><img src="arrow_up.png" style="padding: 0px 0px 100px;"></p>'+
        '<p><img src="arrow_down.png" style="padding: 0px 0px;"></p>'+
        '<p>Different category</p></div>', */
        on_load: function() {
          // wait for 300 ms, then show the prompt
          setTimeout(function() {
            document.getElementById('first').style.visibility = "visible";
          }, 500);
          setTimeout(function() {
            document.getElementById('delayed').style.visibility = "visible";
          }, 800);},
        prompt: '<div style="margin-top: 300px;"><p>Press <b>up arrow key</b> if the images are the same kind of animal, press <b>down arrow key</b> if they are of different animals.</p></div>',
        choices: ['ArrowUp', 'ArrowDown'],
        data: {judgment_type:'categorical_image', 
        stim_1: jsPsych.timelineVariable("image_1"), 
        stim_2: jsPsych.timelineVariable("image_2"),
        inverted: jsPsych.timelineVariable("inverted"),
        answer: jsPsych.timelineVariable('answer'),
        experiment:'same_different'},
        on_finish: function(data) {
          if (data.answer == 'same') { 
            if (data.response == 'arrowup') {
              data.true_pos = 1
              data.correct = true
            } else if (data.response == 'arrowdown') {
              data.false_neg = 1
              data.correct = false
            }
          } else if (data.answer == 'different') {
            if (data.response == 'arrowup') {
              data.false_pos = 1
              data.correct = false
            } else if (data.response == 'arrowdown') {
              data.true_neg = 1
              data.correct = true
            }
          }
        }
      }
// get first 50 category trials
var img_category_procedure_0_50 = {
        timeline: [fixation_same_different,picture_trial_category,feedback_same_different,blank],
        timeline_variables: categorical_timeline_vars,
          randomize_order:true,
          sample: {
            type: 'without-replacement',
            size: 50
        }
      }
// get second 50 category trials
var img_category_procedure_50_100 = {
        timeline: [fixation_same_different,picture_trial_category,feedback_same_different,blank],
        timeline_variables: categorical_timeline_vars,
          randomize_order:true,
          sample: {
            type: 'without-replacement',
            size: 50
        }
      }

// make procedure for image identity judgments
var picture_trial_identity = {
    type: 'html-keyboard-response',
    stimulus: function () {
      // note: the outer parentheses are only here so we can break the line
      var rand_pos = jsPsych.randomization.sampleWithoutReplacement([['40%','48%'],['55%','49%'], ['48%','34%'], ['48%', '62%']],2)
      if (jsPsych.timelineVariable("inverted") == 'no') {
        return (
        ['<img src="square.png" width="100" height="100" style="position: fixed;left:39%;top:47%">'+
        '<img src="square.png" width="100" height="100" style="position: fixed;left:54%;top:47%">' +
        '<img src="square.png" width="100" height="100" style="position: fixed;left:46.5%;top:32%">'+
        '<img src="square.png" width="100" height="100" style="position: fixed;left:46.5%;top:61%">'+
        '<div style="font-size:60px; text-align: center;margin-top:45.5%">+</div>'+
        '<div id="first" style="position: fixed;visibility: hidden;left:'+rand_pos[0][0]+';top:'+rand_pos[0][1]+'"><img src="'+jsPsych.timelineVariable("image_1", true)+'"></div>'+ 
        '<div id="delayed" style="position: fixed;visibility: hidden;left:'+rand_pos[1][0]+';top:'+rand_pos[1][1]+'"><img src="'+jsPsych.timelineVariable("image_2", true)+'"></div>']
      );
    } else if (jsPsych.timelineVariable("inverted") == 'yes') {
      return (
        ['<img src="square.png" width="100" height="100" style="position: fixed;left:39%;top:47%">'+
        '<img src="square.png" width="100" height="100" style="position: fixed;left:54%;top:47%">' +
        '<img src="square.png" width="100" height="100" style="position: fixed;left:46.5%;top:32%">'+
        '<img src="square.png" width="100" height="100" style="position: fixed;left:46.5%;top:61%">'+
        '<div style="font-size:60px;text-align: center;margin-top:45.5%">+</div>'+
        '<div id="first" style="position: fixed;visibility: hidden;left:'+rand_pos[0][0]+';top:'+rand_pos[0][1]+'"><img src="'+jsPsych.timelineVariable("image_1", true)+'" style="-webkit-transform: scaleX(-1);transform: scaleX(-1);"></div>'+ 
        '<div id="delayed" style="position: fixed;visibility: hidden;left:'+rand_pos[1][0]+';top:'+rand_pos[1][1]+'"><img src="'+jsPsych.timelineVariable("image_2", true)+'" style="-webkit-transform: scaleX(-1);transform: scaleX(-1);"></div>']          
        );
    }
    },
    on_load: function() {
      // wait for 300 ms, then show the second prompt
      setTimeout(function() {
        document.getElementById('first').style.visibility = "visible";
      }, 500);
      setTimeout(function() {
        document.getElementById('delayed').style.visibility = "visible";
      }, 800);},
    prompt: '<div style="margin-top: 300px;"><p>Press <b>up arrow key</b> if the images are identical, press <b>down arrow key</b> if they are different.</p></div>',
    choices: ['ArrowUp', 'ArrowDown'],
    answer: jsPsych.timelineVariable("answer"),
    data: {judgment_type:'identical_image', 
      stim_1: jsPsych.timelineVariable("image_1"), 
      stim_2: jsPsych.timelineVariable("image_2"), 
      inverted: jsPsych.timelineVariable("inverted"),
      answer:jsPsych.timelineVariable("answer"),
      experiment:'same_different'},
    on_finish: function(data) {
        if (data.answer == 'same') { 
          if (data.response == 'arrowup') {
            data.true_pos = 1
            data.correct = true
          } else if (data.response == 'arrowdown') {
            data.false_neg = 1
            data.correct = false
          }
        } else if (data.answer == 'different') {
          if (data.response == 'arrowup') {
            data.false_pos = 1
            data.correct = false
          } else if (data.response == 'arrowdown') {
            data.true_neg = 1
            data.correct = true
          }
        }
      }
    }

// get first 50 identity trials
var img_identity_procedure_0_50 = {
      timeline: [fixation_same_different,picture_trial_identity,feedback_same_different,blank],
      timeline_variables: identical_timeline_vars,
      sample: {
        type: 'without-replacement',
        size: 50 // change to 50
    }
    }//

// get second 50 identity trials
var img_identity_procedure_50_100 = {
      timeline: [fixation_same_different,picture_trial_identity,feedback_same_different,blank],
      timeline_variables: identical_timeline_vars,
      sample: {
        type: 'without-replacement',
        size: 50 // change to 50
    }
    }

// take a break every 50 trials
var take_a_break = {
        type: 'instructions',
        pages: ["Take a break now and press 'Next' when you're ready to continue..."],
        allow_keys: false,
        show_clickable_nav: true
      }

var img_identity_procedure = jsPsych.randomization.shuffle([img_identity_procedure_0_50,img_identity_procedure_50_100])
var img_category_procedure = jsPsych.randomization.shuffle([img_category_procedure_0_50,img_category_procedure_50_100])

// assign order
var random = jsPsych.randomization.shuffle([0,1])[0]
//var random = 0
if (random == 0) {
same_different_timeline.push(instr_image_id)
for (var i in img_identity_procedure){
    same_different_timeline.push(img_identity_procedure[i])
    same_different_timeline.push(take_a_break)
  }
same_different_timeline.push(instr_image_category)
for (var i in img_category_procedure){
   same_different_timeline.push(img_category_procedure[i])
   same_different_timeline.push(take_a_break)
 }
}
if (random == 1) {
  same_different_timeline.push(instr_image_category)
  for (var i in img_category_procedure){
     same_different_timeline.push(img_category_procedure[i])
     same_different_timeline.push(take_a_break)
   }
  same_different_timeline.push(instr_image_id)
  for (var i in img_identity_procedure){
      same_different_timeline.push(img_identity_procedure[i])
      same_different_timeline.push(take_a_break)
    }
  }

var talk_out_loud_same_different = {
  type: 'survey-multi-choice',
  questions: [
    {prompt: "Did you talk to yourself out loud while solving these tasks?", options:['Yes', 'No'], required:true}, 
  ],
  on_finish: function (data) {
    data.talk_out_loud = data.response.Q0
    data.experiment = 'same_different'
  }
};
same_different_timeline.push(talk_out_loud_same_different)

var open_text_survey_same_different = {
  type: 'survey-text',
  questions: [
    {prompt: "Anything else you would like to add about the strategy you used to solve these problems?"}, 
  ],
  on_finish: function (data) {
    data.strategy_free_ans = data.response.Q0
  }
};
same_different_timeline.push(open_text_survey_same_different)

// create thank-you node
var thanks_same_different = {
  type: 'instructions',
  pages: ['<p>Thank you! This experiment is finished. Please proceed.'],
  allow_keys: false,
  show_clickable_nav: true,
  data: {experiment:'same_different'},
  on_load: function () {
    saveData(worker_id + '_alexinoia_browserinteraction_data.csv', jsPsych.data.getInteractionData().csv())
    saveData(worker_id + '_alexinoia_data.csv', jsPsych.data.get().csv()); 
  }
}
// add this node to the timeline
same_different_timeline.push(thanks_same_different);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// TASK SWITCHING TIMELINE ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var task_switching_timeline = [];

var number_list_add = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
    51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96]

var number_list_sub = [13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
    51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]

var number_list_uncued = [13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
      51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96]
      
var number_list_colorcue = [13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
        51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96]

var number_list_symbolcue = [13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
            51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96]

  // create instructions node
var instructions_task_switching = {
      type: 'instructions',
      pages: ['This is an experiment investigating how you switch between differen tasks. ' +
      '<p>You will see some simple addition and subtraction problems (adding or subtraction 3) that you have to solve as quickly as you can. </p>' +
      '<p>During an addition block, for example, you might see 35 to which you would answer 38 (35 + 3 = 38). <br>If you saw 35 during a subtraction block, you should answer 32 (35 - 3 = 32).</p>' +
      '<p>Sometimes there will just be problems of the same kind (i.e. only plus or only minus), and sometimes they will switch. You will get more instructions as you go along. '+
      '<p>Use the number keys on your keyboard to answer the problems.'+
        '<p>Click the button below to begin.</p>'],
      allow_keys: false,
      data: {experiment:'task_switching'},
      show_clickable_nav: true
    }
  // add this node to the task_switching_timeline
  task_switching_timeline.push(instructions_task_switching);

  var sub_instr = {
    type: 'instructions',
    pages: ['<p>During the following block, you should subtract 3 from every number. First there will be 10 training trials with feedback, then 30 trials without.'],
    allow_keys: false,
    show_clickable_nav: true,
    data: {experiment:'task_switching'},
    on_load: function () {
      saveData(worker_id + '_alexinoia_browserinteraction_data.csv', jsPsych.data.getInteractionData().csv())
      saveData(worker_id + '_alexinoia_data.csv', jsPsych.data.get().csv()); 
    }
  }

  var add_instr = {
    type: 'instructions',
    pages: ['<p>During the following block, you should add 3 to every number. First there will be 10 training trials with feedback, then 30 trials without.'],
    allow_keys: false,
    show_clickable_nav: true,
    data: {experiment:'task_switching'},
    on_load: function () {
      saveData(worker_id + '_alexinoia_browserinteraction_data.csv', jsPsych.data.getInteractionData().csv())
      saveData(worker_id + '_alexinoia_data.csv', jsPsych.data.get().csv()); 
    }
  }

  var switch_uncued_instr = {
    type: 'instructions',
    pages: ['<p>During the following block, you should switch between adding and subtracting 3. Start by adding 3 to the first number, then subtract 3 from the second, and so on.'+
    '<p>There will be no cue indicating whether you have to add or subtract on a given trial, you will have to keep track of that yourself. </p>'+
  '<p>First there will be 10 training trials with feedback, then 30 trials without.</p>'],
    allow_keys: false,
    show_clickable_nav: true,
    data: {experiment:'task_switching'},
    on_load: function () {
      saveData(worker_id + '_alexinoia_browserinteraction_data.csv', jsPsych.data.getInteractionData().csv())
      saveData(worker_id + '_alexinoia_data.csv', jsPsych.data.get().csv()); 
    }
  }

  var switch_colorcue_instr = {
    type: 'instructions',
    pages: ['<p>During the following block, you should switch between adding and subtracting 3.<p>'+
  '<p>If the number is written in <b style="color:red">red</b> you should add 3, if the number is written in  <b style="color:blue">blue</b> you should subtract 3.'+
  '<p>First there will be 10 training trials with feedback, then 30 trials without.</p>'],
    allow_keys: false,
    data: {experiment:'task_switching'},
    show_clickable_nav: true,
    on_load: function () {
      saveData(worker_id + '_alexinoia_browserinteraction_data.csv', jsPsych.data.getInteractionData().csv())
      saveData(worker_id + '_alexinoia_data.csv', jsPsych.data.get().csv()); 
    }
  }

  var switch_symbolcue_instr = {
    type: 'instructions',
    pages: ['<p>During the following block, you should switch between adding and subtracting 3.<p>'+
    '<p>If the number is followed by a <b style="font-size:42px;">+</b> you should add 3, if the number followed by a <b style="font-size:42px;">-</b> you should subtract 3.'+
  '<p>First there will be 10 training trials with feedback, then 30 trials without.</p>'],
    allow_keys: false,
    data: {experiment:'task_switching'},
    show_clickable_nav: true,
    on_load: function () {
      saveData(worker_id + '_alexinoia_browserinteraction_data.csv', jsPsych.data.getInteractionData().csv())
      saveData(worker_id + '_alexinoia_data.csv', jsPsych.data.get().csv()); 
    }
  }

  var experiment_begins = {
    type: 'instructions',
    pages: ["<p>Now the real block begins. You will no longer receive feedback. Solve the problems as quickly as you can."],
    allow_keys: false,
    data: {experiment:'task_switching'},
    show_clickable_nav: true
  }

  // create addition block with training and feedback first
  var addition_sample_training = jsPsych.randomization.sampleWithoutReplacement(number_list_add, 10) // change to 10
  var addition_block = [];
  addition_block.push(add_instr)
  for (var i of addition_sample_training) {
    var addition_problem_training = {
        type: 'survey-text',
        questions: [{prompt:'<div style="font-size:60px; padding:50px">'+i+'</div>', columns:2, required:true,name:'addition_ans'}],
        button_label:'Enter',
        data: {phase: 'training', stimulus:i,condition:'addition',experiment:'task_switching'},
        on_finish: function(data) {
          data.answer = data.response.addition_ans
          if (Number(data.stimulus)+3 == data.response.addition_ans) { 
            data.correct = true
            data.operation = 'add'
          } else {
            data.correct = false
            data.operation = 'add'
          }
        }
    };
    addition_block.push(addition_problem_training);
    var training_feedback = {
      type: 'html-keyboard-response',
      trial_duration:function() {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if (last_trial_correct) {
            return 1000
        } else {
            return 5000
        }
      },
      choices: jsPsych.NO_KEYS,
      stimulus_duration: function() {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if (last_trial_correct) {
            return 1000
        } else {
            return 5000
        }
      },
      data: {phase: 'training',condition:'addition',experiment:'task_switching'},
      stimulus: function () {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        var last_trial_stimulus = jsPsych.data.get().last(1).values()[0].stimulus
        var last_trial_ans = jsPsych.data.get().last(1).values()[0].response.addition_ans
        var cor_ans = Number(last_trial_stimulus)+3
        if (last_trial_correct) {
          return '<div style="color:darkgreen; font-size:60px">Well done!</div>'
        } else if (last_trial_ans > last_trial_stimulus) {
          return '<div style="color:darkred; font-size:40px">Right direction but be careful with the numbers.<p> Correct answer: '+cor_ans+'</p></div>'
        } else if (last_trial_ans < last_trial_stimulus) {
          return '<div style="color:darkred; font-size:40px">Remember to <b>add</b> 3.<p> Correct answer: '+cor_ans+'</p></div>'
        } else if (last_trial_ans == last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was just the same number!<p> Correct answer: '+cor_ans+'</p></div>'
        }
      }
    }
    addition_block.push(training_feedback);
  }
  //for (var i in addition_block_training){
  //  task_switching_timeline.push(addition_block_training[i])
  //} 
  // then create real addition trials without feedback
  var addition_sample = jsPsych.randomization.sampleWithoutReplacement(number_list_add, 30) // change to 30
  addition_block.push(experiment_begins)
  for (var i of addition_sample) {
    var addition_problem = {
        type: 'survey-text',
        questions: [{prompt:'<div style="font-size:60px; padding:50px">'+i+'</div>', columns:2, required:true,name:'addition_ans'}],
        button_label:'Enter',
        data: {phase:'experiment', stimulus:i,condition:'addition',experiment:'task_switching'},
        on_finish: function(data) {
          data.answer = data.response.addition_ans
          if (Number(data.stimulus)+3 == data.response.addition_ans) { 
            data.correct = true
            data.operation = 'add'
          } else {
            data.correct = false
            data.operation = 'add'
          }
        }
    };
    addition_block.push(addition_problem);
  }
  //for (var i in addition_block){
  //  task_switching_timeline.push(addition_block[i])
  //} 

  // create subtraction block with training and feedback first
  var subtraction_sample_training = jsPsych.randomization.sampleWithoutReplacement(number_list_sub, 10) // change to 10
  var subtraction_block = [];
  subtraction_block.push(sub_instr)
  for (var i of subtraction_sample_training) {
    var subtraction_problem_training = {
        type: 'survey-text',
        questions: [{prompt:'<div style="font-size:60px; padding:50px">'+i+'</div>', columns:2, required:true,name:'subtraction_ans'}],
        button_label:'Enter',
        data: {phase:'training', stimulus:i,condition:'subtraction',experiment:'task_switching'},
        on_finish: function(data) {
          data.answer = data.response.subtraction_ans
          if (Number(data.stimulus)-3 == data.response.subtraction_ans) { 
            data.correct = true
            data.operation = 'subtract'
          } else {
            data.correct = false
            data.operation = 'subtract'
          }
        }
    };
    subtraction_block.push(subtraction_problem_training);
    var training_feedback = {
      type: 'html-keyboard-response',
      trial_duration:function() {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if (last_trial_correct) {
            return 1000
        } else {
            return 5000
        }
      },
      choices: jsPsych.NO_KEYS,
      stimulus_duration: function() {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if (last_trial_correct) {
            return 1000
        } else {
            return 5000
        }
      },
      data: {phase: 'training',condition:'subtraction',experiment:'task_switching'},
      stimulus: function () {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        var last_trial_stimulus = jsPsych.data.get().last(1).values()[0].stimulus
        var last_trial_ans = jsPsych.data.get().last(1).values()[0].response.subtraction_ans
        var cor_ans = Number(last_trial_stimulus)-3
        if (last_trial_correct) {
          return '<div style="color:darkgreen; font-size:60px">Well done!</div>'
        } else if (last_trial_ans < last_trial_stimulus) {
          return '<div style="color:darkred; font-size:40px">Right direction but be careful with the numbers.<p> Correct answer: '+cor_ans+'</p></div>'
        } else if (last_trial_ans > last_trial_stimulus) {
          return '<div style="color:darkred; font-size:40px">Remember to <b>subtract</b> 3.<p> Correct answer: '+cor_ans+'</p></div>'
        } else if (last_trial_ans == last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was just the same number!<p> Correct answer: '+cor_ans+'</p></div>'
        }
      }
    }
    subtraction_block.push(training_feedback);
  }
  /* for (var i in subtraction_block_training){
    task_switching_timeline.push(subtraction_block_training[i])
  } */
  // create substraction block without feedback
  var subtraction_sample = jsPsych.randomization.sampleWithoutReplacement(number_list_sub, 30) // change to 30
  subtraction_block.push(experiment_begins)
  for (var i of subtraction_sample) {
    var subtraction_problem = {
        type: 'survey-text',
        questions: [{prompt:'<div style="font-size:60px; padding:50px">'+i+'</div>', columns:2, required:true,name:'subtraction_ans'}],
        button_label:'Enter',
        data: {phase:'experiment', stimulus:i,condition:'subtraction',experiment:'task_switching'},
        on_finish: function(data) {
          data.answer = data.response.subtraction_ans
          if (Number(data.stimulus)-3 == data.response.subtraction_ans) { 
            data.correct = true
            data.operation = 'subtract'
          } else {
            data.correct = false
            data.operation = 'subtract'
          }
        }
    };
    subtraction_block.push(subtraction_problem);
  }
  /* for (var i in subtraction_block){
    task_switching_timeline.push(subtraction_block[i])
  } */

  // take either addition or subtraction first
  var random_task_switching = jsPsych.randomization.sampleWithoutReplacement([1,2,3,4,5,6],1)[0]
  var sub_first = [1,2,3]
  //var add_first = [4,5,6]
 if (sub_first.includes(random_task_switching)) {
    var allocated_condition = 'sub_first'
    for (var i in subtraction_block){
      task_switching_timeline.push(subtraction_block[i])
      }
    for (var i in addition_block){
      task_switching_timeline.push(addition_block[i])
      }
  } else {
    var allocated_condition = 'add_first'
    for (var i in addition_block){
      task_switching_timeline.push(addition_block[i])
    }
    for (var i in subtraction_block){
      task_switching_timeline.push(subtraction_block[i])
    }
  }
  // create uncued switching block - first with 10 trials with feedback
  var uncued_switch_sample_training = jsPsych.randomization.sampleWithoutReplacement(number_list_uncued, 10) // change to 10
  var uncued_switch_block = [];
  uncued_switch_block.push(switch_uncued_instr)
  for (var i = 0; i < uncued_switch_sample_training.length; i++) {
    var uncued_switch_problem_training = {
        type: 'survey-text',
        questions: [{prompt:'<div style="font-size:60px; padding:50px">'+uncued_switch_sample_training[i]+'</div>', columns:2, required:true,name:'uncued_switch_ans'}],
        button_label:'Enter',
        data: {phase:'training', stimulus:uncued_switch_sample_training[i], trial_no:i,condition:'uncued_switch',experiment:'task_switching'},
        on_finish: function(data) {
          data.answer = data.response.uncued_switch_ans
          // if the length of trials so far modulo 2 == 0 --> addition (first one is addition)
          // if the length of trials so far modulo 2 == 1 --> subtraction (second one is subtraction)
          if (Number(data.trial_no) % 2 == 0) {
            if (Number(data.stimulus)+3 == data.response.uncued_switch_ans) { 
              data.correct = true
              data.operation = 'add'
            } else {
              data.correct = false
              data.operation = 'add'
            }
          } else if (Number(data.trial_no) % 2 == 1) {
            if (Number(data.stimulus)-3 == data.response.uncued_switch_ans) { 
              data.correct = true
              data.operation = 'subtract'
            } else {
              data.correct = false
              data.operation = 'subtract'
            }
          }
        }
    };
    uncued_switch_block.push(uncued_switch_problem_training);
    var training_feedback = {
      type: 'html-keyboard-response',
      trial_duration:function() {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if (last_trial_correct) {
            return 1000
        } else {
            return 5000
        }
      },
      choices: jsPsych.NO_KEYS,
      stimulus_duration: function() {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if (last_trial_correct) {
            return 1000
        } else {
            return 5000
        }
      },
      data: {phase: 'training',condition:'uncued_switch',experiment:'task_switching'},
      stimulus: function () {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        var last_trial_stimulus = jsPsych.data.get().last(1).values()[0].stimulus
        var last_trial_ans = jsPsych.data.get().last(1).values()[0].response.uncued_switch_ans
        var last_trial_operation = jsPsych.data.get().last(1).values()[0].operation
        if (last_trial_operation == 'add') {
          var cor_ans = Number(last_trial_stimulus)+3
          if (last_trial_correct) {
            return '<div style="color:darkgreen; font-size:60px">Well done!</div>'
          } else if (last_trial_ans > last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">Right direction but be careful with the numbers.<p> Correct answer: '+cor_ans+'.</p><p> Next trial subtract 3.</p></div>'
          } else if (last_trial_ans < last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was an <b>add</b> trial.<p> Correct answer: '+cor_ans+'.</p><p> Next trial subtract 3.</p></div>'
          } else if (last_trial_ans == last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was just the same number!<p> Correct answer: '+cor_ans+'</p></div>'
        }
      } else if (last_trial_operation == 'subtract') {
        var cor_ans = Number(last_trial_stimulus)-3
        if (last_trial_correct) {
            return '<div style="color:darkgreen; font-size:60px">Well done!</div>'
          } else if (last_trial_ans < last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">Right direction but be careful with the numbers.<p> Correct answer: '+cor_ans+'.</p><p> Next trial add 3.</p></div>'
          } else if (last_trial_ans > last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was a <b>subtract</b> trial.<p> Correct answer: '+cor_ans+'.</p><p> Next trial add 3.</p></div>'
          } else if (last_trial_ans == last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was just the same number!<p> Correct answer: '+cor_ans+'</p></div>'
        }
      }
    }
  }
    uncued_switch_block.push(training_feedback);
  }
  /* task_switching_timeline.push(switch_uncued_instr)
  for (var i in uncued_switch_block_training){
    task_switching_timeline.push(uncued_switch_block_training[i])
  } */ 
  // now real uncued switch block without feedback
  var uncued_switch_sample = jsPsych.randomization.sampleWithoutReplacement(number_list_uncued, 30) // change to 30
  uncued_switch_block.push(experiment_begins)
  for (var i = 0; i < uncued_switch_sample.length; i++) {
    var uncued_switch_problem = {
        type: 'survey-text',
        questions: [{prompt:'<div style="font-size:60px; padding:50px">'+uncued_switch_sample[i]+'</div>', columns:2, required:true,name:'uncued_switch_ans'}],
        button_label:'Enter',
        data: {phase:'experiment', stimulus:uncued_switch_sample[i], trial_no:i,condition:'uncued_switch',experiment:'task_switching'},
        on_finish: function(data) {
          data.answer = data.response.uncued_switch_ans
          // if the length of trials so far modulo 2 == 0 --> addition (first one is addition)
          // if the length of trials so far modulo 2 == 1 --> subtraction (second one is subtraction)
          if (Number(data.trial_no) % 2 == 0) {
            if (Number(data.stimulus)+3 == data.response.uncued_switch_ans) { 
              data.correct = true
              data.operation = 'add'
            } else {
              data.correct = false
              data.operation = 'add'
            }
          } else if (Number(data.trial_no) % 2 == 1) {
            if (Number(data.stimulus)-3 == data.response.uncued_switch_ans) { 
              data.correct = true
              data.operation = 'subtract'
            } else {
              data.correct = false
              data.operation = 'subtract'
            }
          }
        }
    };
    uncued_switch_block.push(uncued_switch_problem);
  }
  /* 
  for (var i in uncued_switch_block){
    task_switching_timeline.push(uncued_switch_block[i])
  }  */

  // create color cue switching block - 10 training trials with feedback first
  var colorcue_switch_sample_training = jsPsych.randomization.sampleWithoutReplacement(number_list_colorcue, 10) // change to 10
  var switch_colors = ['red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue'];
  var colorcue_switch_block = [];
  colorcue_switch_block.push(switch_colorcue_instr)
  for (var i = 0; i < colorcue_switch_sample_training.length; i++) {
    var colorcue_switch_problem_training = {
        type: 'survey-text',
        questions: [{prompt:'<div style="font-size:60px; padding:50px; color:'+switch_colors[i]+'">'+colorcue_switch_sample_training[i]+'</div>', columns:2, required:true, name:'colorcue_switch_ans'}],
        button_label:'Enter',
        data: {phase: 'training', stimulus: colorcue_switch_sample_training[i], color_cue: switch_colors[i],trial_no:i,condition:'colorcue_switch',experiment:'task_switching'},
        on_finish: function(data) {
          data.answer = data.response.colorcue_switch_ans
          // if the length of trials so far modulo 2 == 0 --> addition (first one is addition)
          // if the length of trials so far modulo 2 == 1 --> subtraction (second one is subtraction)
          if (Number(data.trial_no) % 2 == 0) {
            if (Number(data.stimulus)+3 == data.response.colorcue_switch_ans) { 
              data.correct = true
              data.operation = 'add'
            } else {
              data.correct = false
              data.operation = 'add'
            }
          } else if (Number(data.trial_no) % 2 == 1) {
            if (Number(data.stimulus)-3 == data.response.colorcue_switch_ans) { 
              data.correct = true
              data.operation = 'subtract'
            } else {
              data.correct = false
              data.operation = 'subtract'
            }
          }
        }
    };
    colorcue_switch_block.push(colorcue_switch_problem_training);
    var training_feedback = {
      type: 'html-keyboard-response',
      trial_duration:function() {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if (last_trial_correct) {
            return 1000
        } else {
            return 5000
        }
      },
      choices: jsPsych.NO_KEYS,
      stimulus_duration: function() {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if (last_trial_correct) {
            return 1000
        } else {
            return 5000
        }
      },
      data: {phase: 'training',condition:'colorcue_switch',experiment:'task_switching'},
      stimulus: function () {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        var last_trial_stimulus = jsPsych.data.get().last(1).values()[0].stimulus
        var last_trial_ans = jsPsych.data.get().last(1).values()[0].response.colorcue_switch_ans
        var last_trial_operation = jsPsych.data.get().last(1).values()[0].operation
        if (last_trial_operation == 'add') {
          var cor_ans = Number(last_trial_stimulus)+3
          if (last_trial_correct) {
            return '<div style="color:darkgreen; font-size:60px">Well done!</div>'
          } else if (last_trial_ans > last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">Right direction but be careful with the numbers.<p> Correct answer: '+cor_ans+'.</p><p> Next trial subtract 3.</p></div>'
          } else if (last_trial_ans < last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was an <b>add</b> trial.<p> Correct answer: '+cor_ans+'.</p><p> Next trial subtract 3.</p></div>'
          } else if (last_trial_ans == last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was just the same number!<p> Correct answer: '+cor_ans+'</p></div>'
        }
      } else if (last_trial_operation == 'subtract') {
        var cor_ans = Number(last_trial_stimulus)-3
        if (last_trial_correct) {
            return '<div style="color:darkgreen; font-size:60px">Well done!</div>'
          } else if (last_trial_ans < last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">Right direction but be careful with the numbers.<p> Correct answer: '+cor_ans+'.</p><p> Next trial add 3.</p></div>'
          } else if (last_trial_ans > last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was a <b>subtract</b> trial.<p> Correct answer: '+cor_ans+'.</p><p> Next trial add 3.</p></div>'
          } else if (last_trial_ans == last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was just the same number!<p> Correct answer: '+cor_ans+'</p></div>'
        }
      }
    }
    }
    colorcue_switch_block.push(training_feedback);
  }
  /* for (var i in colorcue_switch_block_training){
    task_switching_timeline.push(colorcue_switch_block_training[i])
  } */
  // now without feedback
  var colorcue_switch_sample = jsPsych.randomization.sampleWithoutReplacement(number_list_colorcue, 30) // change to 30
  var switch_colors = ['red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue','red','blue'];
  colorcue_switch_block.push(experiment_begins)
  for (var i = 0; i < colorcue_switch_sample.length; i++) {
    var colorcue_switch_problem = {
        type: 'survey-text',
        questions: [{prompt:'<div style="font-size:60px; padding:50px; color:'+switch_colors[i]+'">'+colorcue_switch_sample[i]+'</div>', columns:2, required:true, name:'colorcue_switch_ans'}],
        button_label:'Enter',
        data: {phase:'experiment',stimulus: colorcue_switch_sample[i], color_cue: switch_colors[i],trial_no:i,condition:'colorcue_switch',experiment:'task_switching'},
        on_finish: function(data) {
          data.answer = data.response.colorcue_switch_ans
          // if the length of trials so far modulo 2 == 0 --> addition (first one is addition)
          // if the length of trials so far modulo 2 == 1 --> subtraction (second one is subtraction)
          if (Number(data.trial_no) % 2 == 0) {
            if (Number(data.stimulus)+3 == data.response.colorcue_switch_ans) { 
              data.correct = true
              data.operation = 'add'
            } else {
              data.correct = false
              data.operation = 'add'
            }
          } else if (Number(data.trial_no) % 2 == 1) {
            if (Number(data.stimulus)-3 == data.response.colorcue_switch_ans) { 
              data.correct = true
              data.operation = 'subtract'
            } else {
              data.correct = false
              data.operation = 'subtract'
            }
          }
        }
    };
    colorcue_switch_block.push(colorcue_switch_problem);
  }
  //for (var i in colorcue_switch_block){
  //  task_switching_timeline.push(colorcue_switch_block[i])
  //}

  // create symbol cue switching block - first 10 trainign trials with feedback
  var symbolcue_switch_sample_training = jsPsych.randomization.sampleWithoutReplacement(number_list_symbolcue, 10) // change to 10 training
  var switch_symbols = ['+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-'];
  var symbolcue_switch_block = [];
  symbolcue_switch_block.push(switch_symbolcue_instr)
  for (var i = 0; i < symbolcue_switch_sample_training.length; i++) {
    var symbolcue_switch_problem_training = {
        type: 'survey-text',
        questions: [{prompt:'<div style="font-size:60px; padding:50px">'+symbolcue_switch_sample_training[i]+' '+switch_symbols[i]+'</div>', columns:2, required:true, name:'symbolcue_switch_ans'}],
        button_label:'Enter',
        data: {phase:'training',stimulus: symbolcue_switch_sample_training[i], symbol_cue: switch_symbols[i],trial_no:i,condition:'symbolcue_switch',experiment:'task_switching'},
        on_finish: function(data) {
          // if the length of trials so far modulo 2 == 0 --> addition (first one is addition)
          // if the length of trials so far modulo 2 == 1 --> subtraction (second one is subtraction)
          data.answer = data.response.symbolcue_switch_ans
          if (Number(data.trial_no) % 2 == 0) {
            if (Number(data.stimulus)+3 == data.response.symbolcue_switch_ans) { 
              data.correct = true
              data.operation = 'add'
            } else {
              data.correct = false
              data.operation = 'add'
            }
          } else if (Number(data.trial_no) % 2 == 1) {
            if (Number(data.stimulus)-3 == data.response.symbolcue_switch_ans) { 
              data.correct = true
              data.operation = 'subtract'
            } else {
              data.correct = false
              data.operation = 'subtract'
            }
          }
        }
    };
    symbolcue_switch_block.push(symbolcue_switch_problem_training);
    var training_feedback = {
      type: 'html-keyboard-response',
      trial_duration:function() {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if (last_trial_correct) {
            return 1000
        } else {
            return 5000
        }
      },
      choices: jsPsych.NO_KEYS,
      stimulus_duration: function() {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        if (last_trial_correct) {
            return 1000
        } else {
            return 5000
        }
      },
      data: {phase: 'training',condition:'symbolcue_switch',experiment:'task_switching'},
      stimulus: function () {
        var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
        var last_trial_stimulus = jsPsych.data.get().last(1).values()[0].stimulus
        var last_trial_ans = jsPsych.data.get().last(1).values()[0].response.symbolcue_switch_ans
        var last_trial_operation = jsPsych.data.get().last(1).values()[0].operation
        if (last_trial_operation == 'add') {
          var cor_ans = Number(last_trial_stimulus)+3
          if (last_trial_correct) {
            return '<div style="color:darkgreen; font-size:60px">Well done!</div>'
          } else if (last_trial_ans > last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">Right direction but be careful with the numbers.<p> Correct answer: '+cor_ans+'.</p><p> Next trial subtract 3.</p></div>'
          } else if (last_trial_ans < last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was an <b>add</b> trial.<p> Correct answer: '+cor_ans+'.</p><p> Next trial subtract 3.</p></div>'
          } else if (last_trial_ans == last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was just the same number!<p> Correct answer: '+cor_ans+'</p></div>'
        }
      } else if (last_trial_operation == 'subtract') {
        var cor_ans = Number(last_trial_stimulus)-3
        if (last_trial_correct) {
            return '<div style="color:darkgreen; font-size:60px">Well done!</div>'
          } else if (last_trial_ans < last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">Right direction but be careful with the numbers.<p> Correct answer: '+cor_ans+'.</p><p> Next trial add 3.</p></div>'
          } else if (last_trial_ans > last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was a <b>subtract</b> trial.<p> Correct answer: '+cor_ans+'.</p><p> Next trial add 3.</p></div>'
          } else if (last_trial_ans == last_trial_stimulus) {
            return '<div style="color:darkred; font-size:40px">That was just the same number!<p> Correct answer: '+cor_ans+'</p></div>'
        }
      }
    }
    }
    symbolcue_switch_block.push(training_feedback);
  }
  /* for (var i in symbolcue_switch_block_training){
    task_switching_timeline.push(symbolcue_switch_block_training[i])
  } */
  // now real without feedback
  var symbolcue_switch_sample = jsPsych.randomization.sampleWithoutReplacement(number_list_symbolcue, 30) // change to 30
  var switch_symbols = ['+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-','+','-'];
  symbolcue_switch_block.push(experiment_begins)
  for (var i = 0; i < symbolcue_switch_sample.length; i++) {
    var symbolcue_switch_problem = {
        type: 'survey-text',
        questions: [{prompt:'<div style="font-size:60px; padding:50px">'+symbolcue_switch_sample[i]+' '+switch_symbols[i]+'</div>', columns:2, required:true, name:'symbolcue_switch_ans'}],
        button_label:'Enter',
        data: {phase:'experiment',stimulus: symbolcue_switch_sample[i], symbol_cue: switch_symbols[i],trial_no:i,condition:'symbolcue_switch',experiment:'task_switching'},
        on_finish: function(data) {
          data.answer = data.response.symbolcue_switch_ans
          // if the length of trials so far modulo 2 == 0 --> addition (first one is addition)
          // if the length of trials so far modulo 2 == 1 --> subtraction (second one is subtraction)
          if (Number(data.trial_no) % 2 == 0) {
            if (Number(data.stimulus)+3 == data.response.symbolcue_switch_ans) { 
              data.correct = true
              data.operation = 'add'
            } else {
              data.correct = false
              data.operation = 'add'
            }
          } else if (Number(data.trial_no) % 2 == 1) {
            if (Number(data.stimulus)-3 == data.response.symbolcue_switch_ans) { 
              data.correct = true
              data.operation = 'subtract'
            } else {
              data.correct = false
              data.operation = 'subtract'
            }
          }
        }
    };
    symbolcue_switch_block.push(symbolcue_switch_problem);
  }
  /* for (var i in symbolcue_switch_block){
    task_switching_timeline.push(symbolcue_switch_block[i])
  } */

  // randomise order of switch trials
  if (random_task_switching == 1) { // uncued, color, symbol
    for (var i in uncued_switch_block){
      task_switching_timeline.push(uncued_switch_block[i])
      }
    for (var i in colorcue_switch_block){
      task_switching_timeline.push(colorcue_switch_block[i])
      }
    for (var i in symbolcue_switch_block){
      task_switching_timeline.push(symbolcue_switch_block[i])
    }
  } else if (random_task_switching == 2){ // uncued, symbol, color
    for (var i in uncued_switch_block){
      task_switching_timeline.push(uncued_switch_block[i])
    }
  for (var i in symbolcue_switch_block){
      task_switching_timeline.push(symbolcue_switch_block[i])
    }
  for (var i in colorcue_switch_block){
    task_switching_timeline.push(colorcue_switch_block[i])
  }
  } else if (random_task_switching == 3) { // symbol, color, uncued
    for (var i in symbolcue_switch_block){
      task_switching_timeline.push(symbolcue_switch_block[i])
    }
  for (var i in colorcue_switch_block){
      task_switching_timeline.push(colorcue_switch_block[i])
    }
  for (var i in uncued_switch_block){
    task_switching_timeline.push(uncued_switch_block[i])
  } 
  } else if (random_task_switching == 4) { // symbol, uncued, color
    for (var i in symbolcue_switch_block){
      task_switching_timeline.push(symbolcue_switch_block[i])
    }
  for (var i in uncued_switch_block){
      task_switching_timeline.push(uncued_switch_block[i])
    }
  for (var i in colorcue_switch_block){
    task_switching_timeline.push(colorcue_switch_block[i])
  }
  } else if (random_task_switching == 5) { // color, symbol, uncued
    for (var i in colorcue_switch_block){
      task_switching_timeline.push(colorcue_switch_block[i])
    }
  for (var i in symbolcue_switch_block){
      task_switching_timeline.push(symbolcue_switch_block[i])
    }
  for (var i in uncued_switch_block){
    task_switching_timeline.push(uncued_switch_block[i])
  }
  } else if (random_task_switching == 6) { // color, uncued, symbol
    for (var i in colorcue_switch_block){
      task_switching_timeline.push(colorcue_switch_block[i])
    }
  for (var i in uncued_switch_block){
      task_switching_timeline.push(uncued_switch_block[i])
    }
  for (var i in symbolcue_switch_block){
    task_switching_timeline.push(symbolcue_switch_block[i])
  }
  }

  //task_switching_timeline.push(addition_block); 

  var talk_out_loud_task_switching = {
    type: 'survey-multi-choice',
    questions: [
      {prompt: "Did you talk out loud to remember what you had to do (plus or minus)?", options: ['Yes', 'No'], required:true}, 
    ],
    on_finish: function (data) {
      data.talk_out_loud = data.response.Q0
      data.experiment = 'task_switching'
    }
  };
  task_switching_timeline.push(talk_out_loud_task_switching)

  var open_text_survey_task_switching = {
    type: 'survey-text',
    questions: [
      {prompt: "Anything else you would like to add about the strategy you used to solve these problems?"}, 
    ],
    on_finish: function (data) {
      data.strategy_free_ans = data.response.Q0
      data.experiment = 'task_switching'
    }
  };
  task_switching_timeline.push(open_text_survey_task_switching)

  // create thank-you node
  var thanks_task_switching = {
      type: 'instructions',
      pages: ['<p>Thank you! This experiment is finished. Please proceed.'],
      allow_keys: false,
      show_clickable_nav: true,
      data: {experiment:'task_switching'},
      on_load: function () {
        saveData(worker_id + '_alexinoia_browserinteraction_data.csv', jsPsych.data.getInteractionData().csv())
        saveData(worker_id + '_alexinoia_data.csv', jsPsych.data.get().csv()); 
      }
    }
  // add this node to the task_switching_timeline
  task_switching_timeline.push(thanks_task_switching);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// INITIATE FULL EXPERIMENT ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// shuffle the order of experiments
var shuffled = jsPsych.randomization.shuffle([phon_sim_timeline, rhyme_timeline, task_switching_timeline, same_different_timeline])
for (var i in shuffled){
    for (var j in shuffled[i]) {
        total_timeline.push(shuffled[i][j])
  }}

var exp_order = [shuffled[0][0].data.experiment,shuffled[1][0].data.experiment,shuffled[2][0].data.experiment,shuffled[3][0].data.experiment].join('-')
jsPsych.data.addProperties({
    experiment_order: exp_order
    });

var to_qualtrics = {
    type: 'instructions',
    pages: ['<p>You are all done with the experiments! Click next to go to Qualtrics for some questionnaires.'],
    allow_keys: false,
    show_clickable_nav: true,
}
total_timeline.push(to_qualtrics)

// when all experiments have been added to the timeline, initiate the experiment
  // send back to qualtrics
  jsPsych.init({
      timeline: total_timeline,
      on_finish: function(){
          window.location = 'https://uwmadison.co1.qualtrics.com/jfe/form/SV_cVeoe5KRuurpCL4?workerId=' + worker_id + '&source=' + mturk_or_sona
      }
  });