function gerarJogos() {
  var quantidade = parseInt(document.getElementById("lotomania-quantidade").value);
  var resultado = document.getElementById("lotomania-resultado");
  var valorTotalElement = document.getElementById("lotomania-valor-total");

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

  var valorCalculado = quantidade * 2.50;
  valorTotalElement.innerHTML = "<strong>Valor do Jogo R$: " + valorCalculado.toFixed(2) + "</strong>";
}

function gerarJogo() {
  var numeros = [];

  while (numeros.length < 50) {
    var numero = Math.floor(Math.random() * 100) + 1;

    if (numeros.indexOf(numero) === -1) {
      numeros.push(numero);
    }
  }

  numeros.sort(function(a, b) {
    return a - b;
  });

  return numeros;
}

function limparCampos() {
  document.getElementById("lotomania-quantidade").value = "1";
  document.getElementById("lotomania-resultado").innerHTML = "";
  document.getElementById("lotomania-valor-total").innerHTML = "";
}