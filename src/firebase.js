import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '@react-native-firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBEWF1CUAXNxqdNcrk0YHvZXxBwos-0vMY",
  authDomain: "react-chative-373f3.firebaseapp.com",
  projectId: "react-chative-373f3",
  storageBucket: "react-chative-373f3.appspot.com",
  messagingSenderId: "713595334255",
  appId: "1:713595334255:web:5f6cafdaadefb475ec279a"
};

firebase.initializeApp(firebaseConfig); 
export const database = getFirestore();

export {firebase};