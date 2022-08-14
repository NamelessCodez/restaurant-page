//remove all children of main div to render new pages and change stylesheet
const render = function (stylesheet) {
  const mainDiv = document.querySelector(".main");
  const style = document.querySelector("link");

  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }

  style.href = `../src/stylesheets/${stylesheet}-style.css`;
};

export default render;
