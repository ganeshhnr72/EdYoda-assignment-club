function fname() {
  var firstName = document.getElementById("fname");
  var lastName = document.getElementById("lname");
  document.getElementById("fname_output").innerHTML =
    firstName.value.toUpperCase() + " " + lastName.value.toUpperCase();
}

function gen() {
  var genderSelected = document.getElementById("gender");
  // console.log(genderSelected.value);
  document.getElementById("gender_output").innerHTML = genderSelected.value;
  if (genderSelected.value == "MALE") {
    document.getElementById("salutation").innerHTML = "Mr. ";
  } else if (genderSelected.value == "FEMALE") {
    document.getElementById("salutation").innerHTML = "Mrs. ";
  } else {
    document.getElementById("salutation").innerHTML = "Mr. / Mrs. ";
  }
}

function checkIn() {
  var checkInDate = document.getElementById("checkIn");
  document.getElementById("ckeckIn_output").innerHTML = checkInDate.value;
  // document.getElementById("ckeckIn_output").innerHTML =
  var currentDate = new Date().toLocaleDateString();
  console.log(currentDate + " " + checkInDate.value);
}
function checkOut() {
  var checkOutDate = document.getElementById("checkOut");
  document.getElementById("checkOut_output").innerHTML = checkOutDate.value;
}

function services() {
  var serviceSelected = document.getElementById("services");
  // document.getElementById("service_output").innerHTML = serviceSelected.value;
  if (serviceSelected.value == "FULL-STACK") {
    // alert();
    document.getElementById("service_output").innerHTML =
      "  * * * * * <br>" + " FULL STACK CLUB ";
  } else if (serviceSelected.value == "BACK-END") {
    // alert();
    document.getElementById("service_output").innerHTML =
      "  * * *  <br>" + " BACK END CLUB ";
  } else if (serviceSelected.value == "FRON-END") {
    // alert();
    document.getElementById("service_output").innerHTML =
      "  * * * * <br>" + " FRONT END CLUB ";
  } else {
    document.getElementById("service_output").innerHTML =
      "NO COURSE IS SELECTED!";
  }
}
