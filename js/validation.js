function validate()  {
    var user = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var birth = document.getElementById("birthday").value;
    var product = document.getElementById("product").value;

    if(user == "") {
        alert("Seems that you forgot to type in your name. Please enter your name");
        return false;
    }

    if(email == "") {
        alert("Seems that you forgot to type in your email. Please enter you email.");
        return false;
    }

    var message = "Thank you for signing up for the Petite Treats Weekly newsletter." +
     "\nWe have added the following information to our files regarding your interests:" +
      "\nName: " + user +
      "\nEmail: " + email +
      "\nProduct interests: " + product + 
      "\nBirthday: " + birth ;

    alert(message);

    return true;
}