import { CreateHeader, indexPage } from "./firstLoad";
import render from "./render";

import menu from "./menu";
import contact from "./contact";

CreateHeader();

indexPage();

const homeButton = document.querySelector(".home");
homeButton.addEventListener("click", function () {
  render("index");
  indexPage();
});

const contactButton = document.querySelector(".contact");
contactButton.addEventListener("click", function () {
  render("contact");
  contact();
});

const menuButton = document.querySelector(".menu");
menuButton.addEventListener("click", function () {
  render("menu");
  menu();
});
