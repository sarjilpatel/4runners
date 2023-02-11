function sendMail() {
  var params = {
    name: document.getElementById("form_name").value,
    phone: document.getElementById("form_email").value,
    email: document.getElementById("form_phone").value,
    message: document.getElementById("form_message").value,
  };

  emailjs
    .send("service_k87zf9q", "template_z57fucl", params)
    .then(function (res) {
      alert("Message sent successfully");

      document.getElementById("form_name").value = "";
      document.getElementById("form_email").value = "";
      document.getElementById("form_phone").value = "";
      document.getElementById("form_message").value = "";
    });
}
