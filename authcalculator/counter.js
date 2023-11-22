import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    RecaptchaVerifier
} from "firebase/auth";
// export let user = "";

const firebaseConfig = {
  apiKey: "AIzaSyAyJkWTGjQuOed4AVSyQtyLyXYm0efLUKQ",
  authDomain: "authcalculator.firebaseapp.com",
  projectId: "authcalculator",
  storageBucket: "authcalculator.appspot.com",
  messagingSenderId: "546894117488",
  appId: "1:546894117488:web:7bd4612fe2741260dbd2b5",
  measurementId: "G-V133K4J603"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
var user = auth.currentUser;
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});

    let userLogin = () => {
        signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
            user = result.user;
            window.location = "#/";
        });
    };
    onAuthStateChanged(auth, (user) => {
      if (user) {
          console.log("You are logged in as", user);
          loadSaves();
      }
  });

export function setupCounter(element) {
  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `+ 1 <br/>${counter}`;
  };

  function moveItem() {

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

  let currentLeft = parseInt(element.style.left);
  let currentRight = parseInt(element.style.right);
  element.style.left = currentLeft + getRandomInt(100) + 'vw';
  element.style.right = currentRight + getRandomInt(100) + 'vw';
}

  element.addEventListener('click', () => {
    setCounter(counter + 1);
    moveItem(); 
    userLogin();
  });

  setCounter(0);
  element.style.left = '0px';
}
