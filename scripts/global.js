(async () => {
  await Promise.all([...document.querySelectorAll('[data-component]')].map(async slot => {
    const response = await fetch(`components/${slot.dataset.component}.html`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Unable to load ${slot.dataset.component}`);
    slot.innerHTML = await response.text();
  }));
  const toggles = [...document.querySelectorAll('.ap-dropdown-toggle')];
  const closeDropdowns = except => toggles.forEach(button => {
    if (button !== except) button.setAttribute('aria-expanded', 'false');
  });
  toggles.forEach(button => {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      closeDropdowns();
      button.setAttribute('aria-expanded', String(!open));
    });
    button.parentElement.addEventListener('mouseenter', () => {
      if (matchMedia('(hover: hover) and (min-width: 1051px)').matches) {
        closeDropdowns(button); button.setAttribute('aria-expanded', 'true');
      }
    });
    button.parentElement.addEventListener('mouseleave', () => {
      if (!button.parentElement.contains(document.activeElement)) button.setAttribute('aria-expanded', 'false');
    });
    button.parentElement.addEventListener('focusout', event => {
      if (!button.parentElement.contains(event.relatedTarget)) button.setAttribute('aria-expanded', 'false');
    });
  });
  const menu = document.querySelector('.ap-menu-toggle');
  const nav = document.querySelector('.ap-navigation');
  const setMenu = open => {
    menu?.setAttribute('aria-expanded', String(open));
    menu?.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    nav?.classList.toggle('ap-is-open', open);
  };
  menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('click', event => {
    if (!event.target.closest('.ap-dropdown')) closeDropdowns();
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const active = toggles.find(button => button.getAttribute('aria-expanded') === 'true');
    closeDropdowns();
    if (active) active.focus();
    else if (menu?.getAttribute('aria-expanded') === 'true') { setMenu(false); menu.focus(); }
  });
  matchMedia('(min-width: 1051px)').addEventListener('change', event => {
    if (event.matches) { setMenu(false); closeDropdowns(); }
  });
  const dialog = document.querySelector('.ap-dialog');
  if (dialog) {
    document.querySelectorAll('[data-preview]').forEach(control => control.addEventListener('click', event => {
      event.preventDefault();
      const message = document.querySelector('#ap-preview-message');
      if (message) message.textContent = `${control.dataset.preview} is awaiting its destination in this local preview.`;
      dialog.showModal();
    }));
    dialog.querySelector('button')?.addEventListener('click', () => dialog.close());
  }
})();
