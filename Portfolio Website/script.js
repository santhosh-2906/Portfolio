
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "#0a0a0a";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});
