import { chromium } from 'playwright';

const main = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Generate English version
  await page.goto('http://localhost:4321/en', { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'screen' });
  await page.pdf({
    path: 'public/resume.en.pdf',
    margin: { top: '80px', bottom: '80px' },
    printBackground: true,
  });

  // Generate Spanish version
  await page.goto('http://localhost:4321/es', { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'screen' });
  await page.pdf({
    path: 'public/resume.es.pdf',
    margin: { top: '80px', bottom: '80px' },
    printBackground: true,
  });

  await browser.close();
};

main();
