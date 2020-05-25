
function signin() {

    const username = document.getElementById('login_username_input');
    const email = document.getElementById('login_email_input');
    const password = document.getElementById('login_password_input');


     const newUser=JSON.stringify({
            "username": username.value,
            "email": email.value,
            "password": password.value,

        });

    const xmlHttp = new XMLHttpRequest();

     xmlHttp.open('POST', 'http://127.0.0.1:8000/rest-auth/login', true);
     xmlHttp.setRequestHeader('Content-Type', 'application/json');
     xmlHttp.addEventListener("readystatechange",()=>{
         if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
             alert("Success \n" + "Response Status is: "+xmlHttp.status+"\n"+ "Response text: \n"+ xmlHttp.responseText);
             window.location.href = "http://127.0.0.1:8000/main/"
         }
     })
         xmlHttp.send(newUser);
}

function create_appointment() {
        const date =document.getElementById('appointment_date');
        const time =document.getElementById('appointment_time');
        const description =document.getElementById('appointment_description');
        const client_id =document.getElementById('client_id');
        const vet_id =document.getElementById('vet_id');

            const newAppointment = JSON.stringify({
                "date":date.value,
                "time":time.value,
                "description": description.value,
                "client": client_id.value,
                "doctor": vet_id.value

            })
        const xmlHttp = new XMLHttpRequest();
         xmlHttp.open('POST', 'http://127.0.0.1:8000/vetfinder/appointments/', true);
        xmlHttp.setRequestHeader('Content-Type', 'application/json');
        xmlHttp.addEventListener("readystatechange",()=>{
         if (xmlHttp.readyState === 4 && xmlHttp.status === 201){
             alert("Success \n" + "Response Status is: "+xmlHttp.status+"\n"+ "Response text: \n"+ xmlHttp.responseText);
         }
     })
        xmlHttp.send(newAppointment);

}

function list_appointment_client() {
    const client_id = document.getElementById('client_id2').value;
     const xmlHttp = new XMLHttpRequest();
         xmlHttp.open('GET', 'http://127.0.0.1:8000/vetfinder/appointments/client/'+client_id, true);
        xmlHttp.setRequestHeader('Content-Type', 'application/json');
        xmlHttp.addEventListener("readystatechange",()=>{
         if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
             alert("Success \n" + "Response Status is: "+xmlHttp.status+"\n"+ "Response text: \n"+ xmlHttp.responseText);
         }
     })
        xmlHttp.send();

}
function list_appointment_vet() {
    const vet_id = document.getElementById('vet_id2').value;

     const xmlHttp = new XMLHttpRequest();
         xmlHttp.open('GET', 'http://127.0.0.1:8000/vetfinder/appointments/vet/'+vet_id, true);
        xmlHttp.setRequestHeader('Content-Type', 'application/json');
        xmlHttp.addEventListener("readystatechange",()=>{
         if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
             alert("Success \n" + "Response Status is: "+xmlHttp.status+"\n"+ "Response text: \n"+ xmlHttp.responseText);
         }
     })
        xmlHttp.send();

}