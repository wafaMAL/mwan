const options = {
  'الاهداف': " من مقومات إدارة الوقت تحديد الرؤية و ",
    'التنظيم': "من مكونات وعناصر إدارة الوقت",
    'إدارةالوقت': "تحديد الأولويات من مقومات ",
    'الأولوية': "من مكونات إدارة الوقت توزيع الأوقات حسب المهام و ", 
  };
  //Initial References
  const message = document.getElementById("message");
  const hintRef = document.querySelector(".hint-ref");
  const controls = document.querySelector(".controls-container");
  const startBtn = document.getElementById("start");
  const letterContainer = document.getElementById("letter-container");
  const userInpSection = document.getElementById("user-input-section");
  const resultText = document.getElementById("result");
  const word = document.getElementById("word");
  const words = Object.keys(options);
  let randomWord = "",
    randomHint = "";
  let winCount = 0,
    lossCount = 0;
  //Generate random value
  const generateRandomValue = (array) => Math.floor(Math.random() * array.length);
  //Block all the buttons
  const blocker = () => {
    let lettersButtons = document.querySelectorAll(".letters");
    stopGame();
  };
  //Start Game
  startBtn.addEventListener("click", () => {
    controls.classList.add("hide");
    init();
  });
  //Stop Game
  const stopGame = () => {
    controls.classList.remove("hide");
  };
  //Generate Word Function
  const generateWord = () => {
    letterContainer.classList.remove("hide");
    userInpSection.innerText = "";
    randomWord = words[generateRandomValue(words)];
    randomHint = options[randomWord];
    hintRef.innerHTML = `<div id="wordHint">
    <span>تلميحة: </span>${randomHint}</div>`;
    let displayItem = "";
    randomWord.split("").forEach((value) => {
      displayItem += '<span class="inputSpace">_ </span>';
    });
    //Display each element as span
    userInpSection.innerHTML = displayItem;
    userInpSection.innerHTML += `<div id='chanceCount'>Chances Left: ${lossCount}</div>`;
  };
  //Initial Function
  const init = () => {
    winCount = 0;
    lossCount = 5;
    randomWord = "";
    word.innerText = "";
    randomHint = "";
    message.innerText = "";
    userInpSection.innerHTML = "";
    letterContainer.classList.add("hide");
    letterContainer.innerHTML = "";
    generateWord();
    //For creating letter buttons
    for (let i = 1570; i < 1611; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        //Number to ASCII[ا-ي]
        button.innerText = String.fromCharCode(i);
        //Character button onclick
        button.addEventListener("click", () => {
          message.innerText = `الحرف الصحيح`;
          message.style.color = "#008000";
          let charArray = randomWord.toUpperCase().split("");
          let inputSpace = document.getElementsByClassName("inputSpace");
          //If array contains clicked value replace the matched Dash with Letter
          if (charArray.includes(button.innerText)) {
            charArray.forEach((char, index) => {
              //If character in array is same as clicked button
              if (char === button.innerText) {
                button.classList.add("correct");
                //Replace dash with letter
                inputSpace[index].innerText = char;
                //increment counter
                winCount += 1;
                //If winCount equals word length
                if (winCount == charArray.length) {
                  resultText.innerHTML = "فزت";
                  startBtn.innerText = "إعادة اللعبة";
                  //block all buttons
                  blocker();
                }
              }
            });
          } else {
            //lose count
            button.classList.add("incorrect");
            lossCount -= 1;
            document.getElementById(
              "chanceCount"
            ).innerText = `Chances Left: ${lossCount}`;
            message.innerText = `الحرف غير الصحيح`;
            message.style.color = "#ff0000";
            if (lossCount == 0) {
              word.innerHTML = `كانت الكلمة: <span>${randomWord}</span>`;
              resultText.innerHTML = "للأسف لقد خسرت";
              blocker();
            }
          }
          //Disable clicked buttons
          button.disabled = true;
        });
        //Append generated buttons to the letters container
        letterContainer.appendChild(button);
      }
  };
  window.onload = () => {
    init();
  };