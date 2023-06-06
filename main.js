// Database (Neki podaci)
let data = [
  {
    id: 0,
    name: 'Pavle Pesic',
    jobDescription: 'Junior Developer',
    age: 27
  },
  {
    id: 1,
    name: 'Marko Markovic',
    jobDescription: 'Junior Designer',
    age: 22
  },
  {
    id: 2,
    name: 'Janko Stankovic',
    jobDescription: 'PHP Developer',
    age: 25
  },
  {
    id: 3,
    name: 'Zoran Kesic',
    jobDescription: 'Novinar',
    age: 42
  },
  {
    id: 4,
    name: 'Mirko Jovanovic',
    jobDescription: 'Manager',
    age: 27
  }
]

// Elementi iz DOM-a za ispisivanje podataka
let personContainer = document.querySelector('.list');

// Funkcija za ispisivanje
let write = (data) => {
  personContainer.innerHTML = ``;
  data.forEach((element, idx) => {
    personContainer.innerHTML += `
      <div class="single-person"> 
        <h2>Full Name:<span> ${element.name} </span></h2>
        <h2>Job Description:<span> ${element.jobDescription} </span></h2>
        <h2>Age:<span class="textLeft" > ${element.age} </span></h2>
        <button onClick=(removePerson(${element.id})) class="removePersonBTN">&#10005;</button>
        <button onClick=(edit(${idx})) class="editPersonBTN">&#9998;</button>
      </div>
    `
  })
}

// Pozivanje funkcije za ispisivanje
write(data);


let isEditing = false;
let editPersonID;

// Elementi iz doma za otvaranje pop-up prozora za dodavanje ljudi u listu
let addPersonBTN = document.querySelector('.addPersonBTN');
  addPersonBTN.addEventListener('click', () => {
  document.querySelector('.addPeronPopUp').style.display = 'block';
  isEditingFunc(isEditing);
  let newPersonName = document.querySelector('#name');
  let newPersonJob = document.querySelector('#job');
  let newPersonAge = document.querySelector('#age');
  newPersonName.value = '';
  newPersonJob.value = '';
  newPersonAge.value = '';
})

const isEditingFunc = (condition) => {
  let h2Text = document.querySelector('.h2Text');
  if(condition) {
    h2Text.innerHTML = `Please edit the selected person`
  }
  else {  
    h2Text.innerHTML = `Enter the new person`
  }
}
// Elementi iz doma za zatvaranje pop-up prozora za dodavanje ljudi u listu
let closeAddPersonPopUp = document.querySelector('.closePopUp'); 
  closeAddPersonPopUp.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.addPeronPopUp').style.display = 'none';
    isEditing = false;
})

// Funkcija za dodavanje Elemenata u niz
let addPerson = (id, name, jobDescription, age) => {
  if (isEditing) {    
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
  // Step by step
  // var newPerson = {
  //   name: name,
  //   jobDescription:jobDescription,
  //   age: age
  // }
  // data.push(newPerson);

  // Spread operator
    data = [...data, {id, name, jobDescription, age}];
  }
}

// Pokupljane iz elementa iz doma i pozivanje funkcije
let addPersonFormSubmit = document.querySelector('#addPersonForm');
addPersonFormSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  // Colecting data from input elements
  let newPersonID = data.length;
  let newPersonName = document.querySelector('#name');
  let newPersonJob = document.querySelector('#job');
  let newPersonAge = document.querySelector('#age');
  // Adding new person to the array of persons
  addPerson(newPersonID, newPersonName.value, newPersonJob.value, newPersonAge.value);
  // Wirte function to write new array of persons
  write(data);
  // Close pop-up and reset the input value
  document.querySelector('.addPeronPopUp').style.display = 'none';
})

// Funkcija za Brisanje Elemenata
let removePerson = (id) => {
  data = data.filter(element => element.id !== id);
  write(data);
}

// Editovanje vec postojecih ljudi unutar liste
let edit = (id) => {
  isEditing = true;
  isEditingFunc(isEditing);
  editPersonID = id;
  document.querySelector('.addPeronPopUp').style.display = 'block';
  let edited = data.filter(element => element.id === id);
  // Colecting data from input elements
  let newPersonName = document.querySelector('#name');
  let newPersonJob = document.querySelector('#job');
  let newPersonAge = document.querySelector('#age');
  newPersonName.value = edited[0].name;
  newPersonJob.value = edited[0].jobDescription;
  newPersonAge.value = edited[0].age;
}