
console.log("Running Sal's Strawberries")



function writeForm(){
    // Get the form data
    console.log("Hello World");
    console.log(GLOBAL_user);
    const UserName = document.getElementById("name").value;
    console.log(UserName);
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    console.log(favoriteFruit);
    const quantityFruit = document.getElementById("fruitQuantity").value;
    console.log(quantityFruit);
   



    firebase.database().ref('/users/' + GLOBAL_user.uid).set(
      {
        Username: UserName,
        FavoriteFruit: favoriteFruit,
        QuantityFruit: quantityFruit,
        Email: GLOBAL_user.email,
      }
    )

    document.getElementById("ThankYou").innerHTML = "Thank You!";
}



function fb_write() {
    console.log("Writing Online.");


   writeForm()
}





var GLOBAL_user;
var authenticationListener;


function fb_popuplogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user; //save the user details as global value
    console.log("User has logged in.");
  });
}


function fb_login() {
  authenticationListener = firebase.auth().onAuthStateChanged(fb_HandleLogin);
  document.getElementById("Logout").style.display = "block";
  document.getElementById("Login").style.display = "none";
}

function fb_HandleLogin(_user) {
  if (_user) {
    console.log("User is logged in.");
    console.log(_user);
    GLOBAL_user = _user; //save the user details as global value
    document.getElementById("submit").style.display = "block";

  } else {
    console.log("User is NOT logged in, starting the popup process.");
    fb_popuplogin();
  }
}

function fb_logout() {
  authenticationListener();
  firebase.auth().signOut();
  document.getElementById("Logout").style.display = "none";
  document.getElementById("Login").style.display = "block";
}