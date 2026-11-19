const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

function resolveFile(pathname) {
  let clean = decodeURIComponent(pathname.split('?')[0]);

  // Root homepage
  if (clean === '/' || clean === '') {
    return path.join(ROOT, 'index.html');
  }

  let rel = clean.replace(/^\/+/, '');

  // Direct special handling for admin assets
  if (rel === 'admin.js') {
    return path.join(ROOT, 'admin', 'admin.js');
  }
  if (rel === 'admin.css') {
    return path.join(ROOT, 'admin', 'admin.css');
  }

  // Admin routes
  if (rel === 'admin' || rel === 'admin/') {
    if (fs.existsSync(path.join(ROOT, 'admin', 'index.html'))) {
      return path.join(ROOT, 'admin', 'index.html');
    }
    return path.join(ROOT, 'admin.html');
  }

  let full = path.join(ROOT, rel);

  // 1. Direct file
  if (fs.existsSync(full) && fs.statSync(full).isFile()) {
    return full;
  }

  // 2. Directory with index.html
  if (fs.existsSync(full) && fs.statSync(full).isDirectory()) {
    const idx = path.join(full, 'index.html');
    if (fs.existsSync(idx)) return idx;
  }

  // 3. Name + .html
  if (fs.existsSync(full + '.html') && fs.statSync(full + '.html').isFile()) {
    return full + '.html';
  }

  // 4. Nested category or article directory index
  const subIdx = path.join(ROOT, rel, 'index.html');
  if (fs.existsSync(subIdx)) {
    return subIdx;
  }

  // Fallback check in admin folder for assets
  const adminFallback = path.join(ROOT, 'admin', rel);
  if (fs.existsSync(adminFallback) && fs.statSync(adminFallback).isFile()) {
    return adminFallback;
  }

  // 5. Clean Article routing: if no file extension, serve article.html directly without redirect
  if (!path.extname(rel)) {
    return path.join(ROOT, 'article.html');
  }

  return null;
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url);
  const pathname = parsed.pathname || '/';

  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${pathname}`);

  // CORS & Cache Busters
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Redirect /admin to /admin/ so relative assets load properly
  if (pathname === '/admin') {
    res.writeHead(301, { 'Location': '/admin/' + (parsed.search || '') });
    res.end();
    return;
  }

  const filePath = resolveFile(pathname);

  if (!filePath || !fs.existsSync(filePath)) {
    console.log(`  -> 404 NOT FOUND: ${pathname}`);
    const notFound = path.join(ROOT, '404.html');
    if (fs.existsSync(notFound)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(notFound).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

// Bind to 0.0.0.0 so localhost (IPv6 ::1 and IPv4 127.0.0.1) both work
server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(` KhaleejFlow Local Server is LIVE on port ${PORT}!`);
  console.log(`------------------------------------------------------`);
  console.log(` Public Site : http://localhost:${PORT}/`);
  console.log(` Admin Portal: http://localhost:${PORT}/admin/`);
  console.log(` IPv4 Direct : http://127.0.0.1:${PORT}/admin/`);
  console.log(` Credentials : admin / admin123`);
  console.log(`======================================================\n`);
});
