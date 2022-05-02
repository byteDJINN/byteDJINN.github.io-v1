var currentPage = 0;
var pages = ["views/home.html", "views/portfolio.html", "views/contact.html"];

function onload() {
  // Add navbar
  generateNavBar();
  
}

// Updates elements on the page
function updateContent() {
  // Update the content div
  fetch(pages[currentPage])
  .then(response => response.text())
  .then(text => document.getElementById("content").innerHTML = text);

  // Update the page title
  let title = pages[currentPage].split("/").pop().slice(0, -5) || "home";
  document.title = "DJ " + title.substring(0, 1).toUpperCase() + title.substring(1);

  // Update the scrollbar -> different colour for each page
  updateScrollBar();
}

function updateScrollBar() {
  let length = 10; // percent length of progress indicator
  let colors = ["#A40011", "#11A400", "#6300d8"];
  let container = document.getElementById("content");
  var scrollPercentage = Math.round(100 * container.scrollTop / (container.scrollHeight - container.clientHeight)); 
  if (isNaN(scrollPercentage)) {
    scrollPercentage = 0;
  }
  
  let left = scrollPercentage - length + "%";
  let right = scrollPercentage + length + "%";
  scrollPercentage = scrollPercentage + "%";
  document.getElementById("scroll-progress-bar").style.width = 100 + "%";
  document.getElementById("scroll-progress-bar").style.background = "linear-gradient(to right, "
    + "#1e2530 " + left + ", "
  + colors[currentPage] + " " + scrollPercentage + ", "
    + "#1e2530 " + right + ")";
} 

// Does necessary javascript for navbar generation
function generateNavBar() {
  navLinks = document.getElementById("nav-links");
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", (event) => {
    currentPage = Array.from(event.target.parentNode.children).indexOf(event.target);
    updateContent();
  }, false));
  updateContent(); // Call once for initial update

  document.getElementById("content").addEventListener("scroll", updateScrollBar, false);
  updateScrollBar(); // Call once for initial update
  
}

