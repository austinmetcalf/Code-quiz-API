
var score = 0;

var seconds = parseInt( window.localStorage.getItem('timer')) || 100;
var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds -= 1;
    window.localStorage.setItem('timer', seconds)

    if (seconds < 1) {
        window.localStorage.setItem('score', 0)
        window.location.href = "end.html"
    }

    el.innerText = "You have been here for " + seconds + " seconds.";
}

var cancel = setInterval(incrementSeconds, 1000);


document.getElementById('answer1').addEventListener('click', function(value) {
    if (window.location.href.includes('question2')){
        window.localStorage.setItem('score', seconds)
        window.localStorage.setItem('timer', null)
        window.location.href = "end.html"
    }
    else if (window.location.href.includes('question')){
        window.location.href = 'question2.html'
    }
 });

document.getElementById("answer2").addEventListener('click', function(value) {
    seconds -= 10;
});