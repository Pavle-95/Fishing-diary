let dayNightSwitch = document.querySelector('.day-night');
let styleElmenet = document.querySelector('.style-element');

let dayNightHandler = () => {
    dayNightSwitch.children[0].classList.toggle('active')
    if(dayNightSwitch.children[0].classList.contains('active')) {
        styleElmenet.href = "./night.css";
    }
    else {
        styleElmenet.href = "./style.css"
    }
}

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