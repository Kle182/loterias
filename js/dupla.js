function gerarJogos() {
  var quantidade = parseInt(document.getElementById("duplasena-quantidade").value);
  var resultado = document.getElementById("duplasena-resultado");
  var valorTotalElement = document.getElementById("duplasena-valor-total");

  resultado.innerHTML = ""; // Limpa resultados anteriores
  valorTotalElement.innerHTML = ""; // Limpa valor total anterior

  for (var i = 0; i < quantidade; i++) {
    var jogos = gerarJogosDuplaSena();
    var jogoHTML = "<div class='jogo'><strong>Jogo " + (i + 1) + ":</strong><br>";

    for (var j = 0; j < jogos.length; j++) {
      var numerosHTML = jogos[j].map(function(numero) {
        return '<span class="numero">' + numero + '</span>';
      }).join("");

      jogoHTML += numerosHTML + "<br>";
    }

    jogoHTML += "</div>";
    resultado.innerHTML += jogoHTML;
  }

  var valorCalculado = quantidade * 2.50;
  valorTotalElement.innerHTML = "Valor do Jogo R$: " + valorCalculado.toFixed(2);
}

function gerarJogosDuplaSena() {
  var jogos = [];

  for (var i = 0; i < 2; i++) {
    var numeros = [];

    while (numeros.length < 6) {
      var numero = Math.floor(Math.random() * 50) + 1;

      if (numeros.indexOf(numero) === -1) {
        numeros.push(numero);
      }
    }

    numeros.sort(function(a, b) {
      return a - b;
    });

    jogos.push(numeros);
  }

  return jogos;
}

function limparCampos() {
  document.getElementById("duplasena-quantidade").value = "1";
  document.getElementById("duplasena-resultado").innerHTML = "";
  document.getElementById("duplasena-valor-total").innerHTML = "";
}