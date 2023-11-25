// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAgllVy1UodIMbXDDaSWx9H9uWogsewvas",
    authDomain: "kwitter-pro-6705f.firebaseapp.com",
    projectId: "kwitter-pro-6705f",
    storageBucket: "kwitter-pro-6705f.appspot.com",
    messagingSenderId: "649091406287",
    appId: "1:649091406287:web:a9e15ab8bd7f2a02e85aba"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



