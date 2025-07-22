// --- KONFIGURASI PENTING ---
// Ganti nomor di bawah ini dengan nomor WhatsApp Anda.
// Gunakan format 62, jangan pakai 0 di depan. Contoh: 6281234567890
const phoneNumber = '6281347834164';


// --- FUNGSI UNTUK TOMBOL BELI ---
function buyOnWhatsApp(productName, price) {
    // Membuat pesan default yang akan dikirim
    const message = `Halo Kak, saya tertarik untuk memesan produk ini:

*Produk:* ${productName}
*Harga:* ${price}

Mohon informasinya lebih lanjut. Terima kasih! 😊`;

    // Meng-encode pesan agar sesuai dengan format URL
    const encodedMessage = encodeURIComponent(message);

    // Membuat URL WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Membuka URL WhatsApp di tab baru
    window.open(whatsappURL, '_blank');
}