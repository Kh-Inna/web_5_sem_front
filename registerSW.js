if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/animal-records-frontend/sw.js', { scope: '/animal-records-frontend/' })})}