import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    RecaptchaVerifier,
    signInWithPhoneNumber
} from "firebase/auth";

var audioContext = new AudioContext();
var audioBuffer;
var source;
var intervalId; 

function loadSound(url) {
  return fetch(url)
    .then(response => response.arrayBuffer())
    .then(buffer => audioContext.decodeAudioData(buffer))
    .then(decodedData => {
      audioBuffer = decodedData;
    });
}

function playSound() {
  if (!audioBuffer) {
    return;
  }

  var bps = document.getElementById("bpsInput").value;
  var interval = 1 / bps * 1000;

  
  stopSound();

  source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioContext.destination);
  source.start();

  intervalId = setInterval(function() {
    source.stop();
    source.disconnect();

    source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
  }, interval);
}

function stopSound() {
  if (source) {
    clearInterval(intervalId);
    source.stop();
    source.disconnect();
  }
}

loadSound("vine-boom.mp3")
  .then(function() {
    console.log("Sound file loaded successfully.");
  })
  .catch(function(error) {
    console.log("Error loading sound file:", error);
  });

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
// window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});

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
    element.innerHTML = `+1 <br/>${counter}`;
  };

  function moveItem() {

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

  let currentLeft = parseInt(element.style.left);
  let currentRight = parseInt(element.style.right);
  element.style.left = currentLeft + getRandomInt(10) + 'vw';
  element.style.right = currentRight + getRandomInt(10) + 'vw';
}

  element.addEventListener('click', () => {
    setCounter(counter + 1);
    moveItem(); 
    userLogin();
    playSound();
  });

  setCounter(0);
  element.style.left = '0px';
}
