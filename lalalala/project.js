


var form=document.getElementById('form')
var useremail=document.getElementById('form2Example1')
var password=document.getElementById('form2Example2')
var allUser=JSON.parse(localStorage.getItem('user')) || [];
form.addEventListener('submit',function(event){
event.preventDefault()



 if(allUser.length == 0){
    alert("no users found")
    return;
 }

 else{
    var isExisted=false
    for(var i=0;i<allUser.length;i++){
        if(allUser[i].email==useremail.value && allUser[i].password==password.value){
            console.log(allUser[i].name)
            isExisted=true
            
        }

        else{
            console.log("no")
        }
    }

if(isExisted == true){
    window.location.href='/restaurant/food.html'
}
else{
    alert("user not allowed");
}

}
























})