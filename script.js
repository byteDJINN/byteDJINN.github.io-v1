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
  console.log(document.getElementById("nav-links"));
  let navLinks = document.getElementById("nav-links").querySelectorAll("a");
  console.log(navLinks);
  let colors = ["#1abc9c", "#e74c3c", "#3498db", "#9b59b6", "#e67e22"]
  navLinks.forEach(function(link) {
    link.addEventListener("mouseover", function(e) {
      let slider = document.getElementById("navbar-slider");
      slider.style.width = e.target.getBoundingClientRect().width.toString() + "px";
      slider.style.height = e.target.getBoundingClientRect().height.toString() + "px";
      slider.style.left = e.target.getBoundingClientRect().left.toString() + "px";
      slider.style.top = e.target.getBoundingClientRect().top.toString() + "px";
      slider.style.backgroundColor = colors[Array.from(e.target.parentNode.children).indexOf(e.target)];
      console.log(e.target.getBoundingClientRect().left);
      console.log(slider.style.width);
    });
  });

  let initial = document.getElementById("nav-links").firstElementChild;
  let slider = document.getElementById("navbar-slider");
  slider.style.width = initial.getBoundingClientRect().width.toString() + "px";
  slider.style.height = initial.getBoundingClientRect().height.toString() + "px";
  slider.style.left = initial.getBoundingClientRect().left.toString() + "px";
  slider.style.top = initial.getBoundingClientRect().top.toString() + "px";
}