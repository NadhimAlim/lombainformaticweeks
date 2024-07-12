function checkQuiz() {
  let correctAnswers = 0;

  // Soal 1
  const soal1 = document.querySelector('input[name="soal1"]:checked');
  if (soal1 && soal1.value === "Jakarta") {
    correctAnswers++;
  }

  // Soal 2
  const soal2 = document.querySelector('input[name="soal2"]:checked');
  if (soal2 && soal2.value === "Sukarno") {
    correctAnswers++;
  }

  // Display result
  const result = document.getElementById("quizResult");
  result.textContent = `Kamu menjawab ${correctAnswers} dari 2 soal dengan benar!`;
}

// Event listener for form submission
document.querySelector(".form-daftar").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Terima kasih telah mendaftar!");
});
