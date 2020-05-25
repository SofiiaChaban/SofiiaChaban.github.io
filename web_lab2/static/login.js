
function login_user() {
    const username = document.getElementById('login_username_input');
    const email = document.getElementById('login_email_input');
    const password = document.getElementById('login_password_input');


     const newUser=JSON.stringify({
            "username": username.value,
            "email": email.value,
            "password": password.value,

        });

    const xmlHttp = new XMLHttpRequest();
    //xmlHttp.onreadystatechange = function(){
        //if(xmlHttp.readyState ===4){
          //  if(xmlHttp.status ===200){
            //    alert(xmlHttp.responseText);
           // }
            //else {
              //  alert("err");
            //}
        //}
    //}
     xmlHttp.open('POST', 'http://127.0.0.1:8000/rest-auth/login/', true);
     xmlHttp.setRequestHeader('Content-Type', 'application/json');
     xmlHttp.addEventListener("readystatechange",()=>{
         if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
             window.location.href = "main.html"
         }
     })
         xmlHttp.send(newUser);
}
