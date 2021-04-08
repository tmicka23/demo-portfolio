const sidenavify = () => {
  const button = document.querySelector(".navbar-burger");
  let sideNavOpened = false;
  button.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    document.body.classList.add("js-has-sidenav");
    if (!sideNavOpened)
      document.body.insertAdjacentHTML("beforeend", '<div id="overlay"></div>');
    sideNavOpened = true;
  });

  document.body.addEventListener("click", function () {
    if (sideNavOpened) {
      document.body.classList.remove("js-has-sidenav");
      document.getElementById("overlay").remove();
      sideNavOpened = false;
    }
  });
};

sidenavify();

const showTab = (id) => {
  const tab = document.querySelector(`#${id}`);
  const tabContent = document.querySelector(`#${id}Content`);
  const prevActive = document.querySelectorAll(".active");

  prevActive.forEach((el) => el.classList.remove("active"));
  tab.classList.add("active");
  tabContent.classList.add("active");
};

const tabs = document.querySelectorAll(".skills-images");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.stopPropagation();
    showTab(tab.id);
  });
});

window.onload = (_) => {
  const firstSkill = document.querySelector(".skills-images");
  showTab(firstSkill.id);
};
