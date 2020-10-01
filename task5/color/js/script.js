const dropDown =document.querySelector('#dropdown'),
      btnRemove =document.getElementById('btn-remove');
      function btnHandler(){
          dropDown.options[dropDown.selectedIndex].remove()
      }
      btnRemove.addEventListener('click', btnHandler);