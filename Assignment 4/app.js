let name, age, country;


let $myVariable, _anotherVar, name1, userName, camelCase;

function showDetails (){

document.getElementById('heading').innerText = "Rules for naming JS variables";
document.getElementById('rule1').innerText = "Variable names can only contain letters, numbers, $, and _. For example $my_1stVariable";

document.getElementById('rule2').innerText = "Variables must begin with a letter, $, or _. For example $name, _name or name";
document.getElementById('rule3').innerText = "Variable names are case sensitive";
document.getElementById('rule4').innerText = "Variable names should not be JS reserved keywords";

}