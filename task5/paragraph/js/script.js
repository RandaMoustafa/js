const Background =document.getElementById('background'),
      paragraphOne =document.getElementById('paragraph-1'),
      paragraphTwo =document.getElementById('paragraph-2');
       
      function backgroundColor(){
          paragraphOne.style.background = 'red',
          paragraphTwo.style.background = 'green'
      }

      Background.addEventListener('click', backgroundColor);