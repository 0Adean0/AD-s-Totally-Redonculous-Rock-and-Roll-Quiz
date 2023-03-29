var quizBButton = document.querySelector("#begin-quiz");
var gameClock = document.querySelector("#game-time");
var initText = document.querySelector ("#init-text");
var remainingTime = 120;
var questionHousing = document.querySelector("#q-housing");
var answerHousing = document.querySelector("#a-housing");
var a1 = document.querySelector("#A1");
var a2 = document.querySelector("#A2");
var a3 = document.querySelector("#A3");
var a4 = document.querySelector("#A4");
var subjectHead = document.querySelector("#subject-header");
var gamerInit = document.querySelector("#gamer-init");
var recordKeeping = document.querySelector("#record-keeper");
var gamerTag = document.querySelector("#tag");

console.log(localStorage.getItem("tag"));

// inital game questions and storage in objects. includes array with listed properties
var qcount = 0

var qss = [ { 

    qtext: "Question 1: Which rock and roll fontperson had a dove land on their hand during a live performace at Kazar Stadium in San Fransisco, circa 1973? ",
    options: ["Frank Zappa","Jimmy Hendrix","Robert Plant","Anne Wilson"],
    correctAns: "Robert Plant",
},{
    qtext: "Question 2: What was the name of Eddie Van Halens homemade electric guitar?",
    options: ["MR.Roboto","FrankenStrat","Whackjob Willie", "President Nixon"],
    CorrectAns: "FrankenStrat",
},{
    qtext: "Question 3: Which lead singer, famous for hits like (Were not gonna take it) and (The kids are back) testified before a United States Senate commitee to address censorship in 1985 ",
    options: ["Nikki Six", "Steven Tyler","Dee Snyder", "Paul Stanley"],
    correctAns: "Dee Snyder",
},{
    qtext: "Question 4: The Band UB40 got thier name from what type of official English form?",
    options: ["Passport Application", "Import Tax Sheet", "Unemployment", "Mailbox Registry"],
    correctAns: "Unemployment",
},{
    qtext: "Question 5: What job did Oswald (Ozzy) Osborn have before he became known as the prince of darkness",
    options: ["Master Carpenter","Plumbers Apprentice","Hotdog Cart Vendor", "Carpet Salesman"],
    correctAns: "Plumbers Apprentice"
},
]

function StartTRRQ(){
quizBButton.style.display = "none"
initText.style.display = "none"
optionsSpacing.style.display ="flex"
qSpacing.style.display="block"
console.log ("Enter the Gates!");
setClock()
qsDisplay();
}

function setClock(){
var clockInt=setInt(function(){
    remainingTime --,
    clockInt.qcontent= remainingTime + "remaining time";

    if(qsNumber>(qs.length -1)){
        clearInt(clockInt);
        gameOver();
        return null;
    }
    if(remainingTime<=0){
        clearInt(clockInt);
        alert("You are unworthy!")
        gameOver()
    } 
    })
}
    function nextQuestion(){
        qsNumber++;
        qsDisplay();
    }

    function qsDisplay(){
    qSpacing.textContent = qss[qsNumber].qtext
    a1.textContent = qss[qsNumber].options[0]
    a2.textContent = qss[qsNumber].options[1]
    a3.textContent = qss[qsNumber].options[2]
    a4.textContent = qss[qsNumber].options[3]
    console.log(qsNumber)
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

    nextQuestion();

  })

  saveinitialsBtn.addEventListener("click",function(event){

    event.preventDefault;
    localStorage.setItem("gamer-tag",gamerTag.value)
  })