function storeSignInDetails(username, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }

  function login()
  {
    let a=document.getElementById("username").value;
    let b=document.getElementById("password").value;


    let c=localStorage.getItem("username");
    let d=localStorage.getItem("password");

    if(a==c && b==d)
    {
        window.location.href = "index1.html";
    }
    else{
        alert("Invalid username or password");
        window.location.href = "signin.html";
    }
    
  }
  function handleButtonClick() {
      window.location.href = "login.html";
    }

  function handleSignInForm(event) {
    event.preventDefault(); 
    var username = document.getElementById("signin-username").value;
    var password = document.getElementById("signin-password").value;
    storeSignInDetails(username, password);
    window.location.href = "index.html";
  }
  var signinform = document.getElementById("signin-form");
  signinform.addEventListener("submit", handleSignInForm);
  var loginformbutton = document.getElementById("login-button");
  //checkSignInStatus();