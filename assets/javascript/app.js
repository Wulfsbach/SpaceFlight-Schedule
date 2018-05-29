


var config = {
    apiKey: "AIzaSyDNs1n7w_4-PXkAK_GPYe1vn4I_dgdG4h0",
    authDomain: "space-schedule.firebaseapp.com",
    databaseURL: "https://space-schedule.firebaseio.com",
    projectId: "space-schedule",
    storageBucket: "",
    messagingSenderId: "892709994338"
  };
  firebase.initializeApp(config);

  var database= firebase.database();

  $("#add-shuttle-btn").on("click" , function(event){
      event.preventDefault();

      var Shutt = $('#shuttle-name-input').val().trim();
      var Dest = $('#destination-input').val().trim();
      var Freq = $('#Frequency-input').val().trim();
      var Arri = $('#time').val(); 

      var newShutt ={

        'name': Shutt,
        'destination': Dest,
        'frequency':Freq,
        'arrival': Arri
      };


database.ref("/shuttles").push(newShutt);
console.log(newShutt.name);

$('#shuttle-name-input').val("");
$('#destination-input').val("");
$("#Frequency-input").val("");
$("#time").val("");
  });



  database.ref("/shuttles").on('child_added', function(childSnapshot, prevChildKey){

console.log(childSnapshot.val());
var data= childSnapshot.val();
var Shutt = data.name;
var Dest = data.destination;
var Freq = data.frequency;
var Arri = data.arrival;


 var minutes1 =  minutes - Freq+1;

  $("#ship-table > tbody").append('<tr><td>'+ Shutt + '</td><td>' + Dest +'</td><td>' + Freq + '</td><td>' + Arri + '</td><td>'+ minutes1 + '</td></tr>');

  });


var now = new Date()
var minutes= now.getMinutes();
console.log(minutes);
 