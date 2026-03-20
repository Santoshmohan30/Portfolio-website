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

const blogContainers = document.querySelectorAll("[data-blog-list]");

function createBlogCard(post, basePath = "", headingTag = "h3", linkLabel = "Read more") {
  const article = document.createElement("article");
  article.className = "blog-card reveal visible";
  article.dataset.tags = post.tags.join(" ");

  const date = document.createElement("p");
  date.className = "blog-date";
  date.textContent = post.date;
  article.appendChild(date);

  const title = document.createElement(headingTag);
  title.textContent = post.title;
  article.appendChild(title);

  const tagRow = document.createElement("div");
  tagRow.className = "tag-row";
  post.displayTags.forEach((tag) => {
    const tagNode = document.createElement("span");
    tagNode.textContent = tag;
    tagRow.appendChild(tagNode);
  });
  article.appendChild(tagRow);

  const preview = document.createElement("p");
  preview.textContent = post.preview;
  article.appendChild(preview);

  const link = document.createElement("a");
  link.href = `${basePath}${post.href}`;
  link.textContent = linkLabel;
  article.appendChild(link);

  return article;
}

if (blogContainers.length && typeof blogPosts !== "undefined") {
  blogContainers.forEach((container) => {
    const basePath = container.dataset.basepath || "";
    const headingTag = container.dataset.heading || "h3";
    const linkLabel = container.dataset.linkLabel || "Read more";
    const limit = Number(container.dataset.limit || blogPosts.length);

    blogPosts.slice(0, limit).forEach((post) => {
      container.appendChild(createBlogCard(post, basePath, headingTag, linkLabel));
    });
  });
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
