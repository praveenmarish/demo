// firebase-messaging-sw.js

importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDE-HvjCi8Xnmt_3pr0GoP14cuTZU_3LEk",
  authDomain: "cpoint5.firebaseapp.com",
  projectId: "cpoint5",
  storageBucket: "cpoint5.appspot.com",
  messagingSenderId: "562522193194",
  appId: "1:562522193194:web:378a1772d7fd6a8323f253",
  measurementId: "G-5J5P7BYB0L",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Customize how background messages are handled
messaging.onBackgroundMessage((payload) => {
  console.log("Background Message:", payload);
  // Handle the background message here, e.g., show a notification
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: icon || "cpoint5 logo white.png",
  });
});

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../firebase-messaging-sw.js')
//       .then(function(registration) {
//         console.log('Registration successful, scope is:', registration.scope);
//       }).catch(function(err) {
//         console.log('Service worker registration failed, error:', err);
//       });
//     }
