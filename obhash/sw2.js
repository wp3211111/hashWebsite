self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => {
      console.log('cache :>> ', cache)
    })
  )
})

self.addEventListener('fetch', (e, index) => {
  var str222 = (e.request.url.split("-")[1])
  if (!str222) return;
  index = Number(str222.split(".")[0])
  //console.log('请求地址', e.request.url)
  // e.respondWith(
  //   caches.match(e.request).then((response) => response || fetch(e.request))
  // )
})
