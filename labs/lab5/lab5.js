const form = document.querySelector("#form1");
const bord = document.querySelector(".bord");
function replace(event) {
  if (event.target.value === "ver") {
    bord.style.transform = "rotate(90deg)";
  } else {
    bord.style.transform = "rotate(0deg)";
  }
}

form.addEventListener("change", (event) => replace(event));

const anketa = document.querySelector(".form2");
const res = document.querySelector("#res");
const resObj = {};

function fillAnket(event) {
  let { value } = event.target;
  switch (value) {
    case "male":
      resObj.sex = "Мужчина";
      break;
    case "female":
      resObj.sex = "Женщина";
      break;
    case "maried":
      resObj.maried = "Женат";
      break;
    case "nemaried":
      resObj.maried = "Не женат";
      break;
    case value:
      resObj.age = value;
  }
  res.textContent = `Пол: ${resObj.sex} Возраст: ${resObj.age} Семейное положение: ${resObj.maried}`;
}
anketa.addEventListener("change", (event) => fillAnket(event));
