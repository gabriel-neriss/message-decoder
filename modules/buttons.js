  const btnEncrypt = document.querySelector ('.encrypt')
  const btnDecrypt = document.querySelector ('.decrypt')
  const btnCopy = document.querySelector ('.copy')
  
  
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
  
  // button events
  
  
  export default function initEvents () {
  
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
    
  
  
  


