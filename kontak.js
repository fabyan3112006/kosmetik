// kontak.js

// Fungsi untuk menambahkan kelas 'visible' saat elemen muncul di viewport
function revealElements() {
  const textContent = document.querySelector('.text-content');
  const map = document.getElementById('map');
  const contactItems = document.querySelectorAll('.contact-list li');

  const windowHeight = window.innerHeight;
  const textPosition = textContent.getBoundingClientRect().top;
  const mapPosition = map.getBoundingClientRect().top;

  // Menambahkan kelas 'visible' jika elemen berada di viewport
  if (textPosition < windowHeight) {
      textContent.classList.add('visible');
  }

  if (mapPosition < windowHeight) {
      map.classList.add('visible');
  }

  // Menambahkan kelas 'visible' untuk setiap item kontak
  contactItems.forEach((item, index) => {
      const itemPosition = item.getBoundingClientRect().top;
      if (itemPosition < windowHeight) {
          setTimeout(() => {
              item.classList.add('visible');
          }, index * 200); // Delay untuk setiap item
      }
  });
}

// Menjalankan fungsi saat halaman dimuat
window.addEventListener('load', revealElements);

// Menjalankan fungsi saat pengguna menggulir
window.addEventListener('scroll', revealElements);