function sendTowWa(productName, productPrice) {
  // Ubah nomor telepon di bawah ini dengan nomor WhatsApp Anda
  const phoneNumber = '6283896327091'; // Ganti dengan nomor WhatsApp Anda
  const message = `Halo, saya ingin memesan ${productName} seharga ${productPrice}.`;
  
  // Encode message untuk URL
  const encodedMessage = encodeURIComponent(message);
  
  // Buat URL WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Buka URL di tab baru
  window.open(whatsappUrl, '_blank');
}
// Menambahkan event listener untuk menunggu hingga halaman dimuat
window.addEventListener('load', () => {
  const productCards = document.querySelectorAll('.product-card');
  
  // Menambahkan kelas 'visible' untuk memicu animasi
  productCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, index * 200); // Menambahkan delay untuk setiap kartu produk
  });
});

