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

section = document.querySelector(".phone");
vid = document.querySelector(".phone-vid");

vid.pause();

const scroll = () => {
  const total = window.innerHeight;
  const location = section.getBoundingClientRect();
  const start = location.y + window.scrollY - window.innerHeight;

  const distance = window.scrollY - start;

  let percentage = distance / total;

  percentage = Math.max(0, percentage);
  percentage = Math.min(percentage, 1);
  console.log("Distance " + distance);
  console.log("Total " + total);
  console.log(percentage + "%");

  if (vid.duration > 0) {
    vid.currentTime = vid.duration * percentage;
  }
};

scroll();
window.addEventListener("scroll", scroll);

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
