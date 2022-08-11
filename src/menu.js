const menu = function () {
  const menuList = [];

  const Dish = function (name, price) {
    const dishPrice = `$${price}`;
    return { name, dishPrice };
  };
  menuList.push(
    Dish("burger", 2.99),
    Dish("pizza", 3.99),
    Dish("pancake", 1.99),
    Dish("ice-cream", 0.99)
  );
  const mainDiv = document.querySelector(".main");

  const heading = document.createElement("span");
  heading.classList.add("heading");
  heading.textContent = "Menu";
  mainDiv.appendChild(heading);

  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  mainDiv.appendChild(containerDiv);

  menuList.forEach((dish) => {
    const dishCard = document.createElement("div");
    dishCard.classList.add("dish");
    containerDiv.appendChild(dishCard);

    const dishImage = document.createElement("img");
    dishImage.src = `../src/assets/${dish.name}.jpg`;
    dishImage.alt = `${dish.name}`;
    dishCard.appendChild(dishImage);

    const innerDiv = document.createElement("div");
    innerDiv.appendChild(document.createTextNode(`${dish.name}`));
    innerDiv.appendChild(document.createElement("br"));
    innerDiv.appendChild(document.createTextNode(`${dish.dishPrice}`));
    dishCard.appendChild(innerDiv);
  });
};

export default menu;
