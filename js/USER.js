class User {

  getInfo(user) {

    let userShow = document.querySelector('.user-content')

    let userInfo = user;

    localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
    
    
    userShow.innerHTML = `
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



    console.log(userInfo);
    console.log(html);
  }



}