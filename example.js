const puppeteer = require('puppeteer');

async function screenshotExample () {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 500
  });
  const page = await browser.newPage();

  await page.goto('https://example.com');
  await page.screenshot({path: 'screenshot-example.png'});

  await browser.close();
}

console.log('Make me a screenshot');
screenshotExample();
