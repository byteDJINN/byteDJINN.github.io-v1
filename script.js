function onload() {
  // Add navbar
  let navbar = document.createElement("div");
  navbar.id = "navbar";
  document.body.appendChild(navbar);
  $(function () {
    $("#navbar").load("navbar.html", function() {
      generateNavBar();
    });
  });
  // Generate page title based on file name
  let title = window.location.pathname.split("/").pop().slice(0,-5) || "home";
  document.title = title.substring(0,1).toUpperCase() + title.substring(1);
}

function generateNavBar() {
  // Navbar Animation
  let navLinks = document.getElementById("nav-links");
  let colors = ["#A40011", "#11A400", "#6300d8"];
  let pages = ["", "portfolio.html", "contact.html"];
  
  // Add default animation for no hover
  let current = document.getElementById("nav-links").children[pages.indexOf(window.location.pathname.split("/").pop())];

  function sliderMoveTo(element) {
    let slider = document.getElementById("navbar-slider");
    slider.style.width = element.getBoundingClientRect().width.toString() + "px";
    slider.style.height = element.getBoundingClientRect().height.toString() + "px";
    slider.style.left = element.getBoundingClientRect().left.toString() + "px";
    slider.style.top = element.getBoundingClientRect().top.toString() + "px";
    slider.style.backgroundColor = colors[Array.from(element.parentNode.children).indexOf(element)];
  }
  navLinks.addEventListener("mouseout", () => sliderMoveTo(current), false);
  window.addEventListener("resize", () => sliderMoveTo(current), false);

  sliderMoveTo(current); // Call it once to move slider to proper place

  // Add hover animation for each link
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("mouseover", (e) => sliderMoveTo(e.target), false));
  // Scroll Progress Bar
  document.getElementById("scroll-progress-bar").style.background = "linear-gradient(to right, #1e2530, " + colors[Array.from(current.parentNode.children).indexOf(current)] + " 100%)";

  document.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    document.getElementById("scroll-progress-bar").style.width = scrollPercentRounded + "%";
  }, false);
}