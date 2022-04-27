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

  function sliderDefaultAnimation(e) {
    let slider = document.getElementById("navbar-slider");
    slider.style.width = current.getBoundingClientRect().width.toString() + "px";
    slider.style.height = current.getBoundingClientRect().height.toString() + "px";
    slider.style.left = current.getBoundingClientRect().left.toString() + "px";
    slider.style.top = current.getBoundingClientRect().top.toString() + "px";
    slider.style.backgroundColor = colors[Array.from(current.parentNode.children).indexOf(current)];
  }
  navLinks.addEventListener("mouseout", sliderDefaultAnimation, false);
  window.addEventListener("resize", sliderDefaultAnimation, false);

  sliderDefaultAnimation(); // Call it once to move slider to proper place

  // Add hover animation for each link
  navLinks.querySelectorAll("a").forEach(function(link) { 
    link.addEventListener("mouseover", function(e) {
      let slider = document.getElementById("navbar-slider");
      slider.style.width = e.target.getBoundingClientRect().width.toString() + "px";
      slider.style.height = e.target.getBoundingClientRect().height.toString() + "px";
      slider.style.left = e.target.getBoundingClientRect().left.toString() + "px";
      slider.style.top = e.target.getBoundingClientRect().top.toString() + "px";
      slider.style.backgroundColor = colors[Array.from(e.target.parentNode.children).indexOf(e.target)];
    }, false);
  });
  // Scroll Progress Bar
  document.getElementById("scroll-progress-bar").style.background = colors[Array.from(current.parentNode.children).indexOf(current)];

  document.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    document.getElementById("scroll-progress-bar").style.width = scrollPercentRounded + "%";
  }, false);

  
}