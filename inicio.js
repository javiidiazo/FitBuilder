function calcularIMC() {
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
  
    var imc = peso / ((altura / 100) * (altura / 100));
  
    var resultado = '';
    if (isNaN(imc)) {
      resultado = 'Por favor, ingrese valores numéricos válidos.';
    } else {
      resultado = 'Su IMC es: ' + imc.toFixed(2);
    }
  
    document.getElementById('resultado').innerHTML = resultado;
}

var boton = document.getElementById('btn-calcular').addEventListener("click", function() {
  // Mostrar loader al cargar la página
  document.getElementById('scene').style.display = 'flex';
  document.getElementById('resultado2').style.display = 'none';

  // Simular carga de imágenes después de 2 segundos (simulación de la pesa cayendo)
  setTimeout(function() {
    // Ocultar el loader
    document.getElementById('scene').style.display = 'none';

    // Mostrar imágenes del plan de gimnasio
    document.getElementById('resultado2').style.display = 'flex';
    // document.getElementById('resultado2').innerHTML = mostrarPlan();
  }, 2000); // 2000 milisegundos (2 segundos)
});

  // Función para calcular el IMC y mostrar el plan de gimnasio
  function mostrarPlan() {
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    var imc = peso / ((altura / 100) * (altura / 100));

    var resultado2 = '';
    if (isNaN(imc)) {
      resultado2 = 'Por favor, ingrese valores numéricos válidos.';
    } if(imc > 0 && imc < 18.5) {
      resultado2 = '<img src="img/1.jpeg" class="plan" alt="">';
    } if(imc >= 18.5 && imc <= 24.99){
      resultado2 = '<img src="img/2.jpeg" class="plan" alt="">';
    } if(imc >= 25 && imc <= 29.99){
      resultado2 = '<img src="img/3.jpeg" class="plan" alt="">';
    } if(imc >= 30){
      resultado2 = '<img src="img/4.jpeg" class="plan" alt="">';
    }

    document.getElementById('resultado2').innerHTML = resultado2;
  }


  function limitarCaracteres(elemento, maxLength) {
    if (elemento.value.length > maxLength) {
        elemento.value = elemento.value.slice(0, maxLength);
    }
}
