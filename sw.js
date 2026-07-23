// โค้ด Service Worker พื้นฐานเพื่อให้ผ่านเกณฑ์ PWA
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // ให้โหลดข้อมูลจากเน็ตตามปกติ
  e.respondWith(fetch(e.request));
});