let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let main = document.querySelector(".main");
let codeBox = document.querySelector(".code-box");

// Random Hex code
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let hexCode1 = randomColor();
// console.log(hexCode1);
let hexCode2 = randomColor();
// console.log(hexCode2);

btn1.addEventListener("click", () => {
  hexCode1 = randomColor();
  // hexCode2=randomColor()

  main.style.backgroundImage = `linear-gradient(to right,${hexCode1}, ${hexCode2})`;
  btn1.innerHTML = `${hexCode1}`;
  btn1.style.backgroundColor = `${hexCode1}`;
  btn2.innerHTML = `${hexCode2}`;
  btn2.style.backgroundColor = `${hexCode2}`;
  codeBox.innerHTML = `background-image: linear-gradient(to right, ${hexCode1},${hexCode2})`;
});

btn2.addEventListener("click", () => {
  // hexCode1=randomColor()
  hexCode2 = randomColor();

  main.style.backgroundImage = `linear-gradient(to right,${hexCode1}, ${hexCode2})`;
  btn1.innerHTML = `${hexCode1}`;
  btn1.style.backgroundColor = `${hexCode1}`;
  btn2.innerHTML = `${hexCode2}`;
  btn2.style.backgroundColor = `${hexCode2}`;
  codeBox.innerHTML = `background-image: linear-gradient(to right, ${hexCode1},${hexCode2})`;
});
// ! Copy Code Box Section Start
codeBox.addEventListener("click", () => {
  navigator.clipboard.writeText(codeBox.innerText);
  alert("Copied");
});
// ! Copy Code Box Section End

// ! Arrow Btn Group Section Start
const allArrow = document.querySelectorAll(".arrow-btn-grp div");
// console.log(allArrow);
console.log(allArrow[0]);
allArrow.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    if (arrow.className == "right-top") {
      main.style.backgroundImage = `linear-gradient(${"to right top"}, ${hexCode1},${hexCode2})`;
      codeBox.innerHTML = `background-image: linear-gradient(${"to right top"}, ${hexCode1},${hexCode2})`;
    } else if (arrow.className == "right") {
      main.style.backgroundImage = `linear-gradient(${"to right"}, ${hexCode1},${hexCode2})`;
      codeBox.innerHTML = `background-image: linear-gradient(${"to right"}, ${hexCode1},${hexCode2})`;
    } else if (arrow.className == "left-bottom") {
      main.style.backgroundImage = `linear-gradient(${"to left bottom"}, ${hexCode1},${hexCode2})`;
      codeBox.innerHTML = `background-image: linear-gradient(${"to left bottom"}, ${hexCode1},${hexCode2})`;
    } else if (arrow.className == "bottom") {
      main.style.backgroundImage = `linear-gradient(${"to bottom"}, ${hexCode1},${hexCode2})`;
      codeBox.innerHTML = `background-image: linear-gradient(${"to bottom"}, ${hexCode1},${hexCode2})`;
    } else if (arrow.className == "right-bottom") {
      main.style.backgroundImage = `linear-gradient(${"to right bottom"}, ${hexCode1},${hexCode2})`;
      codeBox.innerHTML = `background-image: linear-gradient(${"to right bottom"}, ${hexCode1},${hexCode2})`;
    } else if (arrow.className == "left") {
      main.style.backgroundImage = `linear-gradient(${"to left"}, ${hexCode1},${hexCode2})`;
      codeBox.innerHTML = `background-image: linear-gradient(${"to left"}, ${hexCode1},${hexCode2})`;
    } else if (arrow.className == "top") {
      main.style.backgroundImage = `linear-gradient(${"to top"}, ${hexCode1},${hexCode2})`;
      codeBox.innerHTML = `background-image: linear-gradient(${"to top"}, ${hexCode1},${hexCode2})`;
    } else if (arrow.className == "left-top") {
      main.style.backgroundImage = `linear-gradient(${"to left top"}, ${hexCode1},${hexCode2})`;
      codeBox.innerHTML = `background-image: linear-gradient(${"to left top"}, ${hexCode1},${hexCode2})`;
    } else if (arrow.className == "radial") {
      main.style.backgroundImage = `radial-gradient(${"circle"}, ${hexCode1},${hexCode2})`;
      codeBox.innerHTML = `background-image: radial-gradient(${"circle"}, ${hexCode1},${hexCode2})`;
    }
  });
});
// ! Arrow Btn Group Section End