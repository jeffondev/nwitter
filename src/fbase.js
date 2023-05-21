import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCYtE-b8XITckdrhhGtpV2a5nX16Qo5bIo",
  authDomain: "nwitter-57cf7.firebaseapp.com",
  projectId: "nwitter-57cf7",
  storageBucket: "nwitter-57cf7.appspot.com",
  messagingSenderId: "978664562422",
  appId: "1:978664562422:web:cb6fd58fc95bb81e7d16d7"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth(); 
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
