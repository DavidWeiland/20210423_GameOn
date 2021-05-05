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
checkbox1.addEventListener('change', function(eventCondition){  
var checkedCondition = checkbox1.getAttribute("checked");
    
if (!checkedCondition){
  checkbox1.setAttribute("checked",true);
  conditionValue = checkbox1.value;
  checkbox1.parentNode.removeAttribute("data-error");
  checkbox1.parentNode.setAttribute("data-error-visible",false);
} else {
  checkbox1.removeAttribute("checked");
  conditionValue = "";
  checkbox1.parentNode.setAttribute("data-error-visible",true);
  checkbox1.parentNode.setAttribute("data-error","Veuillez accepter les conditions d'utilisation");
}});

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
              const dateValue = value.split('-');
              const year = dateValue[0];
              const month = dateValue[1];
              const day = dateValue[2];
              const newDateValue = day + '/' + month + '/' + year;
              if (year<=1922){
                formData[iControl].setAttribute("data-error", "Les tournois sont ouverts jusqu'à 99 ans")
                formData[iControl].setAttribute("data-error-visible",true);
                birthdateValue = "";
              } else if (year>=2014) {
                formData[iControl].setAttribute("data-error", "Les tournois sont ouverts aux plus de 13 ans")
                formData[iControl].setAttribute("data-error-visible",true);
                birthdateValue = "";
              } else {
              birthdateValue = newDateValue;
              }
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
      testInput(/^\d{4}(-)\d{2}(-)\d{2}$/,value);
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