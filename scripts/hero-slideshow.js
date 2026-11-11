(() => {
 const stage = document.querySelector('.hero-photo-stage');
 if (!stage) return;
 const slides = [...stage.querySelectorAll('.hero-slide')];
 const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
 let current = 0;
 let timer;
 let inView = true;
 function updateTimer() {
  clearInterval(timer);
  if (reducedMotion.matches || document.hidden || !inView) return;
  timer = setInterval(() => {
   const next = (current + 1) % slides.length;
   if (!slides[next].complete || !slides[next].naturalWidth) return;
   slides[current].classList.remove('is-current');
   slides[current].setAttribute('aria-hidden', 'true');
   current = next;
   slides[current].classList.add('is-current');
   slides[current].setAttribute('aria-hidden', 'false');
  }, 3000);
 }
 document.addEventListener('visibilitychange', updateTimer);
 reducedMotion.addEventListener('change', updateTimer);
 new IntersectionObserver(entries => {inView = entries[0].isIntersecting; updateTimer();}).observe(stage);
 updateTimer();
})();
