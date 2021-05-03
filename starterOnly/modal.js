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
const modalBody = document.querySelector(".modal-body");
const form = document.querySelector("form");
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
var firstValue;
var lastValue;
var emailValue;
var birthdateValue;
var quantityValue;
var locationValue;
var checkboxValue;
for (var i = 0; i < formData.length; i++) {
  const checkedbox1 = document.querySelector("#checkbox1");
  checkedbox1.setAttribute("required","required")
  textControl[i].setAttribute("data-compteur",i);
  formData[i].addEventListener("change", function(e){
    var value = e.target.value;
    var idInput = e.target.id;
    var nameInput =e.target.name;
    var iControl = e.target.getAttribute("data-compteur");
      function testInput(regex, chaine){
        if (regex.test(chaine)) {
          validation=true;
          formData[iControl].removeAttribute("data-error")
          formData[iControl].setAttribute("data-error-visible",false);
          btnSubmit.setAttribute("disabled",false);
          btnSubmit.removeAttribute("disabled");
          switch (nameInput) {
            case "first" :
              firstValue = value;
              break;
            case "last" :
              lastValue = value;
              break;
            case "email" :
              emailValue = value;
              break;
            case "birthdate" :
              birthdateValue = value;
              break;
            case "quantity" :
              quantityValue = value;
              break;
            case "location" :
              locationValue = value;
              break;
            case "checkbox" :
              checkboxValue = value;
              break;
            }
        } else {
          validation=false;
          btnSubmit.setAttribute("disabled",false);
          formData[iControl].setAttribute("data-error-visible",true);
          switch (nameInput) {
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
              formData[iControl].setAttribute("data-error","Veuillez indiquer votre date de naissance (jj/mm/aaaa)");
              break;
            case "quantity" :
              formData[iControl].setAttribute("data-error","Veuillez indiquer un nombre entre 1 et 99");
              break;
            case "location" :
              formData[iControl].setAttribute("data-error","Veuillez accepter les conditions d'utilisation");
              break;
            case "checkbox" :
              formData[iControl].setAttribute("data-error","Veuillez accepter les conditions d'utilisation");
              break;
            default :
              formData[iControl].setAttribute("data-error","cet élément n'est pas renseigné correctement");
            }
          }
      }
    switch (idInput) {
    case "first" :
    case "last" : 
      testInput(/^[A-Za-z -]\D{2,}$/,value);
      break;
    case "email" :
      testInput(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,value);
      break;
    case "birthdate" :
      testInput(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)\d{2})$/,value);
      break;
    case "quantity" :
      testInput(/[1-9]{1,2}/,value);
      break;
    default:;
    }
    }
)
};
  
function validate(){
  var string = "cool, super"; 
  if (firstValue == null || firstValue == "" || firstValue == undefined){
    alert("first à  renseigner");
    return false;
    } else if (lastValue == null || lastValue == "" || lastValue == undefined){
      alert("last à  renseigner");
      return false;
      } else if (emailValue == null || emailValue == "" || emailValue == undefined){
        alert("email à  renseigner");
        return false;
        } else if (birthdateValue == null || birthdateValue == "" || birthdateValue == undefined){
          alert("birthdate à renseigner");
          return false;
          } else if (quantityValue == null || quantityValue == "" || quantityValue == undefined){
            alert("quantity à renseigner");
            return false;
          } else {
            alert(string);
            return true;
            }
}