const requestButton = document.querySelector(".buttons .primary");
const chatButton = document.querySelector(".chat-btn");

requestButton.addEventListener("click", function () {
  document.querySelector("#request").scrollIntoView({
    behavior: "smooth"
  });
});

chatButton.addEventListener("click", function () {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth"
  });
});
