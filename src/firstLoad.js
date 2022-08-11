const CreateHeader = function () {
  const buttonList = [];
  const Button = function (className, Text) {
    let buttonText = Text.toUpperCase();
    return { className, buttonText };
  };

  buttonList.push(
    Button("home", "home"),
    Button("menu", "menu"),
    Button("contact", "contact us")
  );

  const contentDiv = document.querySelector(".content");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  contentDiv.appendChild(headerDiv);

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main");
  contentDiv.appendChild(mainDiv);

  const titleDiv = document.createElement("div");
  titleDiv.textContent = "The Awesome Restaurant";
  titleDiv.classList.add("title");
  headerDiv.appendChild(titleDiv);

  const navContainer = document.createElement("nav");
  navContainer.classList.add("nav");
  headerDiv.appendChild(navContainer);

  const navWrap = document.createElement("ul");
  navContainer.appendChild(navWrap);

  buttonList.forEach((button) => {
    const li = document.createElement("li");
    navWrap.appendChild(li);

    const navButton = document.createElement("button");
    navButton.classList.add("nav-item", `${button.className}`);
    navButton.textContent = button.buttonText;

    console.log(navButton.textContent);
    li.appendChild(navButton);
  });
};

const indexPage = function () {
  const mainDiv = document.querySelector(".main");

  const textDiv1 = document.createElement("div");
  textDiv1.classList.add("come");
  textDiv1.textContent = "Come on down for some delicious cuisines!";
  mainDiv.appendChild(textDiv1);

  const orderButton = document.createElement("button");
  orderButton.classList.add("order-button");
  orderButton.textContent = "Order now";
  mainDiv.appendChild(orderButton);

  const addressDiv = document.createElement("div");
  addressDiv.classList.add("address");
  addressDiv.textContent = "1098 Rosewood Avenue, San Francisco CA 22434";
  mainDiv.appendChild(addressDiv);

  const timingsDiv = document.createElement("div");
  timingsDiv.classList.add("timings");
  mainDiv.appendChild(timingsDiv);
};

export { CreateHeader, indexPage };
