document.addEventListener('deviceready', function() {
  console.log("Firestore Ready");
}, false);

// Save or update CV data
function saveCV(cvData) {
  const user = firebase.auth.getCurrentUser();
  if (!user) {
    alert("Please login first");
    return;
  }

  const uid = user.uid;

  firebase.firestore.collection("users").doc(uid).set(cvData)
    .then(() => {
      alert("CV saved successfully!");
    })
    .catch(err => console.error("Error saving CV:", err));
}

// Load CV data
function loadCV(callback) {
  const user = firebase.auth.getCurrentUser();
  if (!user) {
    alert("Please login first");
    return;
  }

  const uid = user.uid;

  firebase.firestore.collection("users").doc(uid).get()
    .then(doc => {
      if (doc.exists) {
        callback(doc.data());
      } else {
        console.log("No CV found");
      }
    })
    .catch(err => console.error("Error loading CV:", err));
}
