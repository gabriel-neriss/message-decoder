const btnEncrypt = document.querySelector ('.encrypt');
const btnDecrypt = document.querySelector ('.decrypt');





function preventReset (event) {

  event.preventDefault()

}



btnEncrypt.addEventListener('click', preventReset);

btnDecrypt.addEventListener('click', preventReset);

