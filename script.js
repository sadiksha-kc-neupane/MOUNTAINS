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
    resultDiv.innerHTML = `<h2><strong>NAME : </strong> ${found.name} </h2>
    <p class="mountain-info"><strong>COUNTRY : </strong> ${found.country}</p>
    <p class="mountain-info" ><strong>HEIGHT : </strong>${found.height}</p>
    <p class="mountain-info"><strong>RANGE : </strong>${found.range}</p>
    <p class="mountain-info"><strong>DESRIPTION : </strong>${found.description}</p>
    <img src="${found.image}" alt="${found.name}" style="max-width:500px;"/>

    `;
  } else {
    resultDiv.innerHTML = "<p>NO MOUNTAINS FOUND </p>";
  }
}

document
  .getElementById("searchButton")
  .addEventListener("click", searchMountain);

document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchMountain();
    }
  });
