
function registration() {

        const username = document.getElementById('reg_name_input');
        const email = document.getElementById('reg_email_input');
        const password1 = document.getElementById('reg_password1_input');
        const password2 = document.getElementById('reg_password2_input');
        const is_vet = document.getElementById('is_vet').checked ? 'True' : 'False';
        const is_client = document.getElementById('is_client').checked ? 'True' : 'False';

        const newUser=JSON.stringify({
            "username": username.value,
            "email": email.value,
            "password1": password1.value,
            "password2": password2.value,
            "is_vet": is_vet,
            "is_client": is_client
        })

    const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState ===4){
            if(xmlHttp.status ===201){
                alert("Success \n" + "Response Status is: "+xmlHttp.status+"\n"+ "Response text: \n"+ xmlHttp.responseText);
            }
            else {
                alert("err");
            }
        }
    }
    xmlHttp.open("POST",'http://127.0.0.1:8000/rest-auth/registration/',true);
   // xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.send(newUser);
}
