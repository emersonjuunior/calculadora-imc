const form = document.getElementById("imcForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const sexo = document.getElementById("selectSexo").value;
  const altura = document.getElementById("inputAltura").value;
  const peso = document.getElementById("inputPeso").value;

  const imc = (peso / (altura * altura)).toFixed(2);

  const resultadoImc = document.getElementById("imcResultado");

  resultadoImc.textContent = `O seu IMC é ${imc}`;

  const abaixo = document.getElementById("abaixo");
  const normal = document.getElementById("normal");
  const acima = document.getElementById("acima");
  const obesidade = document.getElementById("obesidade");
  const containerImc = document.getElementById("containerImc");
  const tabela = document.getElementById("second");

  containerImc.style.display = "flex";
  tabela.style.display = "flex";

  if (imc < 18.5) {

    abaixo.style.border = "2px solid #28afb0";
    normal.style.border = "";
    acima.style.border = "";
    obesidade.style.border = "";

  } else if (imc >= 18.5 && imc < 24.9) {

    abaixo.style.border = "";
    normal.style.border = "2px solid #28afb0";
    acima.style.border = "";
    obesidade.style.border = "";

  } else if (imc >= 24.9 && imc < 30) {

    abaixo.style.border = "";
    normal.style.border = "";
    acima.style.border = "2px solid #28afb0";
    obesidade.style.border = "";
    
  } else {

    abaixo.style.border = "";
    normal.style.border = "";
    acima.style.border = "";
    obesidade.style.border = "2px solid #28afb0";

  }
});