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
closeBtn.forEach((yoyo) => yoyo.addEventListener("click", closeModal));
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
const textControl = document.querySelectorAll(".text-control");

textControl.forEach((input) => input.addEventListener("change", function(e){
  var value = e.target.value;
  var typeForm = e.target.type;
  function testInput(regex, chaine){
    var midstring;
    if (regex.test(chaine)) {
      midstring = "  Bien renseigné";
    } else {
      midstring = "  Mal renseigné";
    }
    alert(typeForm + midstring);
  }
  switch (typeForm) {
  case "text" : 
    testInput(/[A-Za-z]/g,value);
    break;
  case "number" :
    testInput(/[0-9]/,value);
    break;
  default :
    alert("  Error : le type " + typeForm +  " n'est pas valide, veuillez contacter le DW")
  }
}));


