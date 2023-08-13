class User {
  getInfo(user, location) {

    if(user !== null) {
      let userInfo = user;
      localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
      
      location.innerHTML = `
        <div class='user-holder'>
          <div>
            <h2>Ime i prezime:</h2>
            <p>${userInfo.name}</p>
  
            <h2>Godine:</h2>
            <p>${userInfo.age}</p>
  
            <h2>Adresa:</h2>
            <p>${userInfo.address}</p>
  
            <h2>JMBG:</h2>
            <p>${userInfo.jmbg}</p>

            <h2>Slika:</h2>
            <img src="${userInfo.img}" alt="">
            
            <h2>Datum izdavanje dozvole(opciono):</h2>
            <p>${userInfo.date}</p>
        </div>
        <button onClick="userFormEditHandler()"> Edit </button>
      `.trim();
    }
    else {
      let userInfo = JSON.parse(localStorage.getItem('USER_INFO'));
      location.innerHTML = `
        <div class='user-holder'>
          <div>
              <h2>Ime i prezime:</h2>
              <input type='text' class='userFormName' placeholder="Ime i prezime" value=${!userInfo ? '' : userInfo.name}></input>
    
              <h2>Godine:</h2>
              <input type='number' class='userFormAge' placeholder="Godine" value=${!userInfo ? '' : userInfo.age}></input>
    
              <h2>Adresa:</h2>
              <input type='text' class='userFormAddress' placeholder="Adresa" value=${!userInfo ? '' : userInfo.address}></input>
    
              <h2>JMBG:</h2>
              <input type='number' class='userFormJMBG' placeholder="JMBG" value=${!userInfo ? '' : userInfo.jmbg}></input>

              <h2>Slika:</h2>
              <input type='text' class='userFormIMG' placeholder="Slika" value=${!userInfo ? '' : userInfo.img}></input>

              <h2>JMBG:</h2>
              <input type='date' class='userFormDate' placeholder="Eye Color" value=${!userInfo ? '' : userInfo.date}></input>

              <button onClick="userFormSubmitHandler()">Submit</button>
          </div>
      `.trim();
    }
  }

  openUserDialog(location) {
     location.classList.toggle('active-page');
  }
}