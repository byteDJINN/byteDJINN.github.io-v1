function showContent(id) {
  // Hide all content sections
  var contentSections = document.getElementsByClassName('content')[0].children;
  for (var i = 0; i < contentSections.length; i++) {
    contentSections[i].classList.add('hidden');
  }

  // Show the selected content section
  document.getElementById(id).classList.remove('hidden');

  var interests = document.getElementById('interests');
  var interestSections = interests.children;

  // Show the links (unordered list)
  var links = interests.querySelector('ul');
  links.classList.remove('hidden');

  // Hide all interest sections except the selected interest
  for (var i = 1; i < interestSections.length; i++) {
    if (interestSections[i].id === id) {
      interestSections[i].classList.remove('hidden');
    } else {
      interestSections[i].classList.add('hidden');
    }
  }
}

function showInterest(id) {
  var interests = document.getElementById('interests');
  var interestSections = interests.children;

  // Hide all interest sections
  for (var i = 1; i < interestSections.length; i++) {
    interestSections[i].classList.add('hidden');
  }

  // Hide the links (unordered list)
  var links = interests.querySelector('ul');
  links.classList.add('hidden');

  // Show the selected interest section
  var selectedInterest = document.getElementById(id);
  selectedInterest.classList.remove('hidden');
}