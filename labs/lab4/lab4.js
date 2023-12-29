function chan(obj) {
  var r1 = Number(obj.a1.value);
  var r2 = Number(obj.a2.value);
  if (r1 < 1 || r1 > 3 || r2 < 1 || r2 > 3)
    alert("Неверно заданы номера рисунков!");
  else {
    var z = document.images[r1 - 1].src;
    document.images[r1 - 1].src = document.images[r2 - 1].src;
    document.images[r2 - 1].src = z;
  }
}

function img(n, action) {
  if (action) {
    document.images[n - 1].src = "p" + n + ".gif";
  } else {
    document.images[n - 1].src = "pch" + n + ".gif";
  }
}

const image = document.querySelectorAll(".img");
const block = document.querySelector(".part2");
function replacePos(event) {
  if (event.target.nodeName === "IMG") {
    const url = event.target.src;
    var tail = document.images.length;
    var last = document.images[tail - 1];
    var med = last.src;
    last.src = url;
    event.target.src = med;
  }
}

function resizeImg(event) {
  if (event.target.nodeName === "IMG") {
    let width = event.target.width;
    event.target.style.width = width * 1.5 + "px";
    let height = event.target.height;
    event.target.style.height = height * 1.5 + "px";
    event.target.classList.add("img-arrow");
  }
}

function resizeSmallImg(event) {
  if (event.target.nodeName === "IMG") {
    let width = event.target.width;
    event.target.style.width = width / 1.5 + "px";
    let height = event.target.height;
    event.target.style.height = height / 1.5 + "px";
    event.target.classList.remove("img-arrow");
  }
}

block.addEventListener("click", (event) => replacePos(event));
block.addEventListener("mouseover", (event) => resizeImg(event));
block.addEventListener("mouseout", (event) => resizeSmallImg(event));
