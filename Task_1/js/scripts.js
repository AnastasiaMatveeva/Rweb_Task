const buttonIndividual = document.querySelector('.individual');
const buttonLegal = document.querySelector('.legal');
const helpKindButton = document.querySelector('.helpKindButton');
console.log(buttonIndividual);
console.log(buttonLegal);
function addClassInd() {
  if (buttonIndividual.classList.value !== 'individual') {
    buttonIndividual.classList.remove('active');
  } else {
    buttonIndividual.classList.add('active');
    buttonLegal.classList.remove('active');
  }
};
function addClassLegal() {
  if (buttonLegal.classList.value !== 'legal') {
    buttonLegal.classList.remove('active');
  } else {
    buttonLegal.classList.add('active');
    buttonIndividual.classList.remove('active');
  }
};

buttonIndividual.addEventListener('click', addClassInd);
buttonLegal.addEventListener('click', addClassLegal);
