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
  element.style.left = currentLeft + getRandomInt(1000) + 'px';
  element.style.right = currentRight + getRandomInt(1000) + 'px';




  if (currentLeft > currentRight) {
    element.style.right = currentLeft + getRandomInt(1000) + 'px';
  }
  else{
    element.style.left = currentRight + getRandomInt(1000) + 'px';
  }
  }

  element.addEventListener('click', () => {
    setCounter(counter + 1);
    moveItem(); 
  });

  setCounter(0);
  element.style.left = '0px';
}
