const menuToggle = document.querySelector(".menu__button");
const drawer = document.querySelector(".drawer");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  if (menu.style.display || menu.style.display !== "none") {
    drawer.style.display =
      !drawer.style.display || drawer.style.display == "none"
        ? "block"
        : "none";
  } else {
  }
});
