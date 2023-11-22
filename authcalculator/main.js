import './style.css'
import { setupCounter } from './counter.js'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyJkWTGjQuOed4AVSyQtyLyXYm0efLUKQ",
  authDomain: "authcalculator.firebaseapp.com",
  projectId: "authcalculator",
  storageBucket: "authcalculator.appspot.com",
  messagingSenderId: "546894117488",
  appId: "1:546894117488:web:7bd4612fe2741260dbd2b5",
  measurementId: "G-V133K4J603"
};


document.querySelector('#app').innerHTML = `
  <div >
    <h1>Calculator go brrrrr</h1>
    <div class="card">
      <label for="counter"></label>
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
