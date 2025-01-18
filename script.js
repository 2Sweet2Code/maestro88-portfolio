function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".navigator-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// FAQ Toggle Script
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
question.addEventListener('click', () => {
  const answer = question.nextElementSibling;
  const isAnswerVisible = answer.style.display === 'block';

  // Hide all answers
  document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.display = 'none';
  });

  // Toggle the clicked answer
  answer.style.display = isAnswerVisible ? 'none' : 'block';
  
  // Remove focus after clicking
  question.blur(); // This removes the focus effect
});
});

// Show "Back to Top" button when scrolling
window.onscroll = function() {
const backToTopBtn = document.getElementById("back-to-top");

// Show the button when scroll is greater than 200px
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  backToTopBtn.style.display = "block";
} else {
  backToTopBtn.style.display = "none";
}
};

// Scroll to top when button is clicked
document.getElementById("back-to-top").addEventListener("click", function() {
window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onload = function() {
// Check if the URL contains a hash (this means a link was clicked)
if(window.location.hash) {
  const target = document.querySelector(window.location.hash); // Get the target element by hash
  
  // If the target exists, focus on the FAQ question element
  if(target) {
    target.querySelector('.faq-question').focus();
  }
}
}
