
document.querySelector("form").addEventListener("submit",accreate)

function accreate(){
event.preventDefault();

var userData={
    Name:document.querySelector("#name").value,
    Email:document.querySelector("#email").value,
    Password:document.querySelector("#pass").value,
    Accesscode:document.querySelector("#access").value,
}

console.log("fghfghj");
localStorage.setItem("userData",JSON.stringify(userData));
alert("Account Created Successfully...Redirecting to Login's Page");
window.location.href="SignIn.html";
}