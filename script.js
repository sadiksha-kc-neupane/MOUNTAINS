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
    resultDiv.innerHTML = `<h2><strong>NAME:</strong> ${found.name} </h2>
    <p class="mountain-info"> ${found.country}</p>
    <p class="mountain-info" >${found.height}</p>
    <p class="mountain-info">${found.range}</p>
    <p class="mountain-info">${found.description}</p>
    <img src="${found.image}" alt="${found.name}" style="max-width:500px;"/>

    `;
  } else {
    resultDiv.innerHTML = "<p>NO MOUNTAINS FOUND </p>";
  }
}

document
  .getElementById("searchButton")
  .addEventListener("click", searchMountain);
