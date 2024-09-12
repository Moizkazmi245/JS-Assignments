// 1.Declare a variable called username.
var usernmae = "Ali Abrar"
console.log(usernmae);


// 2. Declare a variable called myName & assign to it a string 
// that represents your Full Name. 

var myName = "Syed Moiz Kazmi"
alert(myName)
console.log(myName);


// 3. Write script to 
// a) Declare a JS variable, titled message. 
// b) Assign “Hello World” to variable message 
// c) Display the message in alert box.

var titledMessage = "Assalam O Alikom! ! hop you are fine"

function showMessage() {

    alert(titledMessage);
    console.log(titledMessage);
}


// 4. Write a script to save student’s bio data in JS variables and 
// show the data in alert boxes.


function showBio() {
    var stuName = "Ayan Zahid";
    var stuFatherName = "Zahid";
    var certification = "Web and App Developement 1 year"

    alert("Name:\n" + stuName)
    alert("Father Name:\n" + stuFatherName)
    alert("Certified:\n" + certification)
}


// 5. Write a script to display the following alert using one JS 
// variable:

function oneJsVariable() {

    var pizzaMesg = "PIZZA\nPIZZ\nPIZ\nPI\nP"
    alert(pizzaMesg)
}

// 6. Declare a variable called email and assign to it a string that 
// represents your Email Address(e.g. example@example.com). 
// Show the blow mentioned message in an alert box.(Hint: use 
// string concatenation)

function showEmail() {
    var emailAddress = "abdul.moiz.kazmi@gmail.com"
    alert("Email:" + emailAddress)
    console.log(emailAddress);

}

// 7. Declare a variable called book & give it the value “A 
// smarter way to learn JavaScript”. Display the following 
// message in an alert box:


function book() {
    var bookMesg = "A smarter way to learn JavaScript"
    alert(bookMesg)
    console.log(bookMesg);

}


// 8. Write a script to display this in browser through JS 

var showMessage1 = document.querySelector("#showMessage"); 

function showMesg (){
    var mesg = "Asslam O Alikom! whats up bro"
    showMessage1.innerHTML = mesg;
}