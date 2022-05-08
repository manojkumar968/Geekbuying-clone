var userinputData = JSON.parse(localStorage.getItem("userData"));
console.log(userinputData);



document.querySelector("form").addEventListener("submit",mylogin);

function mylogin(){
    event.preventDefault();
    var enteredemail = document.querySelector("#email").value;
    var enteredpassword = document.querySelector("#pass").value;
    if(enteredemail == userinputData.Email && enteredpassword == userinputData.Password)
    {
        alert("Login Success!..Redirecting to Homepage");
        window.location.href="index.html";
    }
    else
    {
        
    }
    
}

function createfun(){
    window.location.href="SignUp.html";
}