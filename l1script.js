document.getElementById('imcForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (peso <= 0 || altura <= 0) {
    mostrarResultado('Por favor ingresa valores válidos para peso y altura.', 'danger');
    return;
  }

  const imc = peso / (altura * altura);
  const imcRedondeado = imc.toFixed(2);
  let descripcion = '';
  let color = '';

  if (imc < 18.5) {
    descripcion = 'Bajo peso';
    color = 'info';
  } else if (imc < 25) {
    descripcion = 'Peso normal';
    color = 'success';
  } else if (imc < 30) {
    descripcion = 'Sobrepeso';
    color = 'warning';
  } else {
    descripcion = 'Obesidad';
    color = 'danger';
  }

  mostrarResultado(`Tu IMC es ${imcRedondeado} (${descripcion})`, color);
});

function mostrarResultado(mensaje, tipo) {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.style.display = 'block';
  resultadoDiv.className = `alert alert-${tipo}`;
  resultadoDiv.textContent = mensaje;
}
