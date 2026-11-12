document.querySelectorAll('.location-mock-track').forEach(track => {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const direction = track.dataset.autoplayDirection === '-1' ? -1 : 1;
  let visible = false;
  let touched = false;
  let timer;

  function move(direction) {
    const cards = track.children;
    const stride = cards[1].offsetLeft - cards[0].offsetLeft;
    const end = track.scrollWidth - track.clientWidth;
    const atEnd = direction > 0 ? track.scrollLeft >= end - 2 : track.scrollLeft <= 2;
    const left = atEnd ? (direction > 0 ? 0 : end) : track.scrollLeft + direction * stride;
    track.scrollTo({ left, behavior: motion.matches ? 'instant' : 'smooth' });
  }

  function schedule() {
    clearInterval(timer);
    if (visible && !document.hidden && !motion.matches && !touched &&
        !track.matches(':hover, :focus-within')) {
      timer = setInterval(() => move(direction), 3000);
    }
  }

  track.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    move(event.key === 'ArrowRight' ? 1 : -1);
  });
  track.addEventListener('pointerdown', () => { touched = true; schedule(); });
  for (const type of ['pointerup', 'pointercancel']) {
    window.addEventListener(type, () => { touched = false; schedule(); });
  }
  for (const type of ['pointerenter', 'pointerleave', 'focusin']) track.addEventListener(type, schedule);
  track.addEventListener('focusout', () => queueMicrotask(schedule));
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', schedule);
  if (direction < 0 && !motion.matches) {
    requestAnimationFrame(() => track.scrollTo({ left: track.scrollWidth, behavior: 'instant' }));
  }
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; schedule(); }).observe(track);
});
