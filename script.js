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
  let colors = ["#A40011", "#11A400", "#6300d8"];
  let winHeight = $(window).height();
  let docHeight = $(document).height();
  let scrollTop = $(window).scrollTop(); //NaN or zero at top
  let trackLength = docHeight - winHeight;
  let pctScrolled = Math.round(scrollTop / trackLength * 100);
  document.getElementById("scroll-progress-bar").style.width = pctScrolled + "%";
  document.getElementById("scroll-progress-bar").style.background = "linear-gradient(to right, #1e2530, " + colors[currentPage] + " 100%)";
}

// Does necessary javascript for navbar generation
function generateNavBar() {
  navLinks = document.getElementById("nav-links");
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", (event) => {
    currentPage = Array.from(event.target.parentNode.children).indexOf(event.target);
    updateContent();
  }, false));
  updateContent(); // Call once for initial update

  document.addEventListener("scroll", updateScrollBar, false);
  updateScrollBar(); // Call once for initial update
  
}

