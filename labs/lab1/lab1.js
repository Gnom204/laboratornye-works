var input = document.querySelector(".input");
var input2 = document.querySelector(".input2");
var input3 = document.querySelector(".input3");

var text2 = document.querySelector(".text2");
var text = document.querySelector(".text");

input.addEventListener("input", function () {
  var r = document.querySelector(".input").value;
  text.textContent = `Площадь круга равна: ${Math.round(Math.PI * r ** 2)}`;
});
input3.addEventListener("input", function () {
  if (input2.value && input3.value) {
    var katet1 = input2.value;
    var katet2 = input3.value;
    var hypotenusa = Math.sqrt(katet1 ** 2 + katet2 ** 2);
    text2.textContent = `Гипотенуза равна: ${hypotenusa}`;
  }
});
