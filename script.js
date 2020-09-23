const scrollMe = document.querySelector(".scroll-me");

document.addEventListener("scroll", (e) => {
  let viewportHeight = window.innerHeight;
  let scrollPosition = window.pageYOffset + 60;

  let opacityValue = (viewportHeight - scrollPosition) / viewportHeight;
  console.info("opacity val: " + opacityValue.toFixed(2));
  scrollMe.style.opacity = opacityValue.toFixed(2);
});
