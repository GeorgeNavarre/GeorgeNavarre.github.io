//scrub small videos on scroll
section = document.querySelector(".vid-div");
vid = document.querySelector(".small-vid");

vid.pause();

const scroll = () => {
  const total = window.innerHeight;
  const location = section.getBoundingClientRect();
  const start = location.y + window.scrollY - window.innerHeight;

  const distance = window.scrollY - start;

  let percentage = distance / total;

  percentage = Math.max(0, percentage);
  percentage = Math.min(percentage, 1);

  if (vid.duration > 0) {
    vid.currentTime = vid.duration * percentage;
  }
};

scroll();
window.addEventListener("scroll", scroll);
