//первая часть лабы
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const inputy1 = document.querySelector(".inputy1");
const inputy2 = document.querySelector(".inputy2");
const inputy3 = document.querySelector(".inputy3");

const button = document.querySelector(".button");
const result = document.querySelector(".result");
const resText = document.querySelector(".res");

let x1, x2, x3, y1, y2, y3;
function getSquare(a, b, c) {
  var res = (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]);
  res = res / 2;
  resText.textContent = `Площадь треугольника равна: ${res}`;
  console.log({ a, b, c });
}

const getData = () => {
  x1 = input1.value;
  y1 = inputy1.value;
  x2 = input2.value;
  y2 = inputy2.value;
  x3 = input3.value;
  y3 = inputy3.value;
};

const onClick = (event) => {
  event.preventDefault();
  console.log({ x1, x2, x3, y1, y2, y3 });
  getSquare([x1, y1], [x2, y2], [x3, y3]);
};

result.addEventListener("change", (event) => getData(event));
result.addEventListener("submit", (event) => onClick(event));
// вторая часть лабы
const startVector = document.querySelector(".start-vector");
const endVector = document.querySelector(".end-vector");
const resVector = document.querySelector(".vector-res");

endVector.addEventListener(
  "select",
  () =>
    (resVector.textContent = `Расстояние от точки до начала координат = ${Math.sqrt(
      startVector.value ** 2 + endVector.value ** 2
    )}`)
);
//третья часть лабы
const first = document.querySelector(".first");
const second = document.querySelector(".second");

const firstVal = document.querySelector(".first-val");
const secondVal = document.querySelector(".second-val");

first.addEventListener("input", () => (firstVal.textContent = first.value));
second.addEventListener("input", () => (secondVal.textContent = second.value));

const replaceVal = () => {
  firstVal.textContent = second.value;
  secondVal.textContent = first.value;
};

second.addEventListener("blur", replaceVal);
