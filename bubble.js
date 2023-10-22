var timer = 2;
var score = 0;
var hit=0;//here it is declared first so that we can use it in addeventlistener bcoz if defined in function var is function scope
isGameOver = false

function makeBubble() {
    if (isGameOver) {
        return; // Don't create new bubbles if the game is over
    }
    var clutter = ''

    for (var i = 1; i <= 176;i++) {
        number = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${number}</div>`
    }

    document.getElementById('panelbottom').innerHTML = clutter
}


function runTimer() {
    var timeinterval = setInterval(function () {
        if (timer > 0) {
            timer--
            document.querySelector('#divtimer').textContent = timer
        }
        else {
            clearInterval(timeinterval);
            document.querySelector('#panelbottom').innerHTML = '<h2 id=gover>Game Over</h2>';
            isGameOver=true
        }
    }, 1000)
}




function getNewHit() {
    if(isGameOver){
        return
    }
    hit = Math.floor(Math.random() * 10);
    document.getElementById('divhit').textContent = hit;

}

function increaseScore() {
    score += 10;
    document.getElementById('divscore').textContent = score;


}

// Event bubbling adding event listener to the parents of bibble that 'panelbottom'
//the addevent listener function will run when click and details will be send to values parameter
document.getElementById('panelbottom').addEventListener('click', function (value) {
    var clickedNumber = Number(value.target.textContent) //this will give 4 but it is not in number form it gives STRING
    if(clickedNumber===hit){
        increaseScore()
        makeBubble()
        getNewHit()
    }
    else{
        makeBubble()
        getNewHit()
    }
})

makeBubble()
runTimer()
getNewHit()









// // Event bubbling adding event listener to the parents of bibble that 'panelbottom'
// //the addevent listener function will run when click and details will be send to values parameter
// document.getElementById('panelbottom').addEventListener('click', function (value) {
//     // console.log(value.target)  //this will give which bubble is clicked -->div class="bubble">4</div>flex
//     //   i want only number not the html code
//     // console.log(value.target.'  textContent ') //this will give 4 but it is not in number form it gives STRING
//     var clickedNumber = Number(value.target.textContent) //this will give 4 but it is not in number form it gives STRING

// })