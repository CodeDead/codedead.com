import fs from 'fs';
import { globby } from 'globby';
import xml2js from 'xml2js';

(async () => {
  const pages = await globby(['out/**/*.html']);

  const beautifyXml = async (xmlString) => {
    const parser = new xml2js.Parser({ explicitArray: false });
    const builder = new xml2js.Builder();

    let res;
    parser.parseString(xmlString, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
      } else {
        res = builder.buildObject(result);
      }
    });

    return res;
  };

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .substring(4)
            .replace('/index.html', '/')
            .replace('index.html', '')
            .replace('.html', '');

          return `<url>
    <loc>https://codedead.com/${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
    </url>`;
        })
        .join('')}
  </urlset>
  `;

  let res = await beautifyXml(sitemap);
  fs.writeFileSync('out/sitemap.xml', res);
})();
