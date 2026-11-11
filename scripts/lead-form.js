const quote = document.querySelector('#quote-form');
if (quote) {
 let step = 0;
 const panels = [...quote.querySelectorAll('fieldset')];
 const next = quote.querySelector('.hp-next');
 const back = quote.querySelector('.hp-back');
 function render() {
  panels.forEach((p,i) => {p.hidden = i !== step;});
  quote.querySelectorAll('.hp-progress li').forEach((p,i) => {p.classList.toggle('active',i===step); if(i===step)p.setAttribute('aria-current','step');else p.removeAttribute('aria-current');});
  back.hidden = step === 0;
  next.textContent = step === 2 ? 'PREVIEW APPOINTMENT REQUEST' : 'NEXT →';
 }
 next.addEventListener('click', () => {
  for (const field of panels[step].querySelectorAll('input,select,textarea')) {if(!field.reportValidity())return;}
  if(step<2) {step++;render();panels[step].querySelector('input,select').focus();}
  else quote.querySelector('.hp-form-status').textContent = 'Preview complete. Nothing was sent and no appointment was booked.';
 });
 back.addEventListener('click',()=>{step=Math.max(0,step-1);render();});
 quote.addEventListener('submit',event=>event.preventDefault());
 render();
}
const contact = document.querySelector('#contact-form');
contact?.addEventListener('submit',event=>{event.preventDefault();contact.querySelector('.hp-form-status').textContent='Preview only. Nothing was sent. Please use the phone link to contact AirPro Austin.';});
