//variables
let arrayGame = [];
let arrayColorEvents = ['blue', 'red', 'green', 'yellow'];
let turn = false;
let current = 0;

//events
const blue = document.querySelector('#blue'); //0
const red = document.querySelector('#red'); //1
const green = document.querySelector('#green'); //2
const yellow = document.querySelector('#yellow'); //3
const startButton = document.querySelector('#start');
const scoreUpdate = document.querySelector('#thescore');
const addText =document.querySelector('#text');

startButton.addEventListener('click', startGame);
blue.addEventListener('click', userInput);
red.addEventListener('click', userInput);
green.addEventListener('click', userInput);
yellow.addEventListener('click', userInput);

function startGame() {
    textGame('the game is started - good luck.');
    reset();
    thegame();
};


function textGame(text) {
    addText.innerHTML ='' + text;
}


function totalscore()
{
    scoreUpdate.innerHTML = "" + (arrayGame.length + 1);
};

function thegame() {
    //add random number to array
    totalscore();
    turn = false;
    console.log('the game begin');
    addToArray();
    //blick colorful buttoms
    showArray();
    //player turn
    //turn = true; - its will be true only when we finish showArray function.
    setTimeout(() => {
        turn = true;
    }, 1200 * arrayGame.length);

    userInput();
};

function userInput(event) {
    if (turn === false) {
        console.log('its not your turn');
        return;
    }
    if (event !== undefined) {
        let nameofevent = event.target.id;
        let positionOfUser = arrayColorEvents.indexOf(nameofevent);

        if (positionOfUser === arrayGame[current]) {
            if (current === arrayGame.length - 1) {
                textGame('you right - next round')
                current = 0;
                totalscore();
                thegame();
            } else {
                textGame('good');
                current++;
            }
        } else {
            textGame('game over function');
            reset();
        }
    }
}

function reset() {

    arrayGame.length = 0;
    turn = false;
    current = 0;
    textGame('click in start buttom for new game.')
    totalscore();
}

function addToArray() {
    arrayGame.push(Math.floor(Math.random() * 4));
}

function showArray() {
    for (var i = 0; i < arrayGame.length; i++) {
        showArray2(i);
    }
    //****

}

function showArray2(i) {
    setTimeout(() => {
        setTimeout(() => {
            console.log(arrayGame[i]);
            document.querySelector('#' + arrayColorEvents[arrayGame[i]]).classList.toggle('opa');
            console.log('wait');
        }, 1200 * i + 50);
        setTimeout(() => {
            document.querySelector('#' + arrayColorEvents[arrayGame[i]]).classList.toggle('opa');
            console.log('done');
        }, 1200 * i + 1150);
    }, 1200 * i);
}


/*
function showChoice() {
    for (var i = 0; i <= arrTest.length; i++) {
        showChoice2(i);

    }
}

function showChoice2(i) {
    setTimeout(() => {
        console.log(arrTest[i]);
        if(i===0)
        {
            document.querySelector('#' + arrayColorEvents[arrTest[i]]).classList.toggle('opa');
        }
        else if (i === arrTest.length) {
            document.querySelector('#' + arrayColorEvents[arrTest[i-1]]).classList.toggle('opa');
        }
        else
        {
            document.querySelector('#' + arrayColorEvents[arrTest[i]]).classList.toggle('opa');
            document.querySelector('#' + arrayColorEvents[arrTest[i-1]]).classList.toggle('opa');
        }

    }, 1000 * i);
}
*/

/*
function changeColors(arrayGame) {

  for (let i=0; i<arrayGame.length; i++) {
    changeColor(i, arrayGame);
  }

  function changeColor(i) {
    setTimeout(function() {

      arrayGame[i].classList.remove('opa');
      if (i !== 0)
      {
        arrayGame[i-1].classList.add('opa');
      }
    }, 2000 * i);
  }
}
*/
/*

function changeColor(index) {
  for (let i = 0; i < arrayGame.length; i++) {
    if (arrayGame[i] == 0) {
      blue.classList.toggle('opa');
      setTimeout(changeColor, 200);
      blue.classList.toggle('opa');
    }
    if (arrayGame[i] == 1) {
      red.classList.toggle('opa');
      setTimeout(changeColor, 200);
      red.classList.toggle('opa');

    }
    if (arrayGame[i] == 2) {
      green.classList.toggle('opa');
      setTimeout(changeColor, 200);
      green.classList.toggle('opa');

    }
    if (arrayGame[i] == 3) {
      yellow.classList.toggle('opa');
      setTimeout(changeColor, 200);
      yellow.classList.toggle('opa');

    }


    var iterator = function (index) {
      if (index >= arr.length) {
        index = 0;
        //return;
      }
      console.log(arr[index]);
      setTimeout(function () {
        iterator(++index);
      }, 1500);

      if (arrayGame[i] == 0) {
        blue.classList.remove('opa');
        setTimeout(changeColor, 2000);
        blue.classList.add(opa);
      }
      if (arrayGame[i] == 1) {
        red.classList.remove('opa');
        setTimeout(changeColor, 2000);
        red.classList.add(opa);

      }
      if (arrayGame[i] == 2) {
        green.classList.remove('opa');
        setTimeout(changeColor, 2000);
        green.classList.add(opa);

      }
      if (arrayGame[i] == 3) {
        yellow.classList.remove('opa');
        setTimeout(changeColor, 2000);
        yellow.classList.add(opa);

      }

    }
  }
}

*/