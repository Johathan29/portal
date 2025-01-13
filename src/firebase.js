import {firebase} from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyC2sisWakCAkWzxBQVwqUQ5GoC8GwSz7lY",
    authDomain: "test-b9556.firebaseapp.com",
    projectId: "test-b9556",
    storageBucket: "test-b9556.firebasestorage.app",
    messagingSenderId: "574621427346",
    appId: "1:574621427346:web:472323375662d7a621a84b",
    measurementId: "G-98SN3TRZ8J"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth= firebase.auth();
  export default {
    name:'auth',
    value: auth,
  };