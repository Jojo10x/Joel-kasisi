import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.8 },
];

const sitemapStream = new SitemapStream({ hostname: 'https://joelkasisi.ru' });

streamToPromise(sitemapStream)
  .then((sitemap) => {
    fs.writeFileSync('sitemap.xml', sitemap.toString());
    console.log('Sitemap generated successfully: public/sitemap.xml');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });

pages.forEach((page) => {
  sitemapStream.write(page);
});

sitemapStream.end();