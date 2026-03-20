const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

const yearNode = document.querySelector("#year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const filterButtons = document.querySelectorAll(".filter-button");
const filterCards = document.querySelectorAll(".blog-card[data-tags]");

if (filterButtons.length && filterCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      filterCards.forEach((card) => {
        const tags = card.dataset.tags || "";
        const shouldShow = filter === "all" || tags.includes(filter);
        card.classList.toggle("hidden", !shouldShow);
      });
    });
  });
}
