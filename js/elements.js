import { btnEncrypt, btnDecrypt, btnCopy} from "./index.js";




//  Button click functions 


  function clickEncrypt (event) {

    event.preventDefault();
  
    btnEncrypt.classList.add ('blue')
    btnDecrypt.classList.remove ('blue')
    btnCopy.classList.remove ('blue')
  
  }
  
  function clickDecrypt (event) {
  
    event.preventDefault();
    btnEncrypt.classList.remove ('blue')
    btnDecrypt.classList.add ('blue')
    btnCopy.classList.remove ('blue')
  
  }
  
  function clickCopy (event) {
  
    event.preventDefault();
    btnEncrypt.classList.remove ('blue')
    btnDecrypt.classList.remove ('blue')
    btnCopy.classList.add ('blue')
  
  }


export {
  
  clickEncrypt,
  clickDecrypt,
  clickCopy
  
}






