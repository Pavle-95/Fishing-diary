let statisticsBtn = document.querySelector('.statistics');
let homePage = document.querySelector('.home-page');
let statistcsPage = document.querySelector('.statistics-page');
let statisticsList = document.querySelector('.statistics-list');

statisticsBtn.addEventListener('click', () => {
    statisticsBtn.classList.toggle('switch-active')
    homePage.classList.toggle('active-page');
    statistcsPage.classList.toggle('active-page');
    writeStatistics();
})

writeStatistics();

function writeStatistics() {
    statisticsList.innerHTML = '';
    data.forEach((dayOfFishing) => {
        let text = ``;

        dayOfFishing.fishingDayCatch.forEach(elem => {
            text += `
                <div class="single-cacth">
                    <h2>${elem.name}</h2>
                    <h2>${elem.weight} kg</h2>
                </div>
            `.trim();
        });
        

        statisticsList.innerHTML += `
        <div class='single-day-of-fishing'>
            <h3 class="single-date">Date of Fishing: <span> ${dayOfFishing.date} </span></h3>
            <div class=single-fish>
                <h3 class='fish-img'>Fish:  ${dayOfFishing.fishingDayCatch.length + `<img style='max-width:60px' src="./img/cute-fish-line-drawing-png.webp" alt="Ribic">`}</h3>
                <h3 class=single-catch>Catch:<span class='catch-text'> ${text}</span></h3>
            </div>
            
        </div>
        `.trim();

    })
}