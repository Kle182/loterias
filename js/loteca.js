function gerarJogos() {
  var quantidade = parseInt(document.getElementById("loteca-quantidade").value);
  var resultado = document.getElementById("loteca-resultado");
  var valorTotalElement = document.getElementById("loteca-valor-total");

  resultado.innerHTML = ""; // Limpa resultados anteriores
  valorTotalElement.innerHTML = ""; // Limpa valor total anterior

  for (var i = 0; i < quantidade; i++) {
    var jogo = gerarJogo();
    var jogoHTML = "<div class='jogo'><strong>Jogo " + (i + 1) + ":</strong><br>";

    for (var j = 0; j < jogo.length; j++) {
      jogoHTML += '<span class="numero">' + jogo[j] + '</span>';
    }

    jogoHTML += "</div>";
    resultado.innerHTML += jogoHTML;
  }

  var valorCalculado = quantidade * 2.00;
  valorTotalElement.innerHTML = "<strong style='color: red'>Valor do Jogo R$: " + valorCalculado.toFixed(2) + "</strong>";
}

function gerarJogo() {
  var numeros = [];

  while (numeros.length < 14) {
    var numero = Math.floor(Math.random() * 3);
    numeros.push(numero);
  }

  return numeros;
}

function limparCampos() {
  document.getElementById("loteca-quantidade").value = "1";
  document.getElementById("loteca-resultado").innerHTML = "";
  document.getElementById("loteca-valor-total").innerHTML = "";
}