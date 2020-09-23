document.addEventListener("DOMContentLoaded", () => {
  // Selectors
  const scrollMe = document.querySelector(".scroll-me");
  const filterItems = document.querySelectorAll(".filter-item");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-card");

  document.addEventListener("scroll", (e) => {
    let viewportHeight = window.innerHeight;
    let scrollPosition = window.pageYOffset + 60;

    let opacityValue = (viewportHeight - scrollPosition) / viewportHeight;
    scrollMe.style.opacity = opacityValue.toFixed(2);
  });

  function resetFilterButton(target) {
    // remove all 'active' class from filter button
    filterItems.forEach((item) => {
      item.classList.remove("active");
    });
    // add 'active' class to clicked button
    target.parentElement.classList.add("active");
  }

  function showProjects(filter) {
    projects.forEach((project) => {
      project.style.display = "block";
      let category = project.dataset.category;
      if (filter === "all") {
        return;
      } else if (!category.includes(filter)) {
        project.style.display = "none";
      }
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let target = e.target;
      let filter = target.dataset.filter;

      resetFilterButton(target);
      showProjects(filter);
    });
  });
});
