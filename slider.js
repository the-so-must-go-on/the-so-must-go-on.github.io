let current = 0;
const slides = document.querySelectorAll(".video-slide");

function showSlide(index) {
  slides.forEach(s => {
    s.classList.remove("active");
    s.pause();
  });

  slides[index].classList.add("active");
  slides[index].play();
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

function toggleMute() {
  slides.forEach(video => {
    video.muted = !video.muted;
  });
}