var form=document.getElementById('form');
var useremail=document.getElementById('form2Example1');
var password=document.getElementById('form2Example2');
form.addEventListener('submit',function(event){
event.preventDefault();

var user={
    email:useremail.value,
    password:password.value

}


allUsers.push(user)

localStorage.setItem('users',JSON.stringify(allUsers));

alert('user added');




})