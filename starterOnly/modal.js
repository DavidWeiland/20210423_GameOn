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

const btnSubmit = document.querySelector('.btn-submit');
btnSubmit.setAttribute("disabled",true);

//validation des informations utilisateur
const textControl = document.querySelectorAll(".text-control");

const locationGame = document.querySelectorAll("input[type=radio]");
const location1 = document.querySelector("#location1");
location1.setAttribute("checked",true);

//Validation radio location
for(var k = 0; k < locationGame.length; k++) {
  locationGame[k].setAttribute("data-compt-loc",k)
  locationGame[k].addEventListener('change', function(event){
    location1.removeAttribute("checked");
    var iControlLoc = event.target.getAttribute("data-compt-loc");
    locationGame[iControlLoc].setAttribute("checked",true);
    locationValue = event.target.value;
    locationGame[iControlLoc].removeAttribute("checked");
})};

const condition = document.querySelectorAll("input[type=checkbox");
const checkbox1 = document.querySelector("#checkbox1");
checkbox1.setAttribute("checked",true);

//Validation checkbox Conditions d'utilisation
for(var l = 0; l < condition.length; l++) {
  condition[l].setAttribute("data-compt-cond",l);
  condition[l].addEventListener('change', function(eventCondition){
    var iControlCond = eventCondition.target.getAttribute("data-compt-cond");
    var checkedCondition = eventCondition.target.getAttribute("checked");
    if (!checkedCondition){
      condition[iControlCond].setAttribute("checked",true);
      conditionValue = eventCondition.target.value; 
    } else {
    condition[iControlCond].removeAttribute("checked");
    conditionValue = ""; 
}})};

var validation = false;
var firstValue;
var lastValue;
var emailValue;
var birthdateValue;
var quantityValue;
var locationValue = location1.value;
var conditionValue = checkbox1.value;

//validation des entrées alphanumériques
for (var i = 0; i < formData.length; i++) {
  textControl[i].setAttribute("data-compteur",i);
  formData[i].addEventListener("change", function(e){
    var value = e.target.value;
    var idInput = e.target.id;
    var nameInput =e.target.name;
    var iControl = e.target.getAttribute("data-compteur");
      function testInput(regex, chaine){
        if (regex.test(chaine)) {
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
            }
        } else {
          btnSubmit.setAttribute("disabled",false);
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
  var string = "Super, vous êtes inscrit pour le prochain tournois"; 
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
            alert(string);
            return true;
}};