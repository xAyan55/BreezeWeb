const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  await page.goto('http://localhost:5173/terms', { waitUntil: 'networkidle0' });
  
  const content = await page.content();
  if (content.includes('vite-error-overlay')) {
    console.log("VITE ERROR OVERLAY DETECTED");
  } else {
    console.log("NO ERROR OVERLAY");
  }
  await browser.close();
})();
