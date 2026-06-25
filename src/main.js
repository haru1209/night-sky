const inputElement = document.getElementById("input");
const inputRow = document.querySelector(".input-row");
const body = document.querySelector("body");
const discriptionContainerElement = document.querySelector(
  ".discription-container",
);
const retryButton = document.querySelector(".retry");
const sentence = document.querySelector(".sentence");
const discription = document.querySelector(".discription");
const romanceSentence = document.querySelector(".romance-sentence");
const discriptionText = "Enter a number to create a romantic sky:";
const reEnterDiscriptionText =
  "Please re-enter a number to create a romantic sky:";
const outOfRangeDiscriptionText =
  "I admire the confidence, but let’s keep it realistic :D";
const romanceSentenceText =
  "Every moment with you is a gift, just like the stars above.";

let inputValue;

const parseFiniteNumber = (raw) => {
  const trimmed = String(raw ?? "").trim();
  if (trimmed === "") return null;
  const n = Number(trimmed);
  return Number.isFinite(n) ? n : null;
};

inputElement.addEventListener("input", (e) => {
  inputValue = e.target.value;
});

inputElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const n = parseFiniteNumber(inputValue);

    if (n === null) {
      inputValue = "";
      inputElement.value = "";
      discription.innerHTML = null;
      inputRow.classList.add("hidden");
      typewriterEffect(reEnterDiscriptionText, () => {
        inputRow.classList.remove("hidden");
        inputElement.focus();
      });
      return;
    }

    if (!Number.isInteger(n) || n < 1 || n > 100) {
      inputValue = "";
      inputElement.value = "";
      discription.innerHTML = null;
      inputRow.classList.add("hidden");
      typewriterEffect(outOfRangeDiscriptionText, () => {
        inputRow.classList.remove("hidden");
        inputElement.focus();
      });
      return;
    }

    discriptionContainerElement.classList.add("transparent");
    createStars(n);
  }
});

retryButton.addEventListener("click", () => {
  resetScene();
});

const createStars = (count) => {
  for (let i = 0; i < count; i++) {
    let starElement = document.createElement("span");

    starElement.className = "star";
    starElement.textContent = "*";
    starElement.style.left = Math.random() * 100 + "%";
    starElement.style.top = Math.random() * 100 + "%";
    const twinkleDuration = (1.5 + Math.random() * 2).toFixed(2) + "s";
    const twinkleDelay = (0.5 + Math.random() * 3).toFixed(2) + "s";
    starElement.style.animationDuration = `0.5s, ${twinkleDuration}`;
    starElement.style.animationDelay = `0s, ${twinkleDelay}`;
    setTimeout(() => {
      body.appendChild(starElement);
      if (i === count - 1) {
        sentence.classList.add("show");
        showRomnceSentence(romanceSentenceText);
        retryButton.classList.remove("btn-disabled");
      }
    }, 100 * i);
  }
};

const resetScene = () => {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    console.log(star);
    star.remove();
  });

  sentence.classList.remove("show");
  discriptionContainerElement.classList.remove("transparent");
  retryButton.classList.add("btn-disabled");

  inputValue = "";
  inputElement.value = "";

  discription.innerHTML = null;
  inputRow.classList.add("hidden");
  typewriterEffect(discriptionText, () => {
    inputRow.classList.remove("hidden");
    inputElement.focus();
  });
  romanceSentence.innerHTML = null;
};

const typewriterEffect = (textArg, callback) => {
  const discriptionArr = Array.from(textArg);
  for (let i = 0; i < discriptionArr.length; i++) {
    let text = document.createElement("span");
    text.innerHTML = discriptionArr[i];
    setTimeout(() => {
      discription.appendChild(text);
      if (i === discriptionArr.length - 1 && typeof callback === "function") {
        setTimeout(callback, 50);
      }
    }, 50 * i);
  }
};

const showRomnceSentence = (textArg) => {
  const romanceSentenceArr = Array.from(textArg);
  for (let i = 0; i < romanceSentenceArr.length; i++) {
    let text = document.createElement("span");
    text.innerHTML = romanceSentenceArr[i];
    setTimeout(() => {
      romanceSentence.appendChild(text);
    }, 50 * i);
  }
};

inputRow.classList.add("hidden");
typewriterEffect(discriptionText, () => {
  inputRow.classList.remove("hidden");
  inputElement.focus();
});

console.log("%cWell, well... look who's there", "color: red; font-size: 20px;");
setTimeout(() => {
  console.log(
    "%cAre you trying to steal my stars? |･-･) ✧",
    "color: red; font-size: 30px;",
  );
}, 5000);
