self.addEventListener('push', function(event) {
    const data = event.data.json();
  
    const options = {
      body: data.body,
      icon: '/icon.png',
      badge: '/badge.png',
      actions: [
        { action: 'like', title: '👍 Like', icon: '/like-icon.png' },
        { action: 'reply', title: '💬 Reply', icon: '/reply-icon.png' }
      ]
    };
  
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  });
  
  self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    console.log('User liked the message.');

    // Handle actions from buttons
    if (event.action === 'like') {
      console.log('User liked the message.');
      // You can add further logic here
    } else if (event.action === 'reply') {
      console.log('User wants to reply.');
      // Open a reply window, redirect to a page, etc.
    } else {
      // Handle other cases like clicking on the notification itself
      console.log('Notification clicked.');
      // Redirect to a specific URL or perform other actions
    }
  }, false);
  