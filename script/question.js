// window.location = `low.html?score=${score}`;
function passtomonitor() {
  let score = 0;
  const checkBoxes = document.getElementsByTagName("input");
  let arr = [].slice.call(checkBoxes);
  const checked = arr.filter(v => v.checked);
  console.log(checkBoxes);
  for (const c of checked) score += Number.parseInt(c.value);
  console.log(score);
  if (score <= 9) {
    document.getElementById("cross").href = "monitor.html";
  } else if (score > 9 && score <= 18) {
    document.getElementById("cross").href = "low.html";
  } else if (score > 18 && score <= 27) {
    document.getElementById("cross").href = "mid.html";
  } else {
    document.getElementById("cross").href = "high.html";
    //
  }
  localStorage.setItem("score", JSON.stringify(score));
  // The function returns the product of p1 and p2
}
