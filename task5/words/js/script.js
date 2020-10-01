const Hover = document.querySelector('#hover'),
      Bold = document.querySelectorAll('.bold');

     function showCase(){ 
         for(let i=0; i<Bold.length; i++){
          Bold[i].style.color='green';
      }
    }
    function hideCase(){
        for(let i=0; i<Bold.length; i++){
            Bold[i].style.color= 'white';
        }
    }
    Hover.addEventListener('mouseover', showCase );
    Hover.addEventListener('mouseout', hideCase);
