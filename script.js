'use strict';
const slider = document.querySelector('#comparison');
slider.addEventListener('input', () => {
  slider.closest('.compare').style.setProperty('--split', slider.value + '%');
  slider.setAttribute('aria-valuetext', `模型 ${slider.value}%，渲染 ${100 - slider.value}%`);
});
const dialog = document.querySelector('#lightbox');
const fullImage = dialog.querySelector('img');
let previousFocus;
document.querySelectorAll('[data-full]').forEach(button => {
  button.addEventListener('click', () => {
    previousFocus = button;
    fullImage.src = button.dataset.full;
    fullImage.alt = button.querySelector('img').alt;
    dialog.querySelector('p').textContent = fullImage.alt;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});
dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  previousFocus?.focus({preventScroll:true});
});
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
  });
});
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('zhangluyun0419@qq.com');
    status.textContent = '邮箱已复制。';
  } catch {
    status.textContent = '请长按或选中上方邮箱地址复制。';
  }
});
