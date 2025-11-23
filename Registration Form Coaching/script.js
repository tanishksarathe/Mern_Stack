function submit() {
  // const batch = document.querySelectorAll("input[name='batch']:checked"); // gives array
  const selectedBatch = [];

  document
    .querySelectorAll("input[name='batch']:checked")
    .forEach((element) => {
      selectedBatch.push(element.value);
    });


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


    console.log(selectedBatch);
}
