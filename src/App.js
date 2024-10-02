import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Request notification permission on component mount
    if ('Notification' in window && navigator.serviceWorker) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        }
      });
    }
  }, []);

  const handleButtonClick = async () => {
    if ('Notification' in window && navigator.serviceWorker) {
      const registration = await navigator.serviceWorker.ready;
      const payload = {
        title: 'Custom Notification',
        body: 'This is a notification with action buttons!',
      };
  
      // Simulate a push event
      registration.showNotification(payload.title, {
        body: payload.body,
        icon: '/icon.png',
        badge: '/badge.png',
        actions: [
          { action: 'like', title: '👍 Like', icon: '/like-icon.png' },
          { action: 'reply', title: '💬 Reply', icon: '/reply-icon.png' }
        ]
      });
    } else {
      console.error('Service Worker or Notifications API not supported.');
    }
  };
  
  return (
    <div>
      <h1>React PWA with Push Notifications</h1>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default App;
