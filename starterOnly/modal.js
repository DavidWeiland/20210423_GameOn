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
closeBtn.forEach((btnClose) => btnClose.addEventListener("click", closeModal));
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
const btnSubmit = document.querySelector('.btn-submit');
btnSubmit.setAttribute("disabled",true);

//validation des informations utilisateur
const textControl = document.querySelectorAll(".text-control");
var validation = false;
for (var i = 0; i < formData.length; i++) {
  formData[i].setAttribute("required",true);
  
  textControl[i].setAttribute("data-compteur",i);
  formData[i].addEventListener("input", function(e){
    var value = e.target.value;
    var typeForm = e.target.type;
    var idInput = e.target.id;
    var iControl = e.target.getAttribute("data-compteur");
    if (value.length == 0){
      formData[iControl].setAttribute("data-error","ce champs ne peut être vide");
    } else {
      formData[iControl].removeAttribute("data-error");
      function testInput(regex, chaine){
        if (regex.test(chaine)) {
          validation=true;
          formData[iControl].removeAttribute("data-error")
          formData[iControl].setAttribute("data-error-visible",false);
        } else {
          validation=false;
          formData[iControl].setAttribute("data-error-visible",true);
          switch (idInput) {
            case "first" : 
              formData[iControl].setAttribute("data-error","Veuillez entrer un minimum de 2 caractères (Aa-Zz)");
              break;
            case "last" :
              formData[iControl].setAttribute("data-error","Veuillez entrer un minimum de 2 caractères (Aa-Zz)");
              break;
            case "email" :
              formData[iControl].setAttribute("data-error","Veuillez renseigner un email valide (***@***.***)");
              break;
            case "birthdate" :
              formData[iControl].setAttribute("data-error","Veuillez indiquer votre date de naissance (**/**/****)");
              break;
            case "quantity" :
              formData[iControl].setAttribute("data-error","Veuillez indiquer un nombre entre 1 et 99");
              break;
            case "checkbox1" :
              formData[iControl].setAttribute("data-error","Veuillez accepter les conditions d'utilisation");
              break;
            default :
              formData[iControl].setAttribute("data-error","cet élément n'est pas renseigné correctement");
            }
          }
      }
    }  
    switch (typeForm) {
    case "text" : 
      testInput(/^[A-Za-z -]\D{2,}$/,value);
      break;
    case "email" :
      testInput(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,value);
      break;
    case "date" :
      testInput(/^[0-3]{1}[0-9]{1}\/[0-1]{1}[0-2]{1}\/\[12]{1}[09]{1}[0-9]{1}[0-9]{1}$/,value);
      testInput(/^\d{4}\/\d{2}\/\d{2}$/,value);
      break;
    case "number" :
      testInput(/[1-9]{1,2}/,value);
      break;
    default:;
   
    }
  })
};

// activation bouton d'envoi du formulaire
  if (validation) {
    btnSubmit.setAttribute("disabled", false);
    btnSubmit.removeAttribute("disabled");
  } else {
    alert("Certains champs du formulaire restent invalides");
  }


