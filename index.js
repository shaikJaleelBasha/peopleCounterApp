// document.getElementById("count-el").innerText=5;
// document.getElementById("name").innerText="Hlo Jaleel";

// let count = 5;
// console.log(count);

// var myAge = 19;
// console.log(myAge);
 
// var myAge = 3
// let dogRatio = myAge*7;
// console.log(dogRatio)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 100
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 25
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 70
// console.log(bonusPoints)
let countEl = document.getElementById("count-el");
var count = 0;

function increment() {
    count += 1;
    countEl.innerHTML = count;
    console.log("The button was clicked");
}

function decrement() {

    if(count<=0){
        alert("the people should not be negative")
    }
    else{
        count -= 1;
        countEl.innerHTML = count;
        console.log("The button was clicked");
    }
    
}

let saveEl = document.getElementById("save-el");

function save() {
    let text1 = count + " - ";
    saveEl.innerText += text1;
    countEl.textContent = 0;
    count = 0;
}

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let nameElement = document.getElementById("welcomEl");

function display() {
    // Ensure both first and last names are entered
    if (firstName.value && lastName.value) {
        let text = "Welcome, " + firstName.value + " " + lastName.value + "!";
        nameElement.textContent = text; // Display the combined text
        firstName.value = ''; // Clear the input field after display
        lastName.value = '';  // Clear the input field after display
    } else {
        alert("Please enter both first and last names.");
    }
}
