const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');

let intervalId = null;

function startColorChange() {
  startRef.disabled = true;
  intervalId = setInterval(() =>
  {
    document.body.bgColor = colors[randomIntegerFromInterval(0, colors.length)]
  }, 1000);
}

function stopColorChange() {
  startRef.disabled = false;
  clearInterval(intervalId);
}

startRef.addEventListener('click', startColorChange);
stopRef.addEventListener('click', stopColorChange);
