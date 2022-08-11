const contact = function () {
  const mainDiv = document.querySelector(".main");

  const backGroundDiv = document.createElement("div");
  backGroundDiv.classList.add("bg");
  mainDiv.appendChild(backGroundDiv);

  const detailList = [];

  const Detail = function (className, imageName, text) {
    const imageSrc = `../src/assets/${imageName}-solid.svg`;
    const imageAlt = `${imageName}-icon`;
    return { className, imageSrc, imageAlt, text };
  };

  detailList.push(
    Detail("number", "phone", "123 456 789"),
    Detail("address", "house", "1098 Rosewood Avenue, San Francisco CA 22434")
  );

  detailList.forEach((detail) => {
    const detailDiv = document.createElement("div");
    detailDiv.classList.add("contact-detail");
    backGroundDiv.appendChild(detailDiv);

    const icon = document.createElement("img");
    icon.src = `${detail.imageSrc}`;
    icon.alt = `${detail.imageAlt}`;
    detailDiv.appendChild(icon);

    const detailText = document.createElement("div");
    detailText.textContent = detail.text;
    detailText.classList.add(`${detail.className}`);
    detailDiv.appendChild(detailText);
  });
};

export default contact;
