const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const logo = document.querySelector("#logo");

//add event listener to each tab
tabs.forEach((tab) => tab.addEventListener("click", onClickTab));

//handle on click tab
function onClickTab(e) {
  //remove border from all tabs
  tabs.forEach((tab) =>
    tab.children[0].classList.remove("border-b-4", "border-b-softRed")
  );

  //hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  //add border to clicked tab and show it's panel
  e.target.classList.add("border-b-4", "border-b-softRed");
  const selectedPanel = e.target.getAttribute("data-target");
  console.log(selectedPanel);
  document
    .querySelector("#panels")
    .getElementsByClassName(selectedPanel)[0]
    .classList.remove("hidden");
}

//on click hamburger button handler
menuBtn.addEventListener("click", onClickMenuHandler);

function onClickMenuHandler() {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}
