function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);  
  console.log(message_data);
  name = message_data['name'];
 message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name +"</h4>";
message_with_tag = "<h4 class='message_h4'>" + messsage + "<?h4>"; 
like_button = "<button class='btn btn-waring' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Likes :"+like+"</button>";

  row = name_with_tag + message_with_tag + like_button;
  document.getElementById("output").innerHTML +=row;

//End code
 } });  }); }

function updateLike(message_id)
{
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
}

 function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location.replace("index.html");
    }

