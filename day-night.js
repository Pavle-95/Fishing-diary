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