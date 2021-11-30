function checkEmail(e){
  let email = document.getElementById('email').value;
  if(email.length < 1){
  	Msg = `Please fill up this field!`;
    console.log(Msg);
		document.getElementById('errorEmail').innerHTML = Msg;
  }else if(email.length<10||email.indexOf('@')==-1) { 
    Msg = `Please fill in a valid email with @ `;
    console.log(Msg);
    document.getElementById('errorEmail').innerHTML = Msg;
  }else{
    document.getElementById('errorUsername').innerHTML = "";
  }
}
var txtUserName = document.getElementById('email');

txtUserName.addEventListener('blur', checkEmail, false);

