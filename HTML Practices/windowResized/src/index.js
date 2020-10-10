// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const colors = ["#3498db", "#9b59b6", "#f39c12"]; //하늘, 보라, 노란

function handler() {
  const width = window.innerWidth;
  if (width < 800) {
    document.body.style.background = colors[0];
  } else if (width >= 800 && width < 1450) {
    document.body.style.background = colors[1];
  } else {
    document.body.style.background = colors[2];
  }
}

function always() {
  window.addEventListener("resize", handler);
}

always();
