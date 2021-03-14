
let timercnt = 0;
let on_gamingbg = false;  // BG変更フラグ
let timer;                // タイマー

let bg = document.querySelector('body');
let button = document.querySelector('#gamingbg');

function gaming_background() {
  bg.style.backgroundColor = 'hsl(' + timercnt + ', 100%, 50%)';
  timercnt = (timercnt + 1) % 360;
}

function gamingbg_start() {
  on_gamingbg = !on_gamingbg;

  if (on_gamingbg) {
    console.log('Start');
    timer = setInterval(gaming_background, 10);
    button.setAttribute('value', '　　やめます　　');
  } else {
    console.log('Stop');
    clearInterval(timer);
    button.setAttribute('value', 'ゲーミングモード');
    bg.style.backgroundColor = '#CCFFCC';
  }
}

button.addEventListener('click', gamingbg_start);
