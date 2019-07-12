const baseurl = "https://exceed.superposition.pknn.dev/data/ace";
fetch(baseurl)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });

fetch(baseurl + "/data/ace/door")
  .then(res => res.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));

  