if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
    .then(registration => {
    console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
    console.error('Service Worker registration failed:', error);
    });
    });
    }

    if ('Notification' in window) {
    Notification.requestPermission().then(function (result) {
    if (result === 'granted') {
    console.log('Notification permission granted');
    } else {
    console.warn('Notification permission denied');
    }
    });
    }
    