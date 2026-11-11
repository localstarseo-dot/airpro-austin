for (const slider of document.querySelectorAll('.duct-comparison-range')) {
  const comparison = slider.closest('.duct-comparison');
  const update = () => {
    comparison.style.setProperty('--comparison-position', `${slider.value}%`);
    slider.setAttribute('aria-valuetext', `${slider.value}% before, ${100 - Number(slider.value)}% after`);
  };

  slider.addEventListener('input', update);
  update();
  slider.disabled = false;
}
