// Menambahkan animasi fade-in untuk teks dan gambar
document.addEventListener("DOMContentLoaded", () => {
    const headerImages = document.querySelectorAll('.header-image');
    const txt = document.querySelector('.txt');

    // Fungsi untuk menambahkan efek fade-in
    const fadeIn = (element, delay) => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        // Set opacity dan transformasi setelah delay
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, delay);
    };

    // Menerapkan efek fade-in pada teks dan semua gambar
    fadeIn(txt, 500); // Delay 500ms untuk teks
    headerImages.forEach((image, index) => {
        fadeIn(image, 600 + index * 100); // Delay 600ms untuk gambar pertama, 700ms untuk kedua, 800ms untuk ketiga
    });
});