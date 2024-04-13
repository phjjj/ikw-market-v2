/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXmq61VDzx9SFbMxlPqDxFA8eWSUSKUng",
  authDomain: "ikw-market.firebaseapp.com",
  projectId: "ikw-market",
  storageBucket: "ikw-market.appspot.com",
  messagingSenderId: "702221320306",
  appId: "1:702221320306:web:615e4aec1d662d3202c2eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbService = getFirestore();
