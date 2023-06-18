import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// }
const firebaseConfig = {
  apiKey: "AIzaSyBGNuESoTTyAuis8-GLgBBVfBfSw7_2L4Y",
  authDomain: "pritice-problem.firebaseapp.com",
  projectId: "pritice-problem",
  storageBucket: "pritice-problem.appspot.com",
  messagingSenderId: "770768436025",
  appId: "1:770768436025:web:6a49a9881fa6fec73c06e8"
};

export const app = initializeApp(firebaseConfig)
