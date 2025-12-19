  const sound = new Audio("/Keyboard Task/asset/mixkit-message-pop-alert-2354.mp3");

function searchMap() {
  const place = document.getElementById("place").value.toLowerCase();
  // alert(place);

  if (place === "") {
    window.location.reload;
  }

  switch (place) {
    case `${place}`: {
      document.getElementById(`${place}`).style.visibility = "visible";

      const a = document.getElementById(`${place}`);
      a.title = `State : ${place}`;

      sound.play();
      break;
    }
  }
}

function markAll() {
  const states = [
    "andhrapradesh",
    "arunachalpradesh",
    "assam",
    "jammu",
    "laddakh",
    "bihar",
    "chattisgarh",
    "goa",
    "gujrat",
    "haryana",
    "himachalpradesh",
    "jharkhand",
    "karnataka",
    "kerela",
    "madhyapradesh",
    "maharastra",
    "manipur",
    "meghalaya",
    "mizoram",
    "nagaland",
    "odisha",
    "punjab",
    "rajasthan",
    "sikkim",
    "tamilnadu",
    "telangana",
    "tripura",
    "uttarpradesh",
    "uttrakhand",
    "westbengal",
    "delhi",
  ];

  states.map((i) => {
    switch (i) {
      case `${i}`: {
        document.getElementById(`${i}`).style.visibility = "visible";

        const a = document.getElementById(`${i}`);
        a.title = `State : ${i}`;
        break;
      }
    }
  });

  sound.play();

}

function unmarkAll() {
  const states = [
    "andhrapradesh",
    "arunachalpradesh",
    "assam",
    "jammu",
    "laddakh",
    "bihar",
    "chattisgarh",
    "goa",
    "gujrat",
    "haryana",
    "himachalpradesh",
    "jharkhand",
    "karnataka",
    "kerela",
    "madhyapradesh",
    "maharastra",
    "manipur",
    "meghalaya",
    "mizoram",
    "nagaland",
    "odisha",
    "punjab",
    "rajasthan",
    "sikkim",
    "tamilnadu",
    "telangana",
    "tripura",
    "uttarpradesh",
    "uttrakhand",
    "westbengal",
    "delhi",
  ];

  states.map((i) => {
    switch (i) {
      case `${i}`: {
        document.getElementById(`${i}`).style.visibility = "hidden";

        const a = document.getElementById(`${i}`);
        a.title = `State : ${i}`;
        break;
      }
    }
  });
}
