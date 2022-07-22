const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_c8edsa8";
  const templateID = "template_v8x9bai";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      // alert("Email Sent Successfully!");
      // console.log("hello");
       event.target.reset();

    },
    (err) => {
      // btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});



