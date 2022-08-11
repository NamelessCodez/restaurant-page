/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = function () {\r\n  const mainDiv = document.querySelector(\".main\");\r\n\r\n  const backGroundDiv = document.createElement(\"div\");\r\n  backGroundDiv.classList.add(\"bg\");\r\n  mainDiv.appendChild(backGroundDiv);\r\n\r\n  const detailList = [];\r\n\r\n  const Detail = function (className, imageName, text) {\r\n    const imageSrc = `../src/assets/${imageName}-solid.svg`;\r\n    const imageAlt = `${imageName}-icon`;\r\n    return { className, imageSrc, imageAlt, text };\r\n  };\r\n\r\n  detailList.push(\r\n    Detail(\"number\", \"phone\", \"123 456 789\"),\r\n    Detail(\"address\", \"house\", \"1098 Rosewood Avenue, San Francisco CA 22434\")\r\n  );\r\n\r\n  detailList.forEach((detail) => {\r\n    const detailDiv = document.createElement(\"div\");\r\n    detailDiv.classList.add(\"contact-detail\");\r\n    backGroundDiv.appendChild(detailDiv);\r\n\r\n    const icon = document.createElement(\"img\");\r\n    icon.src = `${detail.imageSrc}`;\r\n    icon.alt = `${detail.imageAlt}`;\r\n    detailDiv.appendChild(icon);\r\n\r\n    const detailText = document.createElement(\"div\");\r\n    detailText.textContent = detail.text;\r\n    detailText.classList.add(`${detail.className}`);\r\n    detailDiv.appendChild(detailText);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/firstLoad.js":
/*!**************************!*\
  !*** ./src/firstLoad.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateHeader\": () => (/* binding */ CreateHeader),\n/* harmony export */   \"indexPage\": () => (/* binding */ indexPage)\n/* harmony export */ });\nconst CreateHeader = function () {\r\n  const buttonList = [];\r\n  const Button = function (className, Text) {\r\n    let buttonText = Text.toUpperCase();\r\n    return { className, buttonText };\r\n  };\r\n\r\n  buttonList.push(\r\n    Button(\"home\", \"home\"),\r\n    Button(\"menu\", \"menu\"),\r\n    Button(\"contact\", \"contact us\")\r\n  );\r\n\r\n  const contentDiv = document.querySelector(\".content\");\r\n\r\n  const headerDiv = document.createElement(\"div\");\r\n  headerDiv.classList.add(\"header\");\r\n  contentDiv.appendChild(headerDiv);\r\n\r\n  const mainDiv = document.createElement(\"div\");\r\n  mainDiv.classList.add(\"main\");\r\n  contentDiv.appendChild(mainDiv);\r\n\r\n  const titleDiv = document.createElement(\"div\");\r\n  titleDiv.textContent = \"The Awesome Restaurant\";\r\n  titleDiv.classList.add(\"title\");\r\n  headerDiv.appendChild(titleDiv);\r\n\r\n  const navContainer = document.createElement(\"nav\");\r\n  navContainer.classList.add(\"nav\");\r\n  headerDiv.appendChild(navContainer);\r\n\r\n  const navWrap = document.createElement(\"ul\");\r\n  navContainer.appendChild(navWrap);\r\n\r\n  buttonList.forEach((button) => {\r\n    const li = document.createElement(\"li\");\r\n    navWrap.appendChild(li);\r\n\r\n    const navButton = document.createElement(\"button\");\r\n    navButton.classList.add(\"nav-item\", `${button.className}`);\r\n    navButton.textContent = button.buttonText;\r\n\r\n    console.log(navButton.textContent);\r\n    li.appendChild(navButton);\r\n  });\r\n};\r\n\r\nconst indexPage = function () {\r\n  const mainDiv = document.querySelector(\".main\");\r\n\r\n  const textDiv1 = document.createElement(\"div\");\r\n  textDiv1.classList.add(\"come\");\r\n  textDiv1.textContent = \"Come on down for some delicious cuisines!\";\r\n  mainDiv.appendChild(textDiv1);\r\n\r\n  const orderButton = document.createElement(\"button\");\r\n  orderButton.classList.add(\"order-button\");\r\n  orderButton.textContent = \"Order now\";\r\n  mainDiv.appendChild(orderButton);\r\n\r\n  const addressDiv = document.createElement(\"div\");\r\n  addressDiv.classList.add(\"address\");\r\n  addressDiv.textContent = \"1098 Rosewood Avenue, San Francisco CA 22434\";\r\n  mainDiv.appendChild(addressDiv);\r\n\r\n  const timingsDiv = document.createElement(\"div\");\r\n  timingsDiv.classList.add(\"timings\");\r\n  mainDiv.appendChild(timingsDiv);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/firstLoad.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firstLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstLoad */ \"./src/firstLoad.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_firstLoad__WEBPACK_IMPORTED_MODULE_0__.CreateHeader)();\r\n\r\n(0,_firstLoad__WEBPACK_IMPORTED_MODULE_0__.indexPage)();\r\n\r\nconst homeButton = document.querySelector(\".home\");\r\nhomeButton.addEventListener(\"click\", function () {\r\n  (0,_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"index\");\r\n  (0,_firstLoad__WEBPACK_IMPORTED_MODULE_0__.indexPage)();\r\n});\r\n\r\nconst contactButton = document.querySelector(\".contact\");\r\ncontactButton.addEventListener(\"click\", function () {\r\n  (0,_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"contact\");\r\n  (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n});\r\n\r\nconst menuButton = document.querySelector(\".menu\");\r\nmenuButton.addEventListener(\"click\", function () {\r\n  (0,_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"menu\");\r\n  (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = function () {\r\n  const menuList = [];\r\n\r\n  const Dish = function (name, price) {\r\n    const dishPrice = `$${price}`;\r\n    return { name, dishPrice };\r\n  };\r\n  menuList.push(\r\n    Dish(\"burger\", 2.99),\r\n    Dish(\"pizza\", 3.99),\r\n    Dish(\"pancake\", 1.99),\r\n    Dish(\"ice-cream\", 0.99)\r\n  );\r\n  const mainDiv = document.querySelector(\".main\");\r\n\r\n  const heading = document.createElement(\"span\");\r\n  heading.classList.add(\"heading\");\r\n  heading.textContent = \"Menu\";\r\n  mainDiv.appendChild(heading);\r\n\r\n  const containerDiv = document.createElement(\"div\");\r\n  containerDiv.classList.add(\"container\");\r\n  mainDiv.appendChild(containerDiv);\r\n\r\n  menuList.forEach((dish) => {\r\n    const dishCard = document.createElement(\"div\");\r\n    dishCard.classList.add(\"dish\");\r\n    containerDiv.appendChild(dishCard);\r\n\r\n    const dishImage = document.createElement(\"img\");\r\n    dishImage.src = `../src/assets/${dish.name}.jpg`;\r\n    dishImage.alt = `${dish.name}`;\r\n    dishCard.appendChild(dishImage);\r\n\r\n    const innerDiv = document.createElement(\"div\");\r\n    innerDiv.appendChild(document.createTextNode(`${dish.name}`));\r\n    innerDiv.appendChild(document.createElement(\"br\"));\r\n    innerDiv.appendChild(document.createTextNode(`${dish.dishPrice}`));\r\n    dishCard.appendChild(innerDiv);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//remove all children of main div to render new pages and change stylesheet\r\nconst render = function (stylesheet) {\r\n  const mainDiv = document.querySelector(\".main\");\r\n  const style = document.querySelector(\"link\");\r\n\r\n  while (mainDiv.firstChild) {\r\n    mainDiv.removeChild(mainDiv.firstChild);\r\n  }\r\n\r\n  style.href = `../src/${stylesheet}-style.css`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;