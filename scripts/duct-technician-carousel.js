const carousel = document.querySelector('[data-technician-carousel]');

if (carousel) {
  const track = carousel.querySelector('.duct-technician-track');
  const photos = [...track.querySelectorAll('img')];
  const dots = carousel.querySelector('.duct-technician-dots');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let inView = false;
  let hovering = false;
  let interacting = false;
  let timer;

  const slideWidth = () => photos[0].getBoundingClientRect().width || 1;
  const lastIndex = () => Math.round((track.scrollWidth - track.clientWidth) / slideWidth());
  const currentIndex = () => Math.max(0, Math.min(lastIndex(), Math.round(track.scrollLeft / slideWidth())));

  function showSlide(index, instant = false) {
    track.scrollTo({
      left: Math.max(0, Math.min(lastIndex(), index)) * slideWidth(),
      behavior: instant || reducedMotion.matches ? 'instant' : 'smooth',
    });
  }

  const buttons = photos.map((_, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'duct-technician-dot';
    button.setAttribute('aria-label', `Show technician photo ${index + 1}`);
    button.setAttribute('aria-controls', track.id);
    button.addEventListener('click', () => showSlide(index));
    return button;
  });
  dots.append(...buttons);
  dots.hidden = false;

  function updateControls() {
    const selected = currentIndex();
    buttons.forEach((button, index) => {
      button.hidden = index > lastIndex();
      button.setAttribute('aria-current', String(index === selected));
    });
  }

  function schedule() {
    clearInterval(timer);
    if (!inView || document.hidden || hovering || interacting ||
        carousel.matches(':focus-within') || reducedMotion.matches) return;

    timer = setInterval(() => {
      const index = currentIndex();
      if (index === lastIndex()) showSlide(0, true);
      else showSlide(index + 1);
    }, 3000);
  }

  track.addEventListener('scroll', updateControls, { passive: true });
  track.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    showSlide(currentIndex() + (event.key === 'ArrowRight' ? 1 : -1));
  });
  track.addEventListener('pointerdown', () => { interacting = true; schedule(); });
  for (const type of ['pointerup', 'pointercancel']) {
    window.addEventListener(type, () => {
      if (!interacting) return;
      interacting = false;
      schedule();
    });
  }
  carousel.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') { hovering = true; schedule(); }
  });
  carousel.addEventListener('pointerleave', () => { hovering = false; schedule(); });
  carousel.addEventListener('focusin', schedule);
  carousel.addEventListener('focusout', () => queueMicrotask(schedule));
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', () => { updateControls(); schedule(); });
  new ResizeObserver(updateControls).observe(track);
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    schedule();
  }).observe(carousel);
  updateControls();
}
