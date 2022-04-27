var currentPage = 0;

function onload() {
  // Add navbar
  generateNavBar();
  // Generate page title based on file name
  let title = window.location.pathname.split("/").pop().slice(0,-5) || "home";
  document.title = title.substring(0,1).toUpperCase() + title.substring(1);
}

// Updates elements on the page
function update() {
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

  // update() functionality
  updateScrollBar();
}

// Does necessary javascript for navbar generation
function generateNavBar() {
  navLinks = document.getElementById("nav-links");
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", (event) => {
    currentPage = Array.from(event.target.parentNode.children).indexOf(event.target);
    update();
  }, false));

  document.addEventListener("scroll", update, false);

  update(); // Call once for initial update
}

