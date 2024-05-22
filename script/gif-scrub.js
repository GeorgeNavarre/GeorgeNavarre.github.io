//scrub small videos on scroll
section = document.querySelector(".vid-div");
vid = document.querySelector(".small-vid");

vid.pause();

const scroll = () => {
  const total = window.innerHeight;
  const location = section.getBoundingClientRect();
  const start = location.y + window.scrollY - window.innerHeight;

  const distance = window.scrollY - start;

  let percentage = (distance * 1.25) / total;

  percentage = Math.max(0, percentage);
  percentage = Math.min(percentage, 1);

  if (vid.duration > 0) {
    vid.currentTime = vid.duration * percentage;
  }
};

scroll();
window.addEventListener("scroll", scroll);

//overlay code
function overlayShow(textDiv, overlayDiv) {
  const description = document.querySelector(textDiv);
  var descriptionChildren = description.childNodes;
  const overlay = document.querySelector(overlayDiv);
  var overlayChildren = overlay.childNodes;

  document.addEventListener("scroll", function () {
    for (var i = 0; i < descriptionChildren.length; i++) {
      if (i % 2 != 0) {
        const clientHeight = document.documentElement.clientHeight;
        const descriptionY =
          descriptionChildren[i].getBoundingClientRect().y - clientHeight * 0.1;
        const descriptionHeight =
          descriptionChildren[i].getBoundingClientRect().height + clientHeight;

        if (i % 2 != 0 && clientHeight > descriptionY && descriptionY > 0) {
          overlayChildren[i].classList.remove("hidden");
          overlayChildren[i].classList.add("show");
        } else {
          overlayChildren[i].classList.remove("show");
          overlayChildren[i].classList.add("hidden");
        }
      }
    }
  });
}

//overlay code
function overlayShowCumulate(textDiv, overlayDiv) {
  const description = document.querySelector(textDiv);
  var descriptionChildren = description.childNodes;
  const overlay = document.querySelector(overlayDiv);
  var overlayChildren = overlay.childNodes;

  document.addEventListener("scroll", function () {
    for (var i = 0; i < descriptionChildren.length; i++) {
      if (i % 2 != 0) {
        const clientHeight = document.documentElement.clientHeight;
        const descriptionY =
          descriptionChildren[i].getBoundingClientRect().y - clientHeight * 0.1;
        const descriptionHeight =
          description.getBoundingClientRect().height + clientHeight;

        if (i % 2 != 0 && clientHeight > descriptionY) {
          overlayChildren[i].classList.remove("hidden");
          overlayChildren[i].classList.add("show");
        } else {
          overlayChildren[i].classList.remove("show");
          overlayChildren[i].classList.add("hidden");
        }
      }
    }
  });
}
