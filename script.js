
console.log("Running Sal's Strawberries")

function writeForm(){
    // Get the form data
    console.log("Hello World");
    const UserName = document.getElementById("name").value;
    console.log(UserName);
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    console.log(favoriteFruit);
    const quantityFruit = document.getElementById("fruitQuantity").value;
    console.log(quantityFruit);
   



    firebase.database().ref('/users/' + UserName).set(
      {
        FavoriteFruit: favoriteFruit,
        QuantityFruit: quantityFruit,
      }
    )
}



function fb_write() {
    console.log("Hello World");


   writeForm()
}





var GLOBAL_user;

function fb_popuplogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user; //save the user details as global value
    console.log("User has logged in.");
  });
}


function fb_login() {
  firebase.auth().onAuthStateChanged(fb_HandleLogin);
}

function fb_HandleLogin(_user) {
  if (_user) {
    console.log("User is logged in.");
    GLOBAL_user = _user; //save the user details as global value


  } else {
    console.log("User is NOT logged in, starting the popup process.");
    fb_popuplogin();
  }
}