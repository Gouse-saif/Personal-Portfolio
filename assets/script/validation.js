// First Name Validation
var firstName = document.getElementById("from_name");

var firstNameValidation = function () {
  firstNameValue = firstName.value.trim();
  validFirstName = /^[A-Za-z\s]+$/;
  first__name__err = document.getElementById("first__name__err");

  if (firstNameValue == "") {
    first__name__err.innerHTML = "First Name is required";
  } else if (!validFirstName.test(firstNameValue)) {
    first__name__err.innerHTML = "First Name must be only string";
  } else {
    first__name__err.innerHTML = "";
    return true;
  }
};

firstName.oninput = function () {
  firstNameValidation();
};

// Email Address Validation
var emailAddress = document.getElementById("email_id");
var emailAddressValidation = function () {
  emailAddressValue = emailAddress.value.trim();
  validEmailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  email__name__err = document.getElementById("email__name__err");

  if (emailAddressValue == "") {
    email__name__err.innerHTML = "Email Address is required";
  } else if (!validEmailAddress.test(emailAddressValue)) {
    email__name__err.innerHTML = "Email Valid Format abc@gmail.com";
  } else {
    email__name__err.innerHTML = "";
    return true;
  }
};

emailAddress.oninput = function () {
  emailAddressValidation();
};
document.getElementById("form").onsubmit = function (e) {
  firstNameValidation();
  emailAddressValidation();

  if (
    firstNameValidation() == true &&
    emailAddressValidation() == true
  ) {
    // form.reset();
    return console("success");
  } else {
    return false;
  }
};

// function sendmail() {
//   var params = {
//     from_name: document.getElementById("from_name").value,
//     email_id: document.getElementById("email_id").value,
//     message: document.getElementById("message").value,
//   };
//   emailjs
//     .send("service_c8edsa8", "template_v8x9bai", params)
//     .then(function (res) {
//       alert("succsess " + res.status);
//     });
// }

// var btn = document.querySelector("#button");
// var message = document.querySelector("#message");
// btn.addEventListener("click", (e) => {

//   if (
//     firstName.value == "" ||
//     emailAddress.value == "" ||
//     message.value == ""
//   ) {
//     alert("cannot be empty");
//   } else if (
//     firstNameValidation() == true &&
//     emailAddressValidation() == true
//   ) {
//     firstNameValidation();
//     emailAddressValidation();
//   } else {
//     sendmail();
//   }
// });



