let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// Contact working form

function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let phoneNo = document.querySelector(".phone-no");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");


  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" ||phoneNo.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value,phoneNo.value, msg.value);
      success();

    }
  });
}
validate();


function sendmail(name, email,phoneNo,msg) {
  emailjs.send("service_8ve0kgq","template_6gdgoid",{
    from_name: email,
    to_name: name,
    ph_number: phoneNo,
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
