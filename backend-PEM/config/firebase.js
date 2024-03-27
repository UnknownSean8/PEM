import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// import "firebase/analytics";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
// import "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyBbR5KzHNE57_u2qVsQt5Xmca7zF9kQiOc",
  authDomain: "goal-setting-survey.firebaseapp.com",
  databaseURL: "https://goal-setting-survey.firebaseio.com",
  projectId: "goal-setting-survey",
  storageBucket: "goal-setting-survey.appspot.com",
  messagingSenderId: "890595769263",
  appId: "1:890595769263:web:5d616ff93d212ae89d0d5a",
  measurementId: "G-X67K645TCX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// let authn = firebase.auth();

// authn.signOut().then(r => {}).catch(() => {});

export { initializeApp, db };
// export const analytics = firebase.analytics();
// export const auth = authn;
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();
// export const performance = firebase.performance();
