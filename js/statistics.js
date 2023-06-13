let statisticsBtn = document.querySelector('.statistics');
let homePage = document.querySelector('.home-page');
let statistcsPage = document.querySelector('.statistics-page');
let statisticsList = document.querySelector('.statistics-list');

statisticsBtn.addEventListener('click', () => {
    homePage.classList.toggle('active-page');
    statistcsPage.classList.toggle('active-page');
})

writeStatistics();

function writeStatistics() {
    data.forEach(dayOfFishing => {
        
        statisticsList.innerHTML += `
        <div class='single-day-of-fishing'>
            <h3>Date of Fishing: ${dayOfFishing.date}</h3>
            <div class=single-fish>
                <h3>Fish: ${dayOfFishing.fishingDayCatch.length}</h3>
            </div>
        </div>
        `.trim();
        
        console.log(dayOfFishing.fishingDayCatch.length);
    })
}