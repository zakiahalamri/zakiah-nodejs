const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const radius = queryObject.radius;

  if (radius === undefined) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('error: masukkan nilai radius parameter.\n');
  } else {
    const area = Math.PI * radius ** 2;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`luas lingkaran dengan radius ${radius} yaitu ${area}.\n`);
  }
});

console.log('Nama: Zakiah Husen Alamri\nNIM:210211060301\nTIK1032-F')

server.listen(9000, () => {
  console.log('Server running at http://localhost:9000/?radius=5');
});