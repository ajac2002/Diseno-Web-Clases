document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('formularioPeso').addEventListener('submit', function(e) {
    e.preventDefault();

    const estatura = parseFloat(document.getElementById('estatura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    // Validación de entrada
    if (isNaN(estatura) || isNaN(peso) || estatura <= 0 || peso <= 0) {
      resultado.textContent = 'Por favor, ingresa valores válidos y positivos.';
      resultado.style.color = 'black';
      return;
    }

    const estaturaM = estatura / 100;
    const pesoIdeal = 22 * (estaturaM ** 2);
    const diferencia = peso - pesoIdeal;
    const imc = peso / (estaturaM ** 2);

    // Clasificación del IMC
    let estado = '';
    if (imc < 18.5) {
      estado = 'bajo peso';
      resultado.style.color = 'orange';
    } else if (imc < 24.9) {
      estado = 'peso normal';
      resultado.style.color = 'green';
    } else if (imc < 29.9) {
      estado = 'sobrepeso';
      resultado.style.color = 'red';
    } else {
      estado = 'obesidad';
      resultado.style.color = 'darkred';
    }

    resultado.textContent = `Tu peso ideal es aproximadamente ${pesoIdeal.toFixed(2)} kg. ` +
                            `Estás ${Math.abs(diferencia).toFixed(2)} kg ` +
                            `${diferencia > 0 ? 'por encima' : 'por debajo'} del peso ideal. ` +
                            `Tu IMC es ${imc.toFixed(2)} (${estado}).`;
  });
});


