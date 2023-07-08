const puppeteer = require('puppeteer');
const cheerio = require('cheerio');


async function extrairDados() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://noticias.uol.com.br/loterias/mega-sena/');
  let html = await page.content();
  const $ = await cheerio.load(html);

  let data = $('body > div.lottery-article > section.t-wrapper > div > div > div.col-xs-8.col-sm-24.col-md-16.col-lg-17 > div > div > div.lottery-wrapper > div > div > div.lottery-content.mega-sena-colors.border.nav > div.lottery-header.mega-sena-colors.bg > div.lottery-info > span').text()
  
  let dezena1 = $('body > div.lottery-article > section.t-wrapper > div > div > div.col-xs-8.col-sm-24.col-md-16.col-lg-17 > div > div > div.lottery-wrapper > div > div > div.lottery-content.mega-sena-colors.border.nav > div.lottery-wrapper-content > div.lottery-single > div > div.lt-result.no-margin > div:nth-child(1)').text();
  
  let dezena2 = $('body > div.lottery-article > section.t-wrapper > div > div > div.col-xs-8.col-sm-24.col-md-16.col-lg-17 > div > div > div.lottery-wrapper > div > div > div.lottery-content.mega-sena-colors.border.nav > div.lottery-wrapper-content > div.lottery-single > div > div.lt-result.no-margin > div:nth-child(2)').text();
  
  let dezena3 = $('body > div.lottery-article > section.t-wrapper > div > div > div.col-xs-8.col-sm-24.col-md-16.col-lg-17 > div > div > div.lottery-wrapper > div > div > div.lottery-content.mega-sena-colors.border.nav > div.lottery-wrapper-content > div.lottery-single > div > div.lt-result.no-margin > div:nth-child(3)').text();
  
  let dezena4 = $('body > div.lottery-article > section.t-wrapper > div > div > div.col-xs-8.col-sm-24.col-md-16.col-lg-17 > div > div > div.lottery-wrapper > div > div > div.lottery-content.mega-sena-colors.border.nav > div.lottery-wrapper-content > div.lottery-single > div > div.lt-result.no-margin > div:nth-child(4)').text();
  
  let dezena5 = $('body > div.lottery-article > section.t-wrapper > div > div > div.col-xs-8.col-sm-24.col-md-16.col-lg-17 > div > div > div.lottery-wrapper > div > div > div.lottery-content.mega-sena-colors.border.nav > div.lottery-wrapper-content > div.lottery-single > div > div.lt-result.no-margin > div:nth-child(5)').text();
  
  let dezena6 = $('body > div.lottery-article > section.t-wrapper > div > div > div.col-xs-8.col-sm-24.col-md-16.col-lg-17 > div > div > div.lottery-wrapper > div > div > div.lottery-content.mega-sena-colors.border.nav > div.lottery-wrapper-content > div.lottery-single > div > div.lt-result.no-margin > div:nth-child(6)').text();

  let valor = $('body > div.lottery-article > section.t-wrapper > div > div > div.col-xs-8.col-sm-24.col-md-16.col-lg-17 > div > div > div.lottery-wrapper > div > div > div.lottery-content.mega-sena-colors.border.nav > div.lottery-wrapper-content > div.lottery-results-table > div.resultHead > div.alignCenterValor').text();


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
