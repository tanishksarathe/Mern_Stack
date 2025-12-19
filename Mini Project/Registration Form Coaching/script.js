function submit() {
  // const batch = document.querySelectorAll("input[name='batch']:checked"); // gives array
  const selectedBatch = [];

  document
    .querySelectorAll("input[name='batch']:checked")
    .forEach((element) => {
      selectedBatch.push(element.value);
    });

    document.querySelectorAll(".Error").innerText = "";


    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const mobileno = document.getElementById("mobile").value;
    const birth = document.getElementById("dob").value;
    const qualification = document.getElementById("qual").value;
    const grade = document.getElementById("grade").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("adr").value;
    const city = document.getElementById("city").value;
    const pin = document.getElementById("pin").value;
    const guardian = document.getElementById("guardian").value;
    const guardianContact = document.getElementById("gcontact").value;
    const hear = document.getElementById("hear").value;
    const special = document.getElementById("special").value;

    console.log(qualification);
    console.log(fullname);
    console.log(grade);
    console.log(birth);
    console.log(mobileno);
    console.log(email);
    console.log(course);
    console.log(address);
    console.log(city);
    console.log(pin);
    console.log(guardianContact);
    console.log(guardian);
    console.log(hear);
    console.log(special);

    if(!/^[A-Za-z ]+$/.test(fullname)){
      document.getElementById("namevali").innerText = "Please enter a valid name";
      return;
    }

    if(!/^[A-Za-z ]+$/.test(city)){
      document.getElementById("cityvali").innerText = "Please enter a valid city name";
      return;
    }

    if(!/^\d{6}$/.test(pin)){
      document.getElementById("pinvali").innerText = "Please enter a valid 6 digit pin code";
      return;
    }



    if(!/^[A-Z]-[\w ,]+$/.test(address)){
      document.getElementById("addvali").innerText = "Please enter your full address";
      return;
    }

    if(!/^[A-Za-z ]+$/.test(guardian)){
      document.getElementById("gnamevali").innerText = "Please full name of guardian";
      return;
    }

    if(!/^[\w\.]+@(gmail|ricr|outlook)\.(com|in|org)$/.test(email)){
      document.getElementById("emailvali").innerText = "Please enter a valid email address";
      return;
    }

    if(!/^[6-9]\d{9}$/.test(mobileno)){
      document.getElementById("phonevali").innerText = "Please enter a valid phone number";
      return;
    }

    if(!/^[6-9]\d{9}$/.test(guardianContact)){
      document.getElementById("gphonevali").innerText = "Please enter a valid (10 digit) phone number of your guardian";
      return;
    }

    //Age Verification

    const today = new Date().getFullYear();

    if((today - birth.getFullYear()) < 15){
      document.getElementById("dobvali").innerText = "You must be atleast 15 years old";
      return;
    }


    if(qualification === ""){
       document.getElementById("qualvali").innerText = "Please select a qualification";
      return;
    }

    if(hear === ""){
       document.getElementById("hearvali").innerText = "Please select an Option";
      return;
    }

    if(course === ""){
       document.getElementById("coursevali").innerText = "Please select a course";
      return;
    }

    if(selectedBatch == [null]){
      documnet.getElementById("daysvali").innerText = "Please select a batch timing";
      return;
    }






    





    console.log(selectedBatch);
}
