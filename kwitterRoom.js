// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBvNy8fZ1CFLpZ4xXlxqfPmMgHq0cqzs8",
  authDomain: "kwitter-96d22.firebaseapp.com",
  databaseURL: "https://kwitter-96d22-default-rtdb.firebaseio.com",
  projectId: "kwitter-96d22",
  storageBucket: "kwitter-96d22.appspot.com",
  messagingSenderId: "143317664418",
  appId: "1:143317664418:web:52b2c45c414e584f554dfb"
};
firebase.initializeApp(firebaseConfig);
var username = localStorage.getItem("username");
document.getElementById("nome").innerHTML=username;
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();
roomname=""
function addsala(){
roomname = document.getElementById("room").value;
firebase.database().ref("/").child(roomname).update(
 {purpose:"adicionar sala"} 
);
localStorage.setItem("nomedasala",roomname);
window.location="kwitterPage.html";

}
function redirectToRoomName(name){
  localStorage.setItem("nomedasala",roomname);
  window.location="kwitterPage.html";
}
function logout(){
  localStorage.removeItem("nomedasala");
  localStorage.removeItem("username");
  window.location="index.html";
}
