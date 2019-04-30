
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDTtsJoaBB-2HwkdTiyBDUeIemrTb7ufEg",
    authDomain: "fir-contactform-b2a3d.firebaseapp.com",
    databaseURL: "https://fir-contactform-b2a3d.firebaseio.com",
    projectId: "fir-contactform-b2a3d",
    storageBucket: "fir-contactform-b2a3d.appspot.com",
    messagingSenderId: "234683187977"
  };
  firebase.initializeApp(config);

//   reference messages collection

let messagesRef= firebase.database().ref('messages');

document.getElementById('contact-form').addEventListener('submit', submitContact);

function submitContact(event){
    event.preventDefault();
    console.log("submit")
    
    
    // contact form values
    let email = $("#email-input");
    let role = $("#role-input");
    let message = $("#message-input");
    let check = $("#robot-check");

    console.log(email[0].value);
    console.log(role[0].value);
    console.log(message[0].value);

    // let email = emailVal[0].value;
    // let role = roleVal[0].value;
    // let message = messageVal[0].value;

    // console.log(email)  

    saveContact(email, role, message);
}

// form value function

function getValues(id){
   return document.getElementById(id);
}

function saveContact(email, role, message){
    let newMessageRef = messagesRef.push(); 
    newMessageRef.set({
        email: email[0].value,
        role: role[0].value,
        message: message[0].value,
    })
}