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
  let index = 0;

  document.body.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === codes[index]) {
      ++index;
      console.log(index);
    }
    if (index === codes.length-1) {
      alert("What do you think you're doing!? STOP FOOLIN' AROUND KID!");
    }
  });
}