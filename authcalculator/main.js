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
      <div class="tenor-gif-embed" data-postid="11809160" data-share-method="host" data-aspect-ratio="1.03" data-width="100%"><a href="https://tenor.com/view/fortnite-dance-the-floss-gif-11809160">Fortnite Dance GIF</a>from <a href="https://tenor.com/search/fortnite-gifs">Fortnite GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
      <div class="tenor-gif-embed" data-postid="11809160" data-share-method="host" data-aspect-ratio="1.03" data-width="100%"><a href="https://tenor.com/view/fortnite-dance-the-floss-gif-11809160">Fortnite Dance GIF</a>from <a href="https://tenor.com/search/fortnite-gifs">Fortnite GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
      <div class="tenor-gif-embed" data-postid="11809160" data-share-method="host" data-aspect-ratio="1.03" data-width="100%"><a href="https://tenor.com/view/fortnite-dance-the-floss-gif-11809160">Fortnite Dance GIF</a>from <a href="https://tenor.com/search/fortnite-gifs">Fortnite GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
