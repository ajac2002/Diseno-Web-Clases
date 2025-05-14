const form = document.getElementById('registroForm');
const tabla = document.getElementById('tablaRegistros');

let registros = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const genero = document.getElementById('genero').value.trim();
  const edad = document.getElementById('edad').value.trim();
  const pais = document.getElementById('pais').value.trim();

if (!nombre || !email || !genero || !edad || !pais) return;

  const nuevoRegistro = { nombre, email, genero, edad, pais };
  registros.push(nuevoRegistro);

  actualizarTabla();
  form.reset();
});

function actualizarTabla() {
    tabla.innerHTML = "";

    registros.forEach((registro, index) => {
        const fila = `
      <tr>
        <td>${index + 1}</td>
        <td>${registro.nombre}</td>
        <td>${registro.email}</td>
        <td>${registro.genero}</td>
        <td>${registro.edad}</td>
        <td>${registro.pais}</td>
      </tr>
    `;
    tabla.innerHTML += fila;
  });
}