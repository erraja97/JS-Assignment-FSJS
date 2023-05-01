const button = document.getElementById("button");
const canvas = document.getElementById("canvas");

//get random number between 0 - 255
const randomNumberGenerator = () => {
  return Math.floor(Math.random() * 255);
};

//add eventlistener to button
button.addEventListener("click", () => {
  const r = randomNumberGenerator();
  const g = randomNumberGenerator();
  const b = randomNumberGenerator();
  canvas.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
