//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyB4yBGt_d2ifjIwVgcgBhlRwbCyBT_8w1w",
    authDomain: "kwitter-72a16.firebaseapp.com",
    databaseURL: "https://kwitter-72a16-default-rtdb.firebaseio.com",
    projectId: "kwitter-72a16",
    storageBucket: "kwitter-72a16.appspot.com",
    messagingSenderId: "618895519915",
    appId: "1:618895519915:web:4edae7bb0782cb952007ee"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
}
