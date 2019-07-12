let score = 0;
const checkBoxes = document.getElementsByTagName("input");
let arr = [].slice.call(checkBoxes);
const checked = arr.filter(v => v.checked);
console.log(checkBoxes);
for (const c of checked) score += Number.parseInt(c.value);
console.log(score);

// window.location = `low.html?score=${score}`;
localStorage.setItem("score", JSON.stringify(score));
