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

//const btnSubmit = document.querySelector('.btn-submit');

//validation des informations utilisateur
const textControl = document.querySelectorAll(".text-control");
for( var j = 0; j < textControl.length; j++){
  textControl[j].setAttribute("data-compteur",j);
}

//Validation radio location
const locationGame = document.querySelectorAll("input[type=radio]");
const location1 = document.querySelector("#location1");
location1.setAttribute("checked",true);

for(var k = 0; k < locationGame.length; k++) {
  locationGame[k].setAttribute("data-compt-loc",k)
  locationGame[k].addEventListener('change', function(event){
    location1.removeAttribute("checked");
    var iControlLoc = event.target.getAttribute("data-compt-loc");
    locationGame[iControlLoc].setAttribute("checked",true);
    locationValue = event.target.value;
    locationGame[iControlLoc].removeAttribute("checked");
})};

//Validation checkbox Conditions d'utilisation
const condition = document.querySelectorAll("input[type=checkbox");
const checkbox1 = document.querySelector("#checkbox1");
checkbox1.setAttribute("checked",true);

for(var l = 0; l < condition.length; l++) {
  condition[l].setAttribute("data-compt-cond",l);
  condition[l].addEventListener('change', function(eventCondition){
    var iControlCond = eventCondition.target.getAttribute("data-compt-cond");
    var checkedCondition = eventCondition.target.getAttribute("checked");
    if (!checkedCondition){
      condition[iControlCond].setAttribute("checked",true);
      conditionValue = eventCondition.target.value;
      condition[iControlCond].parentNode.removeAttribute("data-error")
      condition[iControlCond].parentNode.setAttribute("data-error-visible",false);
    } else {
    condition[iControlCond].removeAttribute("checked");
    conditionValue = "";
    condition[iControlCond].parentNode.setAttribute("data-error-visible",true);
    condition[iControlCond].parentNode.setAttribute("data-error","Veuillez accepter les conditions d'utilisation");
}})};

var firstValue;
var lastValue;
var emailValue;
var birthdateValue;
var quantityValue;
var locationValue = location1.value;
var conditionValue = checkbox1.value;

//validation des entrées alphanumériques
for (var i = 0; i < formData.length; i++) {
  formData[i].addEventListener("change", function(e){
    var value = e.target.value;
    var idInput = e.target.id;
    var nameInput =e.target.name;
    var iControl = e.target.getAttribute("data-compteur");
      function testInput(regex, chaine){
        if (regex.test(chaine)) {
          formData[iControl].removeAttribute("data-error")
          formData[iControl].setAttribute("data-error-visible",false);
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
            }
        } else {
          formData[iControl].setAttribute("data-error-visible",true);
          switch (nameInput) {
            case "first" :
              firstValue = "";
              formData[iControl].setAttribute("data-error","Veuillez entrer un minimum de 2 caractères (Aa-Zz)");
              break;
            case "last" :
              lastValue = "";
              formData[iControl].setAttribute("data-error","Veuillez entrer un minimum de 2 caractères (Aa-Zz)");
              break;
            case "email" :
              emailValue = "";
              formData[iControl].setAttribute("data-error","Veuillez renseigner un email valide (***@***.***)");
              break;
            case "birthdate" :
              birthdateValue = "";
              formData[iControl].setAttribute("data-error","Veuillez indiquer votre date de naissance (jj/mm/aaaa)");
              break;
            case "quantity" :
              quantityValue = "";
              formData[iControl].setAttribute("data-error","Veuillez indiquer un nombre entre 1 et 99");
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
}})};

//Validation champs non-vide et envoi formulaire
function validate(){
  if (firstValue == null || firstValue == "" || firstValue == undefined){
    alert("Merci d'indiquer votre prénom");
    return false;
    } else if (lastValue == null || lastValue == "" || lastValue == undefined){
      alert("Merci d'indiquer votre nom");
      return false;
      } else if (emailValue == null || emailValue == "" || emailValue == undefined){
        alert("Merci d'indiquer votre email");
        return false;
        } else if (birthdateValue == null || birthdateValue == "" || birthdateValue == undefined){
          alert("Merci d'indiquer votre date de naissance");
          return false;
          } else if (quantityValue == null || quantityValue == "" || quantityValue == undefined){
            alert("Merci d'indiquer le nombre de tournois auxquels vous avez participé");
            return false;
          } else if (locationValue == null || locationValue == "" || locationValue == undefined){
            alert("Merci d'indiquer la ville dans laquelle s'est déroulé le(s) tournois");
            return false;
            } else if (conditionValue == null || conditionValue == "" || conditionValue == undefined){
              alert("Merci d'accepter les conditions d'utilisation");
              return false;
              } else {
            form.style.display = "none";
            modalBody.innerHTML = "<p class='validation' style='height:640px; display:flex; flex-direction:column; justify-content:center;'>Merci !<br/><br/>Votre réservation a été envoyée</p><button class='btn-submit btn-close' value='Close'>Close</button>"
            const closeBtnModal = document.querySelector(".btn-close");
            closeBtnModal.addEventListener('click',closeModal);
            return true;
}};