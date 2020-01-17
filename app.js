 // Initialize Firebase
 var firebaseConfig = {
    apiKey: "AIzaSyC2HejOZEs_nGRsIdwYhq2miXOrtkEaR3k",
    authDomain: "asfe-a1906.firebaseapp.com",
    databaseURL: "https://asfe-a1906.firebaseio.com",
    projectId: "asfe-a1906",
    storageBucket: "asfe-a1906.appspot.com",
    messagingSenderId: "36343720523",
    appId: "1:36343720523:web:a897faadd8762a260dbbce"
}; firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function (user) {
if ((user.uid!="YjliM8TsRhSJHJXRJRQjjIl9gzr2")) {
    alert("Please login to continue.")
    window.location.href = 'index.html';
    console.log('no authentication')
} else {
    console.log('logged in');
}
});


var db = firebase.firestore();
var i = 0;

db.collection('alumini').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        i++;
    });document.getElementById("count").innerHTML="total count : "+i;
});

                
function renderCafe(doc){

    let li = document.createElement('li');
    let name = document.createElement('div');
    let batch =document.createElement('div');
    let address=document.createElement('div')
    let course = document.createElement('div');
    let company = document.createElement('div');
    let desig = document.createElement('div');
    let email = document.createElement('div');
    let higher = document.createElement('div');
    let location = document.createElement('div');
    let phone = document.createElement('div');
   

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    company.textContent = doc.data().company;
    address.textContent=doc.data().address
    batch.textContent = doc.data().batch;
    course.textContent = doc.data().course;
    desig.textContent = doc.data().desig;

    email.textContent = doc.data().email;

     higher.textContent = doc.data().higher;
    location.textContent = doc.data().location;

    phone.textContent = doc.data().phone;
 
  
    
    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var row2 = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 =row.insertCell(1);
    var cell3 =row.insertCell(2);
     var cell4 =row.insertCell(3);
     var cell5 =row.insertCell(4);
     var cell6 =row.insertCell(5);
     var cell7 =row.insertCell(6);
     var cell8 =row.insertCell(7);
     var cell9 =row.insertCell(8);
     var cell10 =row.insertCell(9);
   
    var cell11 =row.insertCell(10);

     cell1.innerHTML= i;
    cell2.innerHTML = name.textContent;
    cell3.innerHTML = batch.textContent;
     cell4.innerHTML = address.textContent;
     cell5.innerHTML = course.textContent;
     cell6.innerHTML = desig.textContent;
     cell7.innerHTML = email.textContent;
     cell8.innerHTML = phone.textContent;
     cell9.innerHTML = location.textContent;
     cell10.innerHTML = higher.textContent;
     cell11.innerHTML = company.textContent;
    
 i=i-1;
}

// getting data
db.collection('alumini').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});
