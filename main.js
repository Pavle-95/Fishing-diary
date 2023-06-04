// Database (Neki podaci)
let data = [
  {
    id: 1,
    name: 'Pavle Pesic',
    jobDescription: 'Junior Developer',
    age: 27
  },
  {
    id: 2,
    name: 'Marko Markovic',
    jobDescription: 'Junior Designer',
    age: 22
  },
  {
    id: 3,
    name: 'Janko Stankovic',
    jobDescription: 'PHP Developer',
    age: 25
  },
  {
    id: 4,
    name: 'Zoran Kesic',
    jobDescription: 'Novinar',
    age: 42
  },
  {
    id: 5,
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
  data.forEach(element => {
    personContainer.innerHTML += `
      <div class="single-person"> 
        <h2>Ime:  ${element.name} </h2>
        <h2>Opis posla:  ${element.jobDescription} </h2>
        <h2>Godine:  ${element.age} </h2>
      </div>
    `
  })
}

// Pozivanje funkcije za ispisivanje
write(data);

// Elementi iz doma za otvaranje pop-up prozora za dodavanje i brisanje ljudi iz liste
let addPersonBTN = document.querySelector('.addPersonBTN');
addPersonBTN.addEventListener('click', () => {
  document.querySelector('.addPeronPopUp').style.display = 'block';
  document.querySelector('.removePersonPopUp').style.display = 'none';
})

let removePersonBTN = document.querySelector('.removePersonBTN');
removePersonBTN.addEventListener('click', () => {
  document.querySelector('.removePersonPopUp').style.display = 'block';
  document.querySelector('.addPeronPopUp').style.display = 'none';
})

let closeAddPersonPopUp = document.querySelectorAll('.closePopUp'); 
  closeAddPersonPopUp.forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelector('.addPeronPopUp').style.display = 'none';
      document.querySelector('.removePersonPopUp').style.display = 'none';
    }
)})


// Funkcija za dodavanje Elemenata u niz
let addPerson = (name, jobDescription, age) => {
  // Step by step
  // var newPerson = {
  //   name: name,
  //   jobDescription:jobDescription,
  //   age: age
  // }
  // data.push(newPerson);

  // Spread operator
  data = [...data, {name, jobDescription, age}];
}

// Pokupljane iz elementa iz doma i pozivanje funkcije
let addPersonFormSubmit = document.querySelector('#addPersonForm');
addPersonFormSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let newPersonName = document.querySelector('#name').value;
  let newPersonJob = document.querySelector('#job').value;
  let newPersonAge = document.querySelector('#age').value;
  
  addPerson(newPersonName, newPersonJob, newPersonAge);
  write(data);
  document.querySelector('.addPeronPopUp').style.display = 'none';
})

// Funkcija za Brisanje Elemenata
let removePerson = (name) => {
  data = data.filter(element => element.name !== name);
  write(data);
}

// Pokupljane iz elementa iz doma i pozivanje funkcije
let removePersonFormSubmit = document.querySelector('#removePersonForm');
removePersonFormSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  let newPersonName = document.querySelector('#fullName').value;
  removePerson(newPersonName);
  write(data);
  document.querySelector('.removePersonPopUp').style.display = 'none';
})
