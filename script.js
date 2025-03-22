const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme");
});
// Mapping simbol estetis
const symbolMap = {
  "*": "×",
  "/": "÷",
  "%": "％",
};

// Fungsi untuk menambahkan nilai ke layar
function appendToDisplay(value) {
  const display = document.getElementById("display");
  let displayValue = value;

  // Jika tombol yang diklik memiliki data-operation, gunakan simbol estetis
  if (event.target.hasAttribute("data-operation")) {
    const operation = event.target.getAttribute("data-operation");
    displayValue = symbolMap[operation] || operation;
  }

  display.value += displayValue; // Tambahkan nilai ke layar
}

// Fungsi untuk menghapus semua (clear)
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

// Fungsi untuk menghapus satu karakter terakhir (delete)
function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1); // Hapus karakter terakhir
}

// Fungsi untuk menghitung hasil
function calculateResult() {
  const display = document.getElementById("display");
  try {
    // Ganti simbol estetis kembali ke simbol perhitungan
    let expression = display.value;
    expression = expression
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/％/g, "%");
    const result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
// Fungsi untuk menghapus semua (clear)
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = ""; // Kosongkan layar
}
