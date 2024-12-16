const CACHE_NAME = 'apexbart-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.png',
  '/hero-bg.jpg',
  // Add other static assets here
];

// Install service worker and cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('Error caching static assets:', error);
      })
  );
});

// Activate service worker and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Network-first strategy with cache fallback
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseClone);
            });
        }
        return response;
      })
      .catch(() => {
        // Fallback to cache if network fails
        return caches.match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }
            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
            return new Response('Network error happened', {
              status: 408,
              headers: { 'Content-Type': 'text/plain' },
            });
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'form-sync') {
    event.waitUntil(
      syncFormData()
    );
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/xmark.png'
      },
    ]
  };

  event.waitUntil(
    self.registration.showNotification('ApexBart Solutions', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Periodic background sync
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'content-sync') {
    event.waitUntil(
      updateContent()
    );
  }
});

// Helper function to sync form data
async function syncFormData() {
  try {
    const formDataRequests = await getFormDataFromIndexedDB();
    const responses = await Promise.all(
      formDataRequests.map(request => 
        fetch(request.url, {
          method: 'POST',
          headers: request.headers,
          body: request.body
        })
      )
    );
    await clearSyncedFormData();
    return responses;
  } catch (error) {
    console.error('Error syncing form data:', error);
    throw error;
  }
}

// Helper function to update content
async function updateContent() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const responses = await Promise.all(
      STATIC_ASSETS.map(url =>
        fetch(url).then(response => {
          if (response && response.status === 200) {
            return cache.put(url, response);
          }
        })
      )
    );
    return responses;
  } catch (error) {
    console.error('Error updating content:', error);
    throw error;
  }
} 