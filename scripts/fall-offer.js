(() => {
  const offer = document.querySelector('.fall-offer');
  if (!offer) return;

  offer.querySelector('.fall-offer-close').addEventListener('click', () => offer.close());
  offer.querySelector('.fall-offer-form').addEventListener('submit', event => {
    event.preventDefault();
    offer.querySelector('.fall-offer-status').textContent =
      'Preview complete. No request was sent.';
  });

  const showOffer = () => {
    if (!offer.open) offer.showModal();
  };

  const autoOpen = setTimeout(() => {
    if (location.hash === '#book' || document.activeElement?.closest('#quote-form') ||
        document.querySelector('dialog[open]')) return;
    showOffer();
  }, 2000);

  document.addEventListener('click', event => {
    const trigger = event.target.closest('a[data-fall-offer]');
    if (!trigger || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    clearTimeout(autoOpen);
    showOffer();
  });
})();
