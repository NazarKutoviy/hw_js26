// 1
const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
let currentKeyIndex = Math.floor(Math.random() * keys.length);
const keyElement = document.getElementById("key");
const messageElement = document.getElementById("message");
const newGameButton = document.getElementById("newGame");
function setNewKey() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keyElement.textContent = keys[currentKeyIndex];
}
document.addEventListener("keydown", (event) => {
  if (event.key === keys[currentKeyIndex]) {
    setNewKey();
    PNotify.success({ text: "Правильно! Натисніть наступну клавішу." });
  } else {
    PNotify.error({ text: "Помилка! Натисніть правильну клавішу." });
  }
});
document.addEventListener("keypress", (event) => {
  event.preventDefault();
});
newGameButton.addEventListener("click", () => {
  setNewKey();
  PNotify.info({ text: "Гра оновлена! Натисніть правильну клавішу." });
});
setNewKey();

// 2
const ctx = document.getElementById("sales-chart").getContext("2d");
const chartData = {
  labels: [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 850, 800, 850, 900, 950, 1000, 250, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderColor: "#2196f3",
      borderWidth: 2,
      pointBackgroundColor: "#2196f3",
      pointBorderColor: "#fff",
      pointRadius: 4,
      fill: true,
    },
  ],
};
const config = {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "День місяця",
        },
      },
      y: {
        title: {
          display: true,
          text: "Продажі",
        },
        beginAtZero: true,
      },
    },
  },
};
new Chart(ctx, config);

console.log(typeof PNotify);