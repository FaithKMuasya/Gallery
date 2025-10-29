const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const closeBtn = document.getElementById('closeBtn');

let currentImage = '';

function openModal(imgSrc, title) {
  modal.style.display = 'flex';
  modalImg.src = imgSrc;
  modalTitle.textContent = title;
  currentImage = imgSrc;
}

closeBtn.addEventListener('click', () => {
  // Redirects to a single description page, passing data via query params
  window.location.href = `description.html?image=${encodeURIComponent(currentImage)}&title=${encodeURIComponent(modalTitle.textContent)}`;
});

modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
