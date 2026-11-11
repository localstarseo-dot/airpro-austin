(() => {
  const track = document.querySelector('.review-slider');
  if (!track) return;

  const cards = [...track.querySelectorAll('.review-card')];
  if (cards.length < 2) return;

  const pauseButton = track.id ? document.querySelector(`[data-review-pause][aria-controls="${track.id}"]`) : null;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let inView = false;
  let hovered = false;
  let paused = false;
  let timer;

  function move(direction, wrap = false) {
    const stride = cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
    const end = track.scrollWidth - track.clientWidth;
    if (end < 1) return;
    if (wrap && track.scrollLeft <= 3) {
      track.scrollTo({ left: end, behavior: 'instant' });
      requestAnimationFrame(() => move(direction));
      return;
    }
    track.scrollTo({
      left: track.scrollLeft + direction * stride,
      behavior: motion.matches ? 'instant' : 'smooth',
    });
  }

  function schedule() {
    clearInterval(timer);
    if (inView && !document.hidden && !hovered && !paused && !track.matches(':focus-within') && !motion.matches) {
      timer = setInterval(() => move(-1, true), 3000);
    }
  }

  function setPaused(value) {
    if (!pauseButton) return;
    paused = value;
    pauseButton.textContent = paused ? 'Play' : 'Pause';
    pauseButton.setAttribute('aria-label', paused ? 'Play reviews' : 'Pause reviews');
    schedule();
  }

  if (pauseButton) {
    pauseButton.hidden = motion.matches;
    pauseButton.addEventListener('click', () => setPaused(!paused));
    track.addEventListener('pointerdown', () => setPaused(true));
  }

  track.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') { hovered = true; schedule(); }
  });
  track.addEventListener('pointerleave', () => { hovered = false; schedule(); });
  track.addEventListener('focus', schedule);
  track.addEventListener('blur', schedule);
  track.addEventListener('keydown', event => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    setPaused(true);
    move(event.key === 'ArrowRight' ? 1 : -1);
  });
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', () => {
    if (pauseButton) pauseButton.hidden = motion.matches;
    schedule();
  });
  if (!motion.matches) track.scrollTo({ left: track.scrollWidth, behavior: 'instant' });
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    schedule();
  }).observe(track);
})();
