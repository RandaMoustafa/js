var btnData =document .getElementById('btn-data'),
data = document.getElementById('age-data'),
btnAge =document.getElementById('btn-age'),
btnHobby=document.getElementById('btn-hobby'),
btnContact = document.getElementById('btn-contact');

function onClickData(){
    data.innerHTML ='Item1: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s';

}
btnData.addEventListener('click', onClickData);
function onClickAge(){
    data.innerHTML ='Item2: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s';
}
btnAge.addEventListener('click', onClickAge);
function onClickHobby(){
    data.innerHTML='Item3: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s';
}
btnHobby.addEventListener('click', onClickHobby );
function onClickContact(){
    data.innerHTML = 'Item4: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s';
}
btnContact.addEventListener('click', onClickContact);