document.querySelectorAll('.ap-service-page form').forEach(form => {
 form.addEventListener('submit',event => {
  event.preventDefault();
  const note=form.querySelector('.ap-service-form-note');
  note.textContent='Local preview complete. Nothing was sent and no appointment was booked.';
  note.classList.add('ap-service-form-done');
 });
});
document.querySelectorAll('.ap-service-page .ekit-accordion--toggler').forEach(button=>{
 button.classList.add('ap-local-accordion-toggle');
 const panel=button.closest('.elementskit-card')?.querySelector('.elementskit-card-body')?.parentElement;
 if(!panel)return;
 panel.hidden=true;
 button.setAttribute('aria-expanded','false');
 button.addEventListener('click',event=>{event.preventDefault();panel.hidden=!panel.hidden;panel.classList.toggle('show',!panel.hidden);panel.style.display=panel.hidden?'none':'block';button.setAttribute('aria-expanded',String(!panel.hidden));});
});
document.querySelectorAll('.ap-service-page .elementor-tab-title').forEach(button=>{
 button.setAttribute('tabindex','0');button.setAttribute('role','button');
 const panel=button.nextElementSibling;
 if(!panel?.classList.contains('elementor-tab-content'))return;
 panel.hidden=true;
 function toggle(){panel.hidden=!panel.hidden;panel.style.display=panel.hidden?'none':'block';button.setAttribute('aria-expanded',String(!panel.hidden));}
 button.setAttribute('aria-expanded','false');button.addEventListener('click',toggle);button.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}});
});
