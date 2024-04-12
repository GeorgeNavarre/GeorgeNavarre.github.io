// reveal hidden elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//scrub full videos on scroll
const scrollSection = document.querySelector("section.vid");
const scrollVid = document.querySelector(".scroll-video");

scrollVid.pause();

const vidScroll = () => {
  const distance = window.scrollY - scrollSection.offsetTop;
  const total = scrollSection.clientHeight - window.innerHeight;

  let percentage = distance / total;
  percentage = Math.max(0, percentage);
  percentage = Math.min(percentage, 1);

  if (scrollVid.duration > 0) {
    scrollVid.currentTime = scrollVid.duration * percentage;
  }
};

vidScroll();
window.addEventListener("scroll", vidScroll);

const scrollSection2 = document.querySelector("section.vid2");
const scrollVid2 = document.querySelector(".scroll-video2");

scrollVid2.pause();

const vidScroll2 = () => {
  const distance = window.scrollY - scrollSection2.offsetTop;
  const total = scrollSection2.clientHeight - window.innerHeight;

  let percentage = distance / total;
  percentage = Math.max(0, percentage);
  percentage = Math.min(percentage, 1);

  if (scrollVid2.duration > 0) {
    scrollVid2.currentTime = scrollVid2.duration * percentage;
  }
};

vidScroll2();
window.addEventListener("scroll", vidScroll2);
