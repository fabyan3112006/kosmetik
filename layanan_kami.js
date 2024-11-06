document.addEventListener("DOMContentLoaded", function() {
    const layananItems = document.querySelectorAll('.layanan-item');
    layananItems.forEach((item, index) => {
        // Menambahkan delay untuk setiap item
        item.style.animationDelay = `${index * 0.2}s`;
        item.style.opacity = 1; // Mengubah opacity agar item terlihat
    });
});
