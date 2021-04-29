function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
/*
// activation bouton d'envoi du formulaire
function disableSubmit(disabled) {
  const submitBtn = document.querySelector('.btn-submit');
  if (disabled) {
    submitBtn.setAttribute("disabled", true);
  } else {
    submitBtn.removeAttribute("disabled");
  }
}
*/
//validation des informations utilisateur
const firstInput = document.querySelector("#first");
const lastInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
var input = firstInput;


input.addEventListener("change", function(e){
  var value = e.target.value;
  var typeForm = e.target.type;
  function testInput(regex, chaine){
    var midstring;
    if (regex.test(chaine)) {
      midstring = "Ce sont des lettres";
    } else {
      midstring = "Merci de ne renseigner que des lettres";
    }
    alert(typeForm + midstring);
  }
  testInput(/[A-Za-z]/,value);
  //alert(value);
});


