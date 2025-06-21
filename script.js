// Typing Effect
const text = "Aspiring Developer | CSE Student | Curious Learner";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}
window.onload = typeEffect;

// Contact Form Alert
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
});
