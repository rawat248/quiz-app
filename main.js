function getResults() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;
    
    if (question1 == "Honduras") {
        correct++;
    }
    if (question2 == "Rafael Nadal") {
        correct++;
    }
    if (question3 == "Gurugram") {
        correct++;
    }
    if (question4 == "85th") {
        correct++;
    }
    if (question5 == "Ministry of Culture") {
        correct++;
    }
   
    // document.getElementById("number_correct").innerHTML = "You got" + correct + "correct.";
    // document.getElementById("after_submit").style.visibility = "visible";
    if(correct>3){
        document.getElementById("demo").innerHTML = "You pass the exam";
    }
    
    else{
       document.getElementById("demo").innerHTML = "Please try again,score is not good"
    }

    
    
}
