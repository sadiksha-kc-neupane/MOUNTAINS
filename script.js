let mountains = [];

fetch("mountains.json")
  .then((response) => response.json())
  .then((data) => {
    mountains = data;
  });

function searchMountain() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const found = mountains.find((mountain) =>
    mountain.name.toLowerCase().includes(input),
  );

  if (found) {
    resultDiv.innerHTML = `<h2> ${found.name} </h2>
    <p>${found.country}</p>
    <p>${found.height}</p>
    <p>${found.range}</p>
    <p>${found.description}</p>
    <p>${found.image}</p>
    <img src="${found.image}" alt="${found.name}" style="max-width:300px;"/>
    `;
  } else {
    resultDiv.innerHTML = "<p>NO MOUNTAINS FOUND </p>";
  }
}

document
  .getElementById("searchButton")
  .addEventListener("click", searchMountain);
