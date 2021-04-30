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
var validate =false;
for (var i = 0; i < formData.length; i++) {
  formData[i].setAttribute("required",true);
  formData[i].setAttribute("data-error","cet élément n'est pas renseigné correctement")
  textControl[i].setAttribute("data-compteur",i);
  formData[i].addEventListener("input", function(e){
    var value = e.target.value;
    var typeForm = e.target.type;
    var iControl = e.target.getAttribute("data-compteur");
    function testInput(regex, chaine){
      if (regex.test(chaine)) {
        validate=true;
        formData[iControl].removeAttribute("data-error","Caractères autorisés Aa-Zz et -")
        formData[iControl].setAttribute("data-error-visible",false);
      } else {
        validate=false;
        formData[iControl].setAttribute("data-error-visible",true);
      }
    }
    switch (typeForm) {
    case "text" : 
      testInput(/[A-Za-z -]{2,}/,value);
      break;
    case "email" :
      testInput(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,value);
      break;
    //case "date" :
      //testInput(/[0-9]{2}[0-9]{2}[0-9]{4}/,value);
      //break;
    case "number" :
      testInput(/[0-9]/,value);
      break;
    default :
      //alert("  Error : le type " + typeForm +  " n'est pas valide, veuillez contacter le DW")
    }
  })
};


