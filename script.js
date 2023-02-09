const content = document.getElementById('content');

const clockDiv = document.createElement('h3');
content.appendChild(clockDiv);

const startBtn = document.createElement('button');
content.appendChild(startBtn);
startBtn.innerHTML = "Start";

const stopBtn = document.createElement('button');
content.appendChild(stopBtn);
stopBtn.innerHTML = "Stop";

const resetBtn = document.createElement('button');
content.appendChild(resetBtn);
resetBtn.innerHTML = "Reset";

var startValue = 0;
var timer;

clockDiv.innerHTML = startValue;

startBtn.addEventListener('click', () => {
  timer = setInterval(()=>{
    clockDiv.innerHTML = startValue;
    startValue++;
  }, 1000);
  
})

stopBtn.addEventListener('click', ()=>{
  clearInterval(timer);
})

resetBtn.addEventListener('click', ()=>{
  startValue = 0;
  clockDiv.innerHTML = startValue;
})