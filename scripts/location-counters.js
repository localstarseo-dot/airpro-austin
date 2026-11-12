(() => {
  const counters = document.querySelectorAll('[data-count-to]');
  if (!counters.length || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const format = new Intl.NumberFormat('en-US');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      const target = Number(entry.target.dataset.countTo);
      const started = performance.now();
      function tick(now) {
        const progress = Math.min((now - started) / 1600, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        entry.target.textContent = format.format(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
  }, { threshold: 0.5 });
  counters.forEach(counter => observer.observe(counter));
})();
