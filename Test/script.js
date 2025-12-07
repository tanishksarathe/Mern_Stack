function courseReg(){

    const username = document.getElementById("username").value;

    const college = document.getElementById("college").value;


    const branch = document.getElementById("branch").value;

    const sem = document.getElementById("semester").value;

    const phone = document.getElementById("pnumber").value;

    const mail = document.getElementById("email").value;

    const gender = document.getElementById("gender").value;

    const courseName = document.getElementById("coursename").value;

    console.log(username);
    console.log(college);
    console.log(branch);
    console.log(sem);
    console.log(phone);
    console.log(mail);
    console.log(gender);
    console.log(courseName);

    alert(`Thank you for Enrolling, ${username}`);
}


function contactReg(){
    const username = document.getElementById("usernamec").value;

    const email = document.getElementById("emailc").value;

    const message = document.getElementById("message").value;

    console.log(username);
    console.log(email);
    console.log(message);

    alert(`Thank you for contacting us, ${username}`);
}