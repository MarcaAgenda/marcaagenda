// Migração Marca Agenda → Mari Lanches. Não registra novos caches.
self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('marcaagenda-')).map(k => caches.delete(k)));
    await self.clients.claim();
    await self.registration.unregister();
  })());
});
// Sem fetch handler: toda navegação acessa a rede e não mostra a tela offline antiga.
