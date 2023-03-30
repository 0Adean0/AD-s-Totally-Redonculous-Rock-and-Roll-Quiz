var startButton = document.querySelector("#begin-quiz")
var gameClock = document.querySelector("#game-timer")
var startText = document.querySelector ("#init-Text")
var remainingTime = 90
var questionHousing = document.querySelector("#q-housing")
var answerHousing = document.querySelector("#a-housing")
var ans1 = document.querySelector("#A1")
var ans2 = document.querySelector("#A2")
var ans3 = document.querySelector("#A3")
var ans4 = document.querySelector("#A4")
var ansButton = document.querySelector("#answer-button")
var wrRt = document.querySelector("#wrong-right")
var subjectHead = document.querySelector("#subject-header")
var gamerInits = document.querySelector("#gamer-init")
var recordKeeping = document.querySelector("#record-keeper")
var rockLegends = document.querySelector("#previous-winners")
var rockLegendsScore= document.querySelector("#scores")
var finalMs = document.querySelector("#final-message")
var newQuiz = document.querySelector("#new-game")

gameClock.textContent = remainingTime

var rockTrivia= [ { 

    question: "Question 1: Which rock and roll fontperson had a dove land on their hand during a live performace at Kazar Stadium in San Fransisco, circa 1973? ",
    ans: ["Frank Zappa","Jimmy Hendrix","Robert Plant","Anne Wilson"],
    wrongAns:["Frank Zappa","Jimmy Hendrix","Anne Wilson"],
    correctAns: "Robert Plant",
},{
    question: "Question 2: What was the name of Eddie Van Halens homemade electric guitar?",
    ans: ["MR.Roboto","FrankenStrat","Whackjob Willie", "President Nixon"],
    wrongAns:["MR.Roboto","Whackjob Willie","President Nixon"],
    correctAns: "FrankenStrat",
},{
    question: "Question 3: Which lead singer, famous for hits like (Were not gonna take it) and (The kids are back) testified before a United States Senate commitee to address censorship in 1985 ",
    ans: ["Nikki Six", "Steven Tyler","Dee Snyder", "Paul Stanley"],
    wrongAns: ["Nikki Six", "Steven Tyler", "Paul Stanley"],
    correctAns: "Dee Snyder",
},{
    question: "Question 4: The Band UB40 got thier name from what type of official English form?",
    ans: ["Passport Application", "Import Tax Sheet", "Unemployment", "Mailbox Registry"],
    wrongAns:["Passport Application", "Import Tax Sheet", "Mailbox Registry"],
    correctAns: "Unemployment",
},{
    question: "Question 5: What job did Oswald (Ozzy) Osborn have before he became known as the prince of darkness",
    ans: ["Master Carpenter","Plumbers Apprentice","Hotdog Cart Vendor", "Carpet Salesman"],
    wrongAns:["Master Carpenter","Hotdog Cart Vendor", "Carpet Salesman"],
    correctAns: "Plumbers Apprentice",
}]

function rockTrivia(){
startButton.style.display = "none"
startText.style.display = "none"

}
function setClock(){
var gameClockInterval=setInterval(function(){
    remainingTime --
    gameClock.textContent= remainingTime

    if(remainingTime === 0 && index >= rockTrivia.length){
        alert("You are unworthy!")
        clearInterval(gameClockInterval);
        gameOver()
    } 
    }, 1000)
}

    function nextQuestion(){
        questionNumber++;
        qsDisplay();
    }

    if(questionNumber>(qs.length -1)){
        clearInterval(clockInterval);
        gameOver();
        return null;
    }



    function qsDisplay(){
        console.log(qss[qsNumber])
    questionHousing.textContent = qss[qsNumber].qtext
    a1.textContent = qss[qsNumber].options[0]
    a2.textContent = qss[qsNumber].options[1]
    a3.textContent = qss[qsNumber].options[2]
    a4.textContent = qss[qsNumber].options[3]
    console.log(qsNumber)
    // document.querySelector("q-housing").append
    }

    function gameOver(){
    localStorage.setItem("godliness",remainingTime);
    document.querySelector("#gameClock").innerHTML = "No Time Remaining";
    initText.style.display = "block";
    initText.textContent= "your Godliness is... " + localStorage.getItem("godliness",remainingTime);
    subjectHead.textContent="Welcome to the Hall of Rock Gods!";
    optionsSpacing.style.display = "none";
    gamerInit.style.display = "block";
}

quizBButton.addEventListener("click",function(event){
    event.preventDefault();
    StartTRRQ();
})

answerHousing.addEventListener("click",function(event){
    var el = event.target;
    if(el.pairs(".a")){
    if(el.innerHTML!==qss[qsNumber].correctAns){
    }
        remainingTime=(remainingTime-10)
    }
  })

  saveinitialsBtn.addEventListener("click",function(event){

    event.preventDefault;
    localStorage.setItem("gamer-tag",gamerTag.value)
  })