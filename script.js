// First create this function
function submitAnswers(){
    //1a. Set Variables
    var total = 15;
    var score = 0;
    
    //1b. Get user input - this gets us user input from the quizform (per question selected)
    var q1 = document.forms["quizForm"] ["q1"].value;
    var q2 = document.forms["quizForm"] ["q2"].value;
    var q3 = document.forms["quizForm"] ["q3"].value;
    var q4 = document.forms["quizForm"] ["q4"].value;
    var q5 = document.forms["quizForm"] ["q5"].value;
    var q6 = document.forms["quizForm"] ["q6"].value;
    var q7 = document.forms["quizForm"] ["q7"].value;
    var q8 = document.forms["quizForm"] ["q8"].value;
    var q9 = document.forms["quizForm"] ["q9"].value;
    var q10 = document.forms["quizForm"] ["q10"].value;
    var q11 = document.forms["quizForm"] ["q11"].value;
    var q12 = document.forms["quizForm"] ["q12"].value;
    var q13 = document.forms["quizForm"] ["q13"].value;
    var q14 = document.forms["quizForm"] ["q14"].value;
    var q15 = document.forms["quizForm"] ["q15"].value;
    //Validation - create a 'for' loop that takes 3 parameters.
    //1c.create variable 
    //2 create a condition that states as long as i is less than or equal to the total # of questions
    //3 (i++) i will be incremented by 1 everytime the loop runs (add 1 to the score) until it reaches question #5
    //4 use the eval function and concatanate with 'i'.This will give us q1,q2,a3....and so on
    //6 Note: Arrays start with 0, so we use 'i-1' 
    for (i = 1; i <= total; i++) { //1c,2,3
      if (eval('q' + i) == null || eval('q' + i) == ''){ //4 
      alert('You missed question '+ i); //5. You missed question ('i')
      return false;
      }
    
    }
    
    // Set Correct Answers Using an Array
    var answers = ["b","a","d","b","d"]; //6. set correct answers in an array named 'answers'/increment correct answer by one (score++) if user gets an answer right.
    
    //Check Answers
    for (i = 1; i <= total; i++) { //7. copy same loop reiteration loop from above and 'i-1' so the array starts at 0
      if(eval('q' + i) == answers[i - 1]) {
         score++;
      }
    }
    
    //Display Results like this
    //var results = document.getElementbyId('results');
    //results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
    alert('You scored ' + score +' out of ' +total); //8. Display score by concatnation
    
    //return false;
  
  }
  
  