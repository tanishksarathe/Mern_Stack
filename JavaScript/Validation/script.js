function submit() {
  const name = document.getElementById("fullname").value.trim();

  const email = document.getElementById("mail").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value.trim();

  // Validation

    if(!/^[A-Z][A-Za-z ]+$/.test(name)){
        console.log("invalid");
        return;
    }   

    if(!/^[\w\.]+@(gmail|outlook|ricr|companyname)\.(com|in)$/.test(email)){
        console.log("Invalid");
        return;
    }

    if(!(/^[6-9]\d{9}$/.test(phone))){
        console.log("invalid");
        return;
    }

    


  const data = {
    Fullname: name,
    Email: email,
    Phone: phone,
    DateOfBirth: dob,
  };

  console.log(data);
}
