hamburger = document.querySelector(".hamburger")
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar")
    navBar.classList.toggle("active")
}

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kaydentatamijudo@gmail.com",
        Password : "F3E30B27F56014368D7DD238CD1D3959FF2E",
        To : 'kaydentatamijudo@gmail.com',
        From : document.getElementById("email").value,
        Subject : "A new Judoka has joined Tatami",
        Body : " Parent Name: " + document.getElementById("Pname").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone Number: " + document.getElementById("number").value
        + "<br> Childs Name: " + document.getElementById("Cname").value
        + "<br> Grade: " + document.getElementById("grade").value
        + "<br> Name of School: " + document.getElementById("Sname").value
        + "<br> Date: " + document.getElementById("Date").value
    }).then(
    message => alert("We will get back to you soon!")
    );
}