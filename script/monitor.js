const baseurl = "https://exceed.superposition.pknn.dev/data/ace";
fetch(baseurl)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById("temp").innerText += " " + data["tm"];
    document.getElementById("hr").innerText += " " + data["hr"];
  });

let brain = JSON.parse(localStorage.getItem("score"));
console.log(brain);
// fetch(baseurl + "/data/ace/door")
//   .then(res => res.text())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
if (brain <= 9) {
  document.getElementById("brain").innerText += "normal";
} else if (brain > 9 && brain <= 18) {
  document.getElementById("brain").innerText += "concerning";
} else if (brain > 18 && brain <= 27) {
  document.getElementById("brain").innerText += "tense";
} else {
  document.getElementById("brain").innerText += "critical";
  //
}

window.localStorage.removeItem("score");
