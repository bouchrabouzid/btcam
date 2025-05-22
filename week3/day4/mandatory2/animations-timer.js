// Part I
setTimeout(function () {
  alert("Hello World");
}, 2000);

// Part II
setTimeout(function () {
  const para = document.createElement("p");
  para.textContent = "Hello World";
  document.getElementById("container").appendChild(para);
}, 2000);

// Part III
let count = 0;
const container = document.getElementById("container");
const intervalId = setInterval(function () {
  if (count >= 5) {
    clearInterval(intervalId);
    return;
  }
  const para = document.createElement("p");
  para.textContent = "Hello World";
  container.appendChild(para);
  count++;
}, 2000);

document.getElementById("clear").addEventListener("click", function () {
  clearInterval(intervalId);
});
