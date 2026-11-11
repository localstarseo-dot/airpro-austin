// Page-specific inquiry selection, preserving the shared three-step demo form.
document.addEventListener('click', event => {
 const link = event.target.closest('a[href="#book"]');
 if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
 const form = document.querySelector('#quote-form');
 form.querySelector('select[name="service"]').value = 'gutter';
 form.querySelector('select[name="gutter_inquiry"]').value = link.dataset.gutterInquiry || 'not-sure';
});
