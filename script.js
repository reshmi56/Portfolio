// Array of colors
const colors = [
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#33FFA8",
  "#FF33A8",
  "#A833FF",
  "#FFA833",
  "#33A8FF",
  "#A8FF33",
  "#33FF33",
];

// Function to pick a random color from the colors array
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Function to change the background color
function changeBackgroundColor() {
  const colorBox = document.getElementById("color-box");
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
}

// Event listener for the button click
document.getElementById("color-btn").addEventListener("click", changeBackgroundColor);
