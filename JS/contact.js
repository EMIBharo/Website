let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

//working of contact page


function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let subject = document.querySelector(".subject");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || subject.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value,subject.value, msg.value);
      success();
    }
  });
}
validate();

function sendmail(name, email,subject, msg) {
  emailjs.send("service_8ve0kgq","template_6gdgoid",{
    from_name: email,
    to_name: name,
    to_subject: subject,
    message: msg,
    });
}

function emptyerror() {
  swal({
    title: "Oh no.....!",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}

function success() {
  swal({
    title: "Email sent successfully",
    text: "We try to reply in 24 hours",
    icon: "success",
  });
}

