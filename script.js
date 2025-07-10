const resultados = document.getElementById("resultados");
const error = document.getElementById("error");

// Mostrar todos los personajes
function verTodos() {
  const url = "https://rickandmortyapi.com/api/character";

  fetch(url)
    .then(response => response.json())
    .then(data => renderizarPersonajes(data.results))
    .catch(err => mostrarError("Error al obtener los personajes"));
}

// Buscar con filtros
function buscarConFiltros() {
  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;
  const species = document.getElementById("species").value;
  const type = document.getElementById("type").value;
  const gender = document.getElementById("gender").value;

  const params = new URLSearchParams();

  if (name) params.append("name", name);
  if (status) params.append("status", status);
  if (species) params.append("species", species);
  if (type) params.append("type", type);
  if (gender) params.append("gender", gender);

  const url = `https://rickandmortyapi.com/api/character/?${params.toString()}`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("No se encontraron resultados");
      return response.json();
    })
    .then(data => renderizarPersonajes(data.results))
    .catch(err => mostrarError("No se encontraron personajes con esos filtros"));
}

// Mostrar personajes
function renderizarPersonajes(personajes) {
  resultados.innerHTML = "";
  error.innerText = "";

  personajes.forEach(personaje => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${personaje.image}" alt="${personaje.name}">
      <h3>${personaje.name}</h3>
      <p><strong>Estado:</strong> ${personaje.status}</p>
      <p><strong>Especie:</strong> ${personaje.species}</p>
      <p><strong>Género:</strong> ${personaje.gender}</p>
    `;

    resultados.appendChild(div);
  });
}

// Mostrar errores
function mostrarError(mensaje) {
  resultados.innerHTML = "";
  error.innerText = mensaje;
}
