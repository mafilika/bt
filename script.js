const items = document.querySelectorAll('.lightbox-item');
const lightbox = document.getElementById('lightbox');
const img = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-lightbox');

items.forEach(i => {
    i.onclick = () => {
        lightbox.classList.add('visible');
        img.src = i.src;
    }
});

closeBtn.onclick = () => lightbox.classList.remove('visible');

lightbox.onclick = (e) => {
    if(e.target !== img) lightbox.classList.remove('visible');
}
