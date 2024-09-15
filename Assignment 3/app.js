// 1. Declare a variable called age & assign to it your age. Show 
// your age in an alert box. 

function showAge() {
    var ageOfStu = 15;
    alert("Student age:\n" + ageOfStu);
    console.log(ageOfStu);

}


// 2. Declare & initialize a variable to keep track of how many 
// times a visitor has visited a web page. Show his/her 
// number of visits on your web page. For example: “You 
// have visited this site N times”.

var visitCount = 0;


function updateVisitCount() {
    visitCount++;

    document.getElementById('visitCount').innerText = `You have visited this site ${visitCount} times.`;

    alert(visitCount)
    console.log(visitCount);

}




var showMesg = document.querySelector('#showMesg')

function showBirthYear() {
    let message = "You were born in the year of 2000";
    showMesg.innerHTML = message;
    alert(message);
    console.log(message);

}




var showOrder = document.querySelector('#showOrderDetails');

function showOrderSummary() {
    let message = "Syed Moiz Kazmi ordered 5 T-shirt (s) on XYZ Clothing store.";

    showOrder.innerHTML = message;
    console.log(message);


}

