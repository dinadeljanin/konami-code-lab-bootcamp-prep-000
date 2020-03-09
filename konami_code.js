const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init() {
  // has to match the length of codes to alert
  let index = 0;
  
  document.body.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert("What do you think you're doing!? STOP FOOLIN' AROUND KID!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

init();