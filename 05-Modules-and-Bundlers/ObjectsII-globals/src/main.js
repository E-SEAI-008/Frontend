const cancelBtn = document.querySelector("#cancel");

// setInterval()
let counter = 0;

// const myInterval = setInterval(() => {
//   console.log(counter);
//   counter++;
//   if (counter === 10) {
//     clearInterval(myInterval);
//   }
// }, 2000);


// setTimeout()
const myTimeout = setTimeout(() => {
    const p = document.createElement("p");
    p.textContent = "Hello class";
    document.body.insertBefore(p, cancelBtn)
}, 5000);

cancelBtn.addEventListener("click", () => clearTimeout(myTimeout))