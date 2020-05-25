const serverUrl = 'http://cd08a5c5.ngrok.io/'



function registration() {
        alert("here");
        const username = document.getElementById('reg_name_input');
        const email = document.getElementById('reg_email_input');
        const password1 = document.getElementById('reg_password1_input');
        //const password2 = document.getElementById('reg_password2_input');
        const is_vet = document.getElementById('is_vet');
        const is_client = document.getElementById('is_client');

        const newUser=JSON.stringify({
            "username": username.value,
            "email": email.value,
            "password": password1.value,
            //"password2": password2.value,
            "is_vet": is_vet.value,
            "is_client": is_client.value
        })

    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST",'http://127.0.0.1:8000/rest-auth/registration/',true);
   // xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    //alert(xmlHttp.readyState);
    if(xmlHttp.status === 201){
        alert("done");
    }
    else{
        alert("err");
    }
    xmlHttp.send(newUser);
}


function login(){


}