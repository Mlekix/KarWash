import "../styles/index.scss";

import emailjs from "@emailjs/browser";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";

// document.designMode = "on";

// Menu
const mobileMenuBtn = document.querySelector(".menu");
const menu = document.querySelector(".desktop-nav");
const closeMenuBtn = document.querySelector(".close-btn");
const mainSectionBtns = document.querySelectorAll(".main-section-btn");
const serviceSectionBtns = document.querySelectorAll(".service-section-btn");
const aboutusSectionBtns = document.querySelectorAll(".aboutus-section-btn");
const subsSectionBtns = document.querySelectorAll(".subs-section-btn");
const contactSectionBtns = document.querySelectorAll(".contact-section-btn");

// Contact
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const numberInput = document.querySelector(".number-input");
const messageInput = document.querySelector(".message-input");
const submitFormBtn = document.querySelector(".submit-btn");

//menu function
const closeMenuHandler = () => {
  menu.classList.remove("mobile-menu");
};

mobileMenuBtn.addEventListener("click", () => {
  menu.classList.add("mobile-menu");
  closeMenuBtn.addEventListener("click", closeMenuHandler);
});

//scrolling function
function scrollToSection(sectionClass) {
  const section = document.querySelector(`.${sectionClass}`);
  section.scrollIntoView({ behavior: "smooth" });
}

mainSectionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    scrollToSection("start");
    closeMenuHandler();
  });
});

serviceSectionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    scrollToSection("services");
    closeMenuHandler();
  });
});

aboutusSectionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    scrollToSection("about-us");
    closeMenuHandler();
  });
});

subsSectionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    scrollToSection("subs-title");
    closeMenuHandler();
  });
});

contactSectionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    scrollToSection("contacts");
    closeMenuHandler();
  });
});

// sending form function
alertify.set("notifier", "position", "top-center");

const sendMail = (event) => {
  event.preventDefault();

  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    numberInput.value.trim() === "" ||
    messageInput.value.trim() === ""
  ) {
    alertify.notify(
      "Proszę o uzupełnienie każdej rubryki, abym mógł skontaktować się zwrotnie",
      "error",
      4
    );
    return;
  }

  var params = {
    name: nameInput.value,
    email: emailInput.value,
    number: numberInput.value,
    message: messageInput.value,
  };

  const serviceID = "service_mg49fzc";
  const templateID = "template_kv98ecx";
  const publicKey = "JemKoYYAZVYZlX3Cb";

  emailjs
    .send(serviceID, templateID, params, publicKey)
    .then((res) => {
      nameInput.value = "";
      emailInput.value = "";
      numberInput.value = "";
      messageInput.value = "";
      console.log(res);
      alertify.notify(
        "Dziękuje za wiadomość, odezwę się jak najszybciej będę mógł!",
        "success",
        4
      );
    })
    .catch((err) => console.log(err));
};

submitFormBtn.addEventListener("click", sendMail);

//backgroud swap
