var nav = document.querySelector("nav");
let urlOfLab = [
  {
    address: "/lab1/lab1",
  },
  {
    address: "/lab2/lab2",
  },
  {
    address: "/lab3/lab3",
  },
  {
    address: "/lab4/lab4",
  },
];
function pasteUrl(arr) {
  arr.forEach((url) => {
    const a = document.createElement("a");
    a.href = "./labs" + url.address + ".html";
    a.classList.add("header-link");
    a.textContent = url.address.split("").splice(1, 4).join("");
    nav.appendChild(a);
  });
}
pasteUrl(urlOfLab);
