const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  const positionwindow = window.scrollY > 0;
  navbar.classList.toggle("scrolling-active", positionwindow);

  const navbarHeight = navbar.offsetHeight;

  if (window.scrollY > navbarHeight) {
    hero.classList.add("blur");
  } else {
    hero.classList.remove("blur");
  }
});

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("active");
  hamburger.classList.toggle("active");
  const icon = hamburger.querySelector("i");
  if (hamburger.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

//JavaScript  transisi pada scroll

// buat variabel
const cards = document.querySelectorAll(".cardles");
const lescard = document.querySelectorAll(".lescard")
const cardsbawah = document.querySelectorAll(".carddaftar");
const cardskatamereka = document.querySelectorAll(".testimonial");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Tambahkan class 'visible' jika masuk viewport
      }
    });
  },
  {
    threshold: 0.3, // transisi berapa detik
  }
);

// Observasi setiap kartu
cards.forEach((card) => {
  observer.observe(card);
});

lescard.forEach((card) => {
  observer.observe(card);
})

cardsbawah.forEach((card) => {
  observer.observe(card);
});

cardskatamereka.forEach((card) => {
  observer.observe(card);
});



// Ambil elemen input pencarian fitur search
const searchInput = document.getElementById("searchInput");
const cards1 = document.querySelectorAll(".cardles");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase(); // Ambil teks pencarian dan ubah ke lowercase

  cards1.forEach((card) => {
    const title = card.querySelector("h3").innerText.toLowerCase(); // Ambil teks judul kartu dan ubah ke lowercase

    if (title.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

function toggleChat() {
  var chatBox = document.getElementById("chatBox");
  chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
}

// Fungsi untuk mengirim pesan
function sendMessage() {
  var input = document.querySelector(".chat-footer input[type='text']");
  var message = input.value.trim();
  if (message !== "") {
    var chatBody = document.querySelector(".chat-body");

    var newMessageSent = document.createElement("div");
    newMessageSent.className = "message sent";
    newMessageSent.innerHTML = "<p>" + message + "</p>";
    chatBody.appendChild(newMessageSent);

    input.value = "";

    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(function () {
      var adminReply = generateAdminReply(message); // Panggil fungsi untuk menghasilkan balasan admin berdasarkan pesan pengguna
      var newMessageReceived = document.createElement("div");
      newMessageReceived.className = "message received";
      newMessageReceived.innerHTML = "<p>" + adminReply + "</p>";
      chatBody.appendChild(newMessageReceived);

      // Gulir ke bawah
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000); // Penundaan dalam milidetik (1 detik)
  }

}
// Fungsi untuk menghasilkan balasan dari "Admin" berdasarkan pesan pengguna
// Fungsi untuk menghasilkan balasan dari "Admin" berdasarkan pesan pengguna
function generateAdminReply(userMessage) {
  var lowerCaseMessage = userMessage.toLowerCase();
  var adminReply = "";

  if (lowerCaseMessage.includes("selamat pagi")) {
    adminReply = "Selamat pagi! Semoga harimu menyenangkan.";
  } else if (lowerCaseMessage.includes("selamat siang")) {
    adminReply = "Selamat siang! Ada yang bisa kami bantu?";
  } else if (lowerCaseMessage.includes("selamat sore")) {
    adminReply = "Selamat sore! Apa yang dapat kami bantu?";
  } else if (lowerCaseMessage.includes("admin punya pacar tidak")) {
    adminReply = "Maaf, saya hanyalah seorang admin web.";
  } else if (
    lowerCaseMessage.includes("Adakah Nomor Telepon") ||
    lowerCaseMessage.includes("Adakah Nomor WhatsApp")
  ) {
    adminReply = "silakan hubungi Nomor WhatsApp Admin Kami 0895-0854-5071.";
  } else {
    // Jika tidak ada permintaan spesifik, balasan acak
    var replies = [
      "Terima kasih atas pesan Anda. Kami akan segera meresponsnya.",
      "Hari ini ada banyak pertanyaan, tapi kami akan berusaha untuk segera merespons Anda.",
      "Mohon maaf, saya sedang mengecek informasinya. Tunggu sebentar ya.",
      "Apakah ada yang bisa saya bantu selain informasi ini?",
      "Jam Kerja Kami Pada Jam 08.00 WIB - 16.00 WIB",
      "Jika ada pertanyaan, silakan hubungi Nomor WhatsApp Admin Kami 0895-0854-5071",
    ];
    adminReply = replies[Math.floor(Math.random() * replies.length)];
  }

  return adminReply;
}

document.addEventListener("DOMContentLoaded", function () {
  function animateCountUp(element, start, end, duration) {
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(
        end,
        Math.floor(start + (end - start) * (progress / duration))
      );
      element.textContent = current.toLocaleString();
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  const stats = [
    { selector: ".stat:nth-child(1) h3", start: 0, end: 50000, duration: 2000 },
    { selector: ".stat:nth-child(2) h3", start: 0, end: 40, duration: 2000 },
    { selector: ".stat:nth-child(3) h3", start: 0, end: 10, duration: 2000 },
  ];

  stats.forEach((stat) => {
    const element = document.querySelector(stat.selector);
    if (element) {
      animateCountUp(element, stat.start, stat.end, stat.duration);
    }
  });
});




function toggleAnswer(element) {
  var answer = element.nextElementSibling;
  if (answer.style.display === "block") {
      answer.style.display = "none";
  } else {
      answer.style.display = "block";
  }
}

