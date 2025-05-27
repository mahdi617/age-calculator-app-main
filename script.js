// handel to our input and output
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

const dayOtp = document.getElementById("dayout");
const monthOtp = document.getElementById("monthout");
const yearOtp = document.getElementById("yearout");

// handel to button

const btn=document.querySelector("button")


// get day/month/year
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

// arry months
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validation() {

  let validate=true
  
    if (yearInp.value > year) {
      yearInp.style.borderColor = "red";
      yearInp.parentElement.querySelector("#erspan").innerText = "Must be in the past.";
      yearInp.parentElement.querySelector("label").style.color="red"
      validate=false
    } else if (monthInp.value > 12) {
        monthInp.style.borderColor = "red";
        monthInp.parentElement.querySelector("#erspan").innerText = "Must be valid month.";
        monthInp.parentElement.querySelector("label").style.color="red"
        validate=false
    } else if (dayInp.value > 31) {
        dayInp.style.borderColor = "red";
        dayInp.parentElement.querySelector("#erspan").innerText ="Must be valid day.";
        dayInp.parentElement.querySelector("label").style.color="red"
        validate=false
    } else {
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input) => {
          input.style.borderColor = "black";
          const parent = input.parentElement;
          if (parent.querySelector("label")) {
            parent.querySelector("label").style.color = "black";
          }
          if (parent.querySelector("#erspan")) {
            parent.querySelector("#erspan").innerText = "";
          }
        });
        validate=true
    }
    return validate;
  
}

btn.addEventListener("click", function(e) {

  e.preventDefault();
  if (validation()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
  
})