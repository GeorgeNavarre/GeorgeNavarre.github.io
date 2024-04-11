document.addEventListener("scroll", () => {
  const header = document.querySelector("nav");

  if (window.scrollY > 100) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

//include navbar and footer on all pages
const nav = document.querySelector(".navbar");
fetch("/header.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
    //enable page indication
    const navLinkEls = document.querySelectorAll(".nav_link");
    const windowPathname = window.location.pathname;
    navLinkEls.forEach((navLinkEl) => {
      if (navLinkEl.href.includes(windowPathname)) {
        navLinkEl.classList.add("active");
      }
    });
  });

//include footer and bottom image on all pages
const foot = document.querySelector(".footer");
fetch("/footer.html")
  .then((res) => res.text())
  .then((data) => {
    foot.innerHTML = data;
  });
