class User {
  getInfo(user, location) {

    if(user !== null) {
      let userInfo = user;

      localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
      
      location.innerHTML = `
        <div class='user-holder'>
          <div>
            <h2>Fisherman Full Name:</h2>
            <p>${userInfo.name}</p>
  
            <h2>Fisherman Age:</h2>
            <p>${userInfo.age}</p>
  
            <h2>Fisherman Hair Color:</h2>
            <p>${userInfo.hairColor}</p>
  
            <h2>Fisherman Eye Color:</h2>
            <p>${userInfo.eyeColor}</p>
        </div>
      `.trim();
    }
    else {
      location.innerHTML = `
        <div class='user-holder'>
          <div>
              <h2>Fisherman Full Name:</h2>
              <input class='userFormName' placeholder="Puno ime"></input>
    
              <h2>Fisherman Age:</h2>
              <input placeholder="Puno ime"></input>
    
              <h2>Fisherman Hair Color:</h2>
              <input placeholder="Puno ime"></input>
    
              <h2>Fisherman Eye Color:</h2>
              <input placeholder="Puno ime"></input>

              <button onClick="userFormSubmitHandler()">Submit</button>
          </div>
      `.trim();
    }
  }

  openUserDialog(location) {
     location.classList.toggle('active-page');
  }
}