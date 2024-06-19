const calcularIMC = () => {
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;

  const imc = peso / ((altura / 100) * (altura / 100));

  let resultado = '';
  if (isNaN(imc)) {
      resultado = 'Por favor, ingrese valores numéricos válidos.';
  } else if (altura < 0 || peso < 0) {
      resultado = 'Ni el peso ni la altura pueden ser números negativos.';
  } else {
      resultado = `Su IMC es: ${imc.toFixed(2)}`;
  }

  document.getElementById('resultado').innerHTML = resultado;
};


var boton = document.getElementById('btn-calcular').addEventListener("click", () => {
  // Mostrar loader al cargar la página
  document.getElementById('scene').style.display = 'flex';
  document.getElementById('resultado2').style.display = 'none';

  // Simular carga de imágenes después de 2 segundos (simulación de la pesa cayendo)
  setTimeout(() => {
    // Ocultar el loader
    document.getElementById('scene').style.display = 'none';

    // Mostrar imágenes del plan de gimnasio
    document.getElementById('resultado2').style.display = 'flex';
    // document.getElementById('resultado2').innerHTML = mostrarPlan();
}, 2000);// 2000 milisegundos (2 segundos)
});

  // Función para calcular el IMC y mostrar el plan de gimnasio
  const mostrarPlan = () => {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    const imc = peso / ((altura / 100) * (altura / 100));

    let resultado2 = '';
    if (isNaN(imc)) {
        resultado2 = 'Por favor, ingrese valores numéricos válidos.';
    } else if (imc > 0 && imc < 18.5) {
        resultado2 = '<img src="img/1.jpeg" class="plan" alt="">';
    } else if (imc >= 18.5 && imc < 25) {
        resultado2 = '<img src="img/2.jpeg" class="plan" alt="">';
    } else if (imc >= 25 && imc < 30) {
        resultado2 = '<img src="img/3.jpeg" class="plan" alt="">';
    } else if (imc >= 30) {
        resultado2 = '<img src="img/4.jpeg" class="plan" alt="">';
    }

    document.getElementById('resultado2').innerHTML = resultado2;
};



const limitarCaracteres = (elemento, maxLength) => {
  if (elemento.value.length > maxLength) {
    elemento.value = elemento.value.slice(0, maxLength);
  }
};

