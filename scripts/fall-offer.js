(() => {
  const offer = document.querySelector('.fall-offer');
  if (!offer) return;

  const seenKey = 'airpro-fall-offer-seen';
  let seen = false;
  try { seen = sessionStorage.getItem(seenKey) === '1'; } catch {}

  offer.querySelector('.fall-offer-close').addEventListener('click', () => offer.close());
  offer.querySelector('.fall-offer-form').addEventListener('submit', event => {
    event.preventDefault();
    offer.querySelector('.fall-offer-status').textContent =
      'Preview complete. No request was sent.';
  });

  if (seen || location.hash === '#book') return;
  setTimeout(() => {
    if (document.hidden || location.hash === '#book' || document.activeElement?.closest('#quote-form') ||
        document.querySelector('#quote-form :user-valid, dialog[open]')) return;
    offer.showModal();
    try { sessionStorage.setItem(seenKey, '1'); } catch {}
  }, 2000);
})();
