let data = [];
let dataStorageIcon = document.querySelector('.statistics');

if(JSON.parse(localStorage.getItem('Database')) === null) {
    data = [];
}
else {
    data = JSON.parse(localStorage.getItem('Database'));
}

if(data.length > 0) {
    dataStorageIcon.style.display = 'block';
}

let saveBtn = document.querySelector('.save-fishing-day');
saveBtn.addEventListener('click', saveDayOfFishing);

let Markobtn = document.querySelector('.fa-floppy-disk');
console.log(Markobtn);


function saveDayOfFishing() { 
    if(sesionData.length > 0) {
        let newSave = {
            id: new Date().getTime().toString(),
            date: new Date().toLocaleDateString(),
            fishingDayCatch: sesionData,
        };
        
        data.push(newSave);

        localStorage.setItem('Database', JSON.stringify(data));
        resetSesionData();
        message("Your day of fishing was saved in Database you can check it in the statistics")
        dataStorageIcon.style.display = 'block';
    }
    else {
        message("You have nothing to save");
    }
}

function resetSesionData() {
    sesionData = [];
    write(sesionData);
    localStorage.setItem('sesionDatabase', JSON.stringify(sesionData));
}

function message(message) {
    let textContainer = document.querySelector('.message-text');
    textContainer.style.display = 'block';

    textContainer.innerHTML = `
        <h3 class="h3text">${message}</h3>
    `.trim();

    setTimeout(() => {
        textContainer.style.display = 'none';
    }, 1200);
}