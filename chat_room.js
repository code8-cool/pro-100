function addRoom ()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "chat_room.html";
} 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 row = "<div class='room_name' id = " + Room_names + " onclick = 'redirectToRoomName'>" + Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 });});}
getData();

function redirectToRoomName()
{
  localStorage.setItem("room_name", room_name);
    window.location = "chat_room.html";
}
logout()
{
window.location = "index.html"
}