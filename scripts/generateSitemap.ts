import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

// Define the pages
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.8 },
];

// Create a writable stream
const sitemapStream = new SitemapStream({ hostname: 'https://joelkasisi.ru' });

// Generate the sitemap
streamToPromise(sitemapStream)
  .then((sitemap) => {
    // Write the sitemap to a file
    fs.writeFileSync('sitemap.xml', sitemap.toString());
    console.log('Sitemap generated successfully: sitemap.xml');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });

// Add pages to the stream
pages.forEach((page) => {
  sitemapStream.write(page);
});

// End the stream
sitemapStream.end();
