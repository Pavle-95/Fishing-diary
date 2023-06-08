// Database (Neki podaci)
let data = [];
// Popunjavanje niza iz local storage-a ako postoji local storage
if (JSON.parse(localStorage.getItem('database')) === null) {
  data = [];
}
else {
  data = JSON.parse(localStorage.getItem('database'));
}
// Promenjive za kontrolu editovnja 
let isEditing = false;
let handleCatchID;
// Elementi iz DOM-a za ispisivanje podataka
let catchContainer = document.querySelector('.list');
let removeCatchPopUp = document.querySelector('.removeCatchPopUp');
let removeCatchText = document.querySelector('.removeCatchText')
// Funkcija za ispisivanje
let write = (data) => {
  if (data === null ) {
    return;
  }
  else {
    catchContainer.innerHTML = ``;
    data.forEach((element, idx) => {
      catchContainer.innerHTML += `
        <div class="single-catch"> 
          <h2>Type of fish:<span> ${element.name} </span></h2>
          <h2>Fishing water:<span> ${element.water} </span></h2>
          <h2>Fishing location:<span> ${element.location} </span></h2>
          <h2>Fish weight:<span class="textLeft" > ${element.weight}kg </span></h2>
          <button onClick="removeCatch(${element.id}, ${idx})" class="removeCatchBTN">&#10005;</button>
          <button onClick="editCatch(${element.id}, ${idx})" class="editCatchBTN">&#9998;</button>
        </div>`
    })
  }
}
// Pozivanje funkcije za ispisivanje
write(data);

// Funkcija za hendlovanje user inputa
const inputFieldsHander = (name, water, location, weight) => {
  let newFishName = document.querySelector('#name');
  let newFishingWater = document.querySelector('#water');
  let newFishingLocation = document.querySelector('#location');
  let newFishWeight = document.querySelector('#weight');
  newFishName.value = name;
  newFishingWater.value = water;
  newFishingLocation.value = location
  newFishWeight.value = weight;
}

// Funkcija za ispis tekst u pop-up u zavisnosti od toga da li se element edituje ili ne 
const isEditingFunc = (condition) => {
  let h2Text = document.querySelector('.h2Text');
  if(condition) {
    h2Text.innerHTML = `Please edit the selected catch`
  }
  else {  
    h2Text.innerHTML = `Enter the new type of catch`
  }
}

// Funkcija za dodavanje Elemenata u niz
let addCatch = (id, name, water, location, weight) => {
  localStorage.setItem('database', JSON.stringify(data));
  if (isEditing) {  
    // Step by Step 
    let handleCatch = {
      id: handleCatchID,
      name: name,
      water: water,
      location: location,
      weight: weight,
    }
    data[handleCatchID] = handleCatch;
    isEditing = false;
  }
  else {
  // Spread operator
    data = [...data, {id, name, water, location, weight}];
  }
}
// Funkcija za Brisanje Elemenata
let removeCatch = (id, idx) => {
  handleCatchID = id;
  removeCatchPopUp.style.display = "block";
  removeCatchText.innerHTML = `<h2>Are you sure you want to delete: "${data[idx].name}"</h2>`
  // Scrool to top 
  window.scrollTo(0,0);
}

// Funkcija za editovanje vec postojecih ljudi unutar liste
let editCatch = (id, idx) => {
  isEditing = true;
  isEditingFunc(isEditing);
  let edited = data.filter(element => element.id == id);
  handleCatchID = idx;
  document.querySelector('.addPeronPopUp').style.display = 'block';
  // Give the input values of edit Catch;
  inputFieldsHander(edited[0].name, edited[0].water, edited[0].location, edited[0].weight);
  // Scrool to top 
  window.scrollTo(0,0);
}

let removeCatchHandler = (condition) => {
  if (condition) {
    data = data.filter(element => element.id != handleCatchID);
    localStorage.setItem('database', JSON.stringify(data));
    write(data);
  }
  removeCatchPopUp.style.display = "none";
};

// Elementi iz doma za zatvaranje pop-up prozora za dodavanje ljudi u listu
let closeAddCatchPopUp = document.querySelector('.closePopUp'); 
  closeAddCatchPopUp.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.addPeronPopUp').style.display = 'none';
    isEditing = false;
})

// Elementi iz doma za otvaranje pop-up prozora za dodavanje ljudi u listu
let addCatchBTN = document.querySelector('.addCatchBTN');
  addCatchBTN.addEventListener('click', () => {
  document.querySelector('.addPeronPopUp').style.display = 'block';
  isEditingFunc(isEditing);
  inputFieldsHander('','','','');
})

// Pokupljane iz elementa iz doma i pozivanje funkcije
let addCatchFormSubmit = document.querySelector('#addCatchForm');
addCatchFormSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  // Colecting data from input elements
  let newFishID = new Date().getTime().toString();
  let newFishName = document.querySelector('#name');
  let newFishingWater = document.querySelector('#water');
  let newFishingLocation = document.querySelector('#location');
  let newFishWeight = document.querySelector('#weight');
  // Adding new Catch to the array of Catchs
  addCatch(newFishID, newFishName.value, newFishingWater.value, newFishingLocation.value, newFishWeight.value);
  // Store data to the browser
  localStorage.setItem('database', JSON.stringify(data));
  // Wirte function to write new array of Catchs
  write(data);
  // Close pop-up and reset the input value
  document.querySelector('.addPeronPopUp').style.display = 'none';
})