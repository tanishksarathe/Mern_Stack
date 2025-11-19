function login(){
    console.log("Login button clicked");

    const em = document.getElementById("logusermail").value;
    const pass = document.getElementById("logpass").value;
    console.log(em);
    console.log(pass);

    alert("Login done");

    document.getElementById("logusermail").value="";
    document.getElementById("logpass").value="";
}

function registration(){
    console.log("Register button clicked");

    const name = document.getElementById("username").value;
    const email = document.getElementById("usermail").value;
    const pass = document.getElementById("pass").value;

    console.log(name);
    console.log(email);
    console.log(pass);

    alert("Registration is also done");

    document.getElementById("username").value="";
    document.getElementById("usermail").value="Sanjana Pagal hai";
    document.getElementById("pass").value="";

}

