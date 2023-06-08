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
let editPersonID;
// Elementi iz DOM-a za ispisivanje podataka
let personContainer = document.querySelector('.list');
let removePersonPopUp = document.querySelector('.removePersonPopUp');
let removePersonText = document.querySelector('.removePersonText')
// Funkcija za ispisivanje
let write = (data) => {
  if (data === null ) {
    return;
  }
  else {
    personContainer.innerHTML = ``;
    data.forEach((element, idx) => {
      personContainer.innerHTML += `
        <div class="single-person"> 
          <h2>Full Name:<span> ${element.name} </span></h2>
          <h2>Job Description:<span> ${element.jobDescription} </span></h2>
          <h2>Age:<span class="textLeft" > ${element.age} </span></h2>
          <button onClick="removePerson(${element.id}, ${idx})" class="removePersonBTN">&#10005;</button>
          <button onClick="edit(${element.id}, ${idx})" class="editPersonBTN">&#9998;</button>
        </div>`
    })
  }
}
// Pozivanje funkcije za ispisivanje
write(data);

// Elementi iz doma za zatvaranje pop-up prozora za dodavanje ljudi u listu
let closeAddPersonPopUp = document.querySelector('.closePopUp'); 
  closeAddPersonPopUp.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.addPeronPopUp').style.display = 'none';
    isEditing = false;
})

// Elementi iz doma za otvaranje pop-up prozora za dodavanje ljudi u listu
let addPersonBTN = document.querySelector('.addPersonBTN');
  addPersonBTN.addEventListener('click', () => {
  document.querySelector('.addPeronPopUp').style.display = 'block';
  isEditingFunc(isEditing);
  inputFieldsHander('', '', '');
  // localStorage.setItem('database', JSON.stringify(data));
})

// Pokupljane iz elementa iz doma i pozivanje funkcije
let addPersonFormSubmit = document.querySelector('#addPersonForm');
addPersonFormSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  // Colecting data from input elements
  let newPersonID = new Date().getTime().toString();
  let newPersonName = document.querySelector('#name');
  let newPersonJob = document.querySelector('#job');
  let newPersonAge = document.querySelector('#age');
  // Adding new person to the array of persons
  addPerson(newPersonID, newPersonName.value, newPersonJob.value, newPersonAge.value);
  // Store data to the browser
  localStorage.setItem('database', JSON.stringify(data));
  // Wirte function to write new array of persons
  write(data);
  // Close pop-up and reset the input value
  document.querySelector('.addPeronPopUp').style.display = 'none';
})

// Funkcija za hendlovanje user inputa
const inputFieldsHander = (name, job, age) => {
  let newPersonName = document.querySelector('#name');
  let newPersonJob = document.querySelector('#job');
  let newPersonAge = document.querySelector('#age');
  newPersonName.value = name;
  newPersonJob.value = job;
  newPersonAge.value = age;
}

// Funkcija za ispis tekst u pop-up u zavisnosti od toga da li se element edituje ili ne 
const isEditingFunc = (condition) => {
  let h2Text = document.querySelector('.h2Text');
  if(condition) {
    h2Text.innerHTML = `Please edit the selected person`
  }
  else {  
    h2Text.innerHTML = `Enter the new person`
  }
}

// Funkcija za dodavanje Elemenata u niz
let addPerson = (id, name, jobDescription, age) => {
  localStorage.setItem('database', JSON.stringify(data));
  if (isEditing) {  
    // Step by Step 
    let editedPerson = {
      id: editPersonID,
      name: name,
      jobDescription: jobDescription,
      age: age,
    }
    data[editPersonID] = editedPerson;
    isEditing = false;
  }
  else {
  // Spread operator
    data = [...data, {id, name, jobDescription, age}];
  }
}
// Funkcija za Brisanje Elemenata
let removePerson = (id, idx) => {
  editPersonID = id;
  removePersonPopUp.style.display = "block";
  removePersonText.innerHTML = `<h2>Are you sure you want to delete: "${data[idx].name}"</h2>`
  // Scrool to top 
  window.scrollTo(0,0);
}

// Funkcija za editovanje vec postojecih ljudi unutar liste
let edit = (id, idx) => {
  isEditing = true;
  isEditingFunc(isEditing);
  let edited = data.filter(element => element.id == id);
  editPersonID = idx;
  document.querySelector('.addPeronPopUp').style.display = 'block';
  // Give the input values of edit person;
  inputFieldsHander(edited[0].name, edited[0].jobDescription, edited[0].age);
  // Scrool to top 
  window.scrollTo(0,0);
}

let removePersonHandler = (condition) => {

  if (condition) {
    data = data.filter(element => element.id != editPersonID);
    localStorage.setItem('database', JSON.stringify(data));
    write(data);
  }
  removePersonPopUp.style.display = "none";
};

// Elementi iz doma za zatvaranje pop-up prozora za dodavanje ljudi u listu
let closeAddPersonPopUp = document.querySelector('.closePopUp'); 
  closeAddPersonPopUp.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.addPeronPopUp').style.display = 'none';
    isEditing = false;
})

// Elementi iz doma za otvaranje pop-up prozora za dodavanje ljudi u listu
let addPersonBTN = document.querySelector('.addPersonBTN');
  addPersonBTN.addEventListener('click', () => {
  document.querySelector('.addPeronPopUp').style.display = 'block';
  isEditingFunc(isEditing);
  inputFieldsHander('', '', '');
})

// Pokupljane iz elementa iz doma i pozivanje funkcije
let addPersonFormSubmit = document.querySelector('#addPersonForm');
addPersonFormSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  // Colecting data from input elements
  let newPersonID = new Date().getTime().toString();
  let newPersonName = document.querySelector('#name');
  let newPersonJob = document.querySelector('#job');
  let newPersonAge = document.querySelector('#age');
  // Adding new person to the array of persons
  addPerson(newPersonID, newPersonName.value, newPersonJob.value, newPersonAge.value);
  // Store data to the browser
  localStorage.setItem('database', JSON.stringify(data));
  // Wirte function to write new array of persons
  write(data);
  // Close pop-up and reset the input value
  document.querySelector('.addPeronPopUp').style.display = 'none';
})