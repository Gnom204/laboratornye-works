import { courseData } from "./data.js";

const form = document.querySelector(".form1");
const template = document.getElementById("courses-card");
const cardsContainer = document.querySelector(".cards");
const result = document.querySelector(".res");
const saveCards = document.querySelector(".save-cards");

let resPrice = 0;
let firstAdd = false;
let coursesArr = [];

function createCourseCard(course) {
  var clone = template.content.cloneNode(true);
  var cloneImg = clone.querySelector(".card-img");
  var clonePrice = clone.querySelector(".price");
  var cloneDes = clone.querySelector(".description");
  var cloneName = clone.querySelector(".prepod");
  var cloneBtn = clone.querySelector(".get-info");

  cloneName.textContent = course.prepod;
  cloneImg.src = course.src;
  cloneImg.alt = course.prepod;
  clonePrice.textContent = course.price + " рубасов";
  cloneDes.textContent = course.description;
  cloneBtn.addEventListener("click", () => getPrice(course));
  cloneBtn.addEventListener("click", (event) => getChooseCourses(event));
  return clone;
}

function chooseCourse(event) {
  const lan = event.target.value;
  const language = courseData[lan];
  language.forEach((course) => {
    const clone = createCourseCard(course);
    coursesArr.push(clone);
    const newArr = coursesArr.filter((item) => item.isEqualNode(clone));
    newArr.forEach((item) => {
      if (event.target.checked) {
        console.log({ item });
        cardsContainer.appendChild(item);
      } else {
        cardsContainer.removeChild(item);
      }
    });
  });
}
let priceArr = [];
function getPrice(course) {
  if (priceArr.includes(course.price)) {
    console.log("sasat");
  } else {
    resPrice += course.price;
  }
  priceArr.push(course.price);
  result.textContent = resPrice || "";
}

const getChooseCourses = (event) => {
  const clickedCard = event.target.parentNode.parentNode.cloneNode(true);
  if (!firstAdd) {
    firstAdd = true;
    saveCards.insertAdjacentElement("beforeend", clickedCard);
  }
  console.log(saveCards.childNodes);
  const ravno = Array.from(saveCards.childNodes).find(
    (elem) => elem.outerHTML === clickedCard.outerHTML
  );
  if (ravno) {
    console.log("da");
  } else {
    saveCards.insertAdjacentElement("beforeend", clickedCard);
  }
};
form.addEventListener("change", (event) => chooseCourse(event));
