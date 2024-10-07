import fs from 'fs';

// Define the content for robots.txt
const robotsContent = `
User-agent: *
Disallow: /private/
Allow: /

Sitemap: https://joelkasisi.ru/sitemap.xml
`;

// Write the robots.txt file
fs.writeFileSync('robots.txt', robotsContent.trim());
console.log('robots.txt generated successfully: robots.txt');
