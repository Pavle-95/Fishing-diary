let dayNightSwitch = document.querySelector('.day-night');
let styleElmenet = document.querySelector('.style-element');
let nightMode;

// Popunjavanje niza iz local storage-a ako postoji local storage
if (JSON.parse(localStorage.getItem('nightMode')) === null) {
    nightMode = false;
}
else {
  nightMode = JSON.parse(localStorage.getItem('nightMode'));
}

let dayNightHandler = () => {
    nightMode = !nightMode;
    dayNightSwitchHandler();
}

let dayNightSwitchHandler = () => {
    if(!nightMode) {
        styleElmenet.href = "./style/night.css";
        dayNightSwitch.children[0].classList.add('active')
    }
    else {
        styleElmenet.href = "./style/style.css"
        dayNightSwitch.children[0].classList.remove('active')
    }
    localStorage.setItem('nightMode', JSON.stringify(nightMode));
}

dayNightSwitchHandler();

let fishGif = document.querySelector('.fish-gif');
let addFishBTN = document.querySelector('.addCatchBTN');

addFishBTN.addEventListener('click', () => {
    fishGif.children[0].src = './img/giphy.gif';
    fishGif.children[0].style.display = 'block';    
    setTimeout(() => {
        fishGif.children[0].src = '';      
        fishGif.children[0].style.display = 'none';    
    }, 1500)
})