var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

const opentab = (tabname) => {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
};

// SIDE BAR JS

let sidemenu = document.getElementById("sidemenu");

const openmenu = () => {
  sidemenu.style.right = "0";
};
const closemenu = () => {
  sidemenu.style.right = "-200px";
};

// CONTACT FORM GOOGLE SHEET
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxxae3WqZWDLi9AvPXrNzIJNfBWWgWgUFgLD2UfAGP9xH5E14ln20kB2VPlC067rhWU/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset;
    })
    .catch((error) => console.error("Error!", error.message));
});
