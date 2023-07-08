const express = require('express');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const app = express();

app.get('/', async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.somatematica.com.br/megasena.php');
    let html = await page.content();
    const $ = cheerio.load(html);

    let data = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(1) > td > div > strong').text()
  
    let dezena1 = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(1) > div').text();
    let dezena2 = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2) > div').text();
    let dezena3 = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3) > div').text();
    let dezena4 = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(4) > div').text();
    let dezena5 = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(5) > div').text();
    let dezena6 = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(6) > div').text();

    let valor = $('#content > section > div.caixa > span > strong').text();

    const htmlResponse = `
    <html>
    <head>
      <title>Dados da Mega-Sena</title>
    </head>
    <body>
      <h1 >Último Sorteio Mega-Sena</h1>
      <p> ${data}</p>
      <p>Dezenas sorteadas: ${dezena1}, ${dezena2}, ${dezena3}, ${dezena4}, ${dezena5}, ${dezena6}</p>
      <p>Valor do prêmio: ${valor}</p>
    </body>
    </html>
    `;

    res.send(htmlResponse);

    await browser.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao extrair dados da página');
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});




/*opção funcionando

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function extrairDados() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.somatematica.com.br/megasena.php');
  let html = await page.content();
  const $ = await cheerio.load(html);

  let data = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(1) > td > div > strong').text()
  
  let dezena1 = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(1) > div').text();
  let dezena2 = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2) > div').text();
  let dezena3 = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3) > div').text();
  let dezena4 = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(4) > div').text();
  let dezena5 = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(5) > div').text();
  let dezena6 = $('#coluna1 > table:nth-child(3) > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(6) > div').text();

  let valor = $('#content > section > div.caixa > span > strong').text();

 
 


  console.log(`
  ${data}
  ${dezena1}
  ${dezena2}
  ${dezena3}
  ${dezena4}
  ${dezena5}
  ${dezena6}
  ${valor}
  `);

  

  await browser.close();
}

extrairDados();


*/