function onload() {
  // Add navbar
  $(function () {
    $("#navbar").load("navbar.html", function() {
      generateNavBar();
    });
  });
  // Add event listeners
  
}


function generateNavBar() {
  // Navbar Animation
  let navLinks = document.getElementById("nav-links");
  let colors = ["#1abc9c", "#e74c3c", "#3498db", "#9b59b6", "#e67e22"];
  let pages = ["", "about.html", "portfolio.html", "contact.html"];
  // Add default animation for no hover
  navLinks.addEventListener("mouseout", function(e) {
    console.log("OUT!");
    let initial = document.getElementById("nav-links").children[pages.indexOf(window.location.pathname.split("/").pop())];
    let slider = document.getElementById("navbar-slider");
    slider.style.width = initial.getBoundingClientRect().width.toString() + "px";
    slider.style.height = initial.getBoundingClientRect().height.toString() + "px";
    slider.style.left = initial.getBoundingClientRect().left.toString() + "px";
    slider.style.top = initial.getBoundingClientRect().top.toString() + "px";
    slider.style.backgroundColor = colors[Array.from(initial.parentNode.children).indexOf(initial)];
  });

  // Add hover animation for each link
  navLinks.querySelectorAll("a").forEach(function(link) { // TODO: Add animation for mouse out for it to go back to whatever page is currently on
    link.addEventListener("mouseover", function(e) {
      let slider = document.getElementById("navbar-slider");
      slider.style.width = e.target.getBoundingClientRect().width.toString() + "px";
      slider.style.height = e.target.getBoundingClientRect().height.toString() + "px";
      slider.style.left = e.target.getBoundingClientRect().left.toString() + "px";
      slider.style.top = e.target.getBoundingClientRect().top.toString() + "px";
      slider.style.backgroundColor = colors[Array.from(e.target.parentNode.children).indexOf(e.target)];
    });
  });

  let initial = document.getElementById("nav-links").firstElementChild;
  let slider = document.getElementById("navbar-slider");
  slider.style.width = initial.getBoundingClientRect().width.toString() + "px";
  slider.style.height = initial.getBoundingClientRect().height.toString() + "px";
  slider.style.left = initial.getBoundingClientRect().left.toString() + "px";
  slider.style.top = initial.getBoundingClientRect().top.toString() + "px";
}