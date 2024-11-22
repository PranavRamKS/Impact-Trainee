const StartingMinutes = 10;
let times = StartingMinutes * 60;

const countdownEl = document.getElementById('countdown') ;
setlnterval(updatecountdown, 1000) ;

function updateCountdown(){
    const minutes = Math. floor(time / 60);
    let seconds = times % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = '${minutes} : ${seconds}' ;
    times --;
}