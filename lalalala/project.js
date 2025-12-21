var form = document.getElementById('form');
var useremail=document.getElementById('form2Example1');
var password=document.getElementById('form2Example2');
var allUsers=JSON.parse(localStorage.getItem('users')) || [];
form.addEventListener('submit',function(event){
 event.preventDefault();
if(allUsers.length == 0){
 return;
alert('No users found');
}

else{
var isEcxist=false;
 for(var i=0;i<allUsers.length;i++){
    if(allUsers[i].email == useremail.value && allUsers[i].password == password.value){
      console.log(allUsers[i].name);
        isEcxist=true;
 }

else{
    console.log('user not found')
}

} 


if(isEcxist == true){
    window.location.href = '/lalalala/food.html';
}

else{
    alert('user not allowed');}



}
}) 