let score = 0;
const checkBoxes = document.getElementsByTagName("input");
checkBoxes.filter(v => v.checked);
const checked = checkBoxes.filter(v => v.checked);
for (const c of checked) score += Number.parseInt(c.value);

// window.location = `low.html?score=${score}`;
