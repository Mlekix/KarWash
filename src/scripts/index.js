import "../styles/index.scss";

const mobileMenuBtn = document.querySelector(".menu");
const menu = document.querySelector(".desktop-nav");
const closeMenuBtn = document.querySelector(".close-btn");
const mainSectionBtns = document.querySelectorAll(".main-section-btn");
const serviceSectionBtns = document.querySelectorAll(".service-section-btn");
const aboutusSectionBtns = document.querySelectorAll(".aboutus-section-btn");
const subsSectionBtns = document.querySelectorAll(".subs-section-btn");
const contactSectionBtns = document.querySelectorAll(".contact-section-btn");

const closeMenuHandler = () => {
  menu.classList.remove("mobile-menu");
};

mobileMenuBtn.addEventListener("click", () => {
  menu.classList.add("mobile-menu");
  closeMenuBtn.addEventListener("click", closeMenuHandler);
});

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
