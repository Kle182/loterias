var times = [
   
"América-MG",
"Athletico-PR",
"Atlético-GO",
"Atlético-MG",
"Avaí-SC",
"Botafogo-RJ",
"Bragantino-SP",
"Ceará_CE",
"Corinthians-SP",
"Coritiba-PR",
"Cuiabá",
"Flamengo-RJ",
"Fluminense-RJ",
"Fortaleza-CE",
"Goiás-GO",
"Internacional-RS",
"Juventude-RS",
"Palmeiras-SP",
"Santos-SP",
"São Paulo-SP",

"Bahia-BA",
"Brusque-SC",
"Chapecoense-SC",
"CRB-AL",
"Criciúma-SC",
"Cruzeiro-MG",
"CSA-AL",
"Grêmio-RS",
"Guarani-SP",
"Ituano-SP",
"Londrina-PR",
"Náutico-PE",
"Novorizontino-SP",
"Operário-RJ",
"Ponte Preta",
"Sampaio Corrêa-MA",
"Sport-PE",
"Tombense-MG",
"Vasco da Gama-RJ",
"Vila Nova-GO",

"ABC-RN",
"Altos-PI",
"Aparecidense-GO",
"Confiança-SE",
"Botafogo-PB",
"Botafogo-SP",
"Campinense-PB",
"Remo-PA",
"São José-RS",
"Vitória-BA",
"Ferroviário-SP",
"Figueirense-SC",
"Floresta-CE",
"Atlético-CE",
"Brasil de Pelotas-RS",
"Manaus-AM",
"Mirassol-SP",
"Paysandu-PA",
"Volta Redonda-RJ",
"Ypiranga-RS",

"América-RN",
"Atlético-AC",
"Boa Esporte-MG",
"Boavista-RJ",
"Brasiliense-DF",
"Caxias-RS",
"Cianorte-PR",
"Ferroviária-SP",
"Imperatriz-MA",
"Jacuipense-BA",
"Joinville-SC",
"Juazeirense-BA",
"Luverdense-MT",
"Moto Clube-MA",
"Oeste-SP",
"Paraná Clube",
"Santa Cruz-PE",
"São Bento-SP",
"São Raimundo-RR",
"Treze-PB."


  // Adicione mais times aqui
];
function gerarJogo() {
  var numeros = [];

  while (numeros.length < 10) {
    var numero = Math.floor(Math.random() * 80) + 1;

    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }

  numeros.sort(function(a, b) {
    return a - b;
  });

  var indiceTime = Math.floor(Math.random() * times.length);
  var time = times[indiceTime];

  return {
    numeros: numeros,
    time: time
  };
}

function gerarJogos() {
  var quantidade = parseInt(document.getElementById("timemania-quantidade").value);
  var resultado = document.getElementById("timemania-resultado");
  var valorTotal = quantidade * 3.50; // Cálculo do valor total

  resultado.innerHTML = ""; // Limpa resultados anteriores

  for (var i = 0; i < quantidade; i++) {
    var jogo = gerarJogo();
    var jogoHTML = "<div><strong><br>Jogo " + (i+1) + ":</strong><br>Números: ";

    for (var j = 0; j < jogo.numeros.length; j++) {
      jogoHTML += "<span class='numero'>" + jogo.numeros[j] + "</span> - ";
    }

    jogoHTML += "<br>Time: " + jogo.time + "</div>";
    resultado.innerHTML += jogoHTML;
  }

  var valorTotalHTML = "<div>Valor Total: R$" + valorTotal.toFixed(2) + "</div>";
  document.getElementById("timemania-valor-total").innerHTML = valorTotalHTML;
}

function limparCampos() {
  document.getElementById("timemania-quantidade").value = "1";
  document.getElementById("timemania-resultado").innerHTML = "";
}