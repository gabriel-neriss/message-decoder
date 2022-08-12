import { clickEncrypt, clickDecrypt, clickCopy} from "./elements.js"

import { btnEncrypt, btnDecrypt, btnCopy} from "./index.js"

// button events


export function initEvents () {

btnEncrypt.addEventListener('click', (event) => {

  clickEncrypt(event)

})


btnDecrypt.addEventListener('click', (event) => {
  
  clickDecrypt(event)
 
})

btnCopy.addEventListener('click', (event) => {

  clickCopy(event)
  
  
});



}



