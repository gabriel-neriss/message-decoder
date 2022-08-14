  const btnEncrypt = document.querySelector ('.encrypt')
  const btnDecrypt = document.querySelector ('.decrypt')
  const btnCopy = document.querySelector ('.copy')
  const textArea = document.querySelector ('textarea')
  const messageAlert = document.querySelector ('.messageAlert')
  const finalOutput = document.querySelector ('#finalTextOutput')

  
  //  Button click functions 
  
  
  function clickEncrypt (event) {
  
      event.preventDefault();
    
      btnEncrypt.classList.toggle ('blue')
      btnDecrypt.classList.remove ('blue')
      btnCopy.classList.remove ('blue')
    
    }
    
  function clickDecrypt (event) {
    
      event.preventDefault();
      btnEncrypt.classList.remove ('blue')
      btnDecrypt.classList.toggle ('blue')
      btnCopy.classList.remove ('blue')
    
    }
    
  function clickCopy (event) {
    
      event.preventDefault();
      btnEncrypt.classList.remove ('blue')
      btnDecrypt.classList.remove ('blue')
      btnCopy.classList.toggle ('blue')
    
    }

    // alert for empty message input field

  function alertMessage () {

    if ( textArea.value == '' ) {

    btnCopy.style.display = 'none'
    finalOutput.style.display = 'none'
    messageAlert.style.display = 'block'

    } else {

    btnCopy.style.display = 'block'
    finalOutput.style.display = 'block'
    messageAlert.style.display = 'none'

    }

  }

  // encrypt message

  function encryptMessage () {


    let result =  textArea.value 
    
    .replaceAll ('e', 'enter')
    .replaceAll ('i', 'imes')
    .replaceAll ('a', 'ai')
    .replaceAll ('o', 'obter')
    .replaceAll ('u', 'ufat')

    finalOutput.value = result


  }

  
  // button events
  
  
  export default function initEvents () {
  
    btnEncrypt.addEventListener('click', (event) => {
    
      clickEncrypt(event)
      encryptMessage ()
      alertMessage()
      
    
    })
    
    
    btnDecrypt.addEventListener('click', (event) => {
      
      alertMessage()
      clickDecrypt(event)
    
     
    })
    
    btnCopy.addEventListener('click', (event) => {
    
      clickCopy(event)
      
      
    });
    
    
    
    }
    
  
  
  


