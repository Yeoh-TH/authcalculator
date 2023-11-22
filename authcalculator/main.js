import './style.css'
import { setupCounter } from './counter.js'
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


document.querySelector('#app').innerHTML = `
  <div >
    <h1>Calculator go brrrrr</h1>
    <div class="card">
      <button id="counter" type="button" onClick={() => userLogin()}></button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
