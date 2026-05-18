
console.log("Running Sal's Strawberries")

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
}








var GLOBAL_user;

function fb_popuplogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(Provider).then((result) => {
    GLOBAL_user = result.user; //save the user details as global value
    console.log("User has logged in.");
  });
}


function fb_login() {
  firebase.auth().onAuthStateChanged(LOGIN_CALLBACK);
}

function fb_handleLogin(_user) {
  if (_user) {
    console.log("User is logged in.");
    GLOBAL_user = _user; //save the user details as global value

  } else {
    console.log("User is NOT logged in, starting the popup process.");
    fb_popuplogin();
  }
}