let score = 0;
const checkBoxes = document.getElementsByTagName("input");
const checked = checkBoxes.filter(v => v.checked);
console.log(checkBoxes);
for (const c of checked) score += Number.parseInt(c.value);
console.log(score);

// window.location = `low.html?score=${score}`;
