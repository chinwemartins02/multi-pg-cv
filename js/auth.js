document.addEventListener('deviceready', function(){

  console.log("Firebase Auth Ready");

}, false);


function signup(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  firebase.auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Signup successful");
      window.location = "index.html";
    })
    .catch(err => alert(err.message));
}


function login(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  firebase.auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful");
      window.location = "index.html";
    })
    .catch(err => alert(err.message));
}


function logout(){
  firebase.auth.signOut()
    .then(() => {
      window.location = "login.html";
    });
}
