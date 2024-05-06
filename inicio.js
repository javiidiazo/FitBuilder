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

  function mostrarPlan() {
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
  
    var imc = peso / ((altura / 100) * (altura / 100));
  
    var resultado2 = '';
    if (isNaN(imc)) {
      resultado = 'Por favor, ingrese valores numéricos válidos.';
    } if(imc > 0 && imc < 18.5) {
      resultado2 = 'peso bajo';
    } if(imc >= 18.5 && imc <= 24.9){
      resultado2 = 'peso saludable';
    } if(imc >= 25 && imc <= 29.9){
      resultado2 = 'sobre peso';
    } if(imc >= 30){
      resultado2 = 'obesidad';
    }
  
    document.getElementById('resultado2').innerHTML = resultado2;
  }