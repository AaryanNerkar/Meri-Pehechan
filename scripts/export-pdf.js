/**
 * PDF Export Script
 * =================
 * Uses Puppeteer to navigate to the /resume page and generate a PDF.
 *
 * Prerequisites:
 *   npm install -D puppeteer
 *
 * Usage:
 *   1. Start the dev server: npm run dev
 *   2. In a separate terminal: npm run export-pdf
 *
 * The PDF will be saved to public/resume.pdf
 */

const puppeteer = require('puppeteer');
const path = require('path');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'resume.pdf');

async function generatePDF() {
  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  console.log(`📄 Navigating to ${BASE_URL}/resume ...`);
  await page.goto(`${BASE_URL}/resume`, {
    waitUntil: 'networkidle0',
    timeout: 30000,
  });

  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');

  console.log('📝 Generating PDF...');
  await page.pdf({
    path: OUTPUT_PATH,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '12mm',
      right: '15mm',
      bottom: '12mm',
      left: '15mm',
    },
    displayHeaderFooter: false,
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log(`✅ PDF saved to: ${OUTPUT_PATH}`);
}

generatePDF().catch((err) => {
  console.error('❌ PDF generation failed:', err);
  process.exit(1);
});
