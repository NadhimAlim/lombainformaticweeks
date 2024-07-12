function openForm() {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = "block";
  }
}

function openForm1() {
  const overlay1 = document.getElementById("overlay1");
  if (overlay1) {
    overlay1.style.display = "block";
  }
}

// Function untuk menutup form pendaftaran
function closeForm() {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = "none";
  }
}
function closeForm1() {
  const overlay1 = document.getElementById("overlay1");
  if (overlay1) {
    overlay1.style.display = "none";
  }
}

// Menghubungkan fungsi dengan tombol "Daftar Sekarang"
const daftarButton = document.getElementById("daftarButton");
if (daftarButton) {
  daftarButton.addEventListener("click", function () {
    openForm();
  });
}
const daftarBimbelButton = document.getElementById("daftarBimbelButton");
if (daftarBimbelButton) {
  daftarBimbelButton.addEventListener("click", function () {
    openForm1();
  });
}

function sendToWhatsApp() {
  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const email = document.getElementById("email").value;
  const jeniskelamin = document.getElementById("jeniskelamin").value;
  const hari = document.getElementById("hari").value;
  const notelp = document.getElementById("notelp").value;
  const pukul = document.getElementById("pukul").value;
  const matapelajaran = document.getElementById("mata-pelajaran").value;
  const sekolah = document.getElementById("sekolah").value;

  const message = `Selamat datang di EduTech! Saya sangat tertarik untuk bergabung dengan program Les Privat unggulan Anda. Berikut ini adalah Formulir Pendaftaran saya.\n\nNama lengkap: ${nama}\nAlamat: ${alamat}\nEmail: ${email}\nJenis Kelamin: ${jeniskelamin}\nHari Les: ${hari}\nWaktu Les: ${pukul}\nNomor Telp/WA: ${notelp}\nMata Pelajaran: ${matapelajaran}\nAsal Institusi: ${sekolah}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/6287788652910?text=${encodedMessage}`; // Pastikan nomor dalam format internasional tanpa tanda plus
  
  window.open(whatsappUrl, "_blank");
}


// script.js

// Fungsi untuk efek mengetik (typing effect)
function typingEffect() {
  const text = "di EduTech";
  const typingSpeed = 100; // Kecepatan mengetik (ms)
  let index = 0;

  function type() {
    if (index < text.length) {
      document.getElementById("typingEffect").innerHTML += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    }
  }

  type();
}

// Panggil fungsi typingEffect setelah halaman dimuat
document.addEventListener("DOMContentLoaded", typingEffect);
