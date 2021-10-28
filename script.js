const input = document.getElementById("input");
const binary = document.getElementById("binary");
const ascii = document.getElementById("ascii");
const binaryTitle = document.getElementById("binary-title");
const asciiTitle = document.getElementById("ascii-title");
const resetBtn = document.getElementById("reset");

input.focus();

function translate() {
  const text = input.value;
  const splitText = [...text.split("")];

  const asciiTextArr = splitText.map((char) =>
    char.charCodeAt(0).toString().padStart(3, "0")
  );
  const asciiText = asciiTextArr.join(" ");
  ascii.textContent = asciiText;

  const binaryText = splitText
    .map((char) => char.charCodeAt(0).toString(2))
    .join(" ");
  binary.textContent = binaryText;
}

input.addEventListener("keyup", translate);

function textToClipboard(text) {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

binary.addEventListener("click", () => {
  textToClipboard(binary.textContent);
  binary.style.fontWeight = "bold";
  binaryTitle.textContent = "Binary Copied!";
  setTimeout(() => {
    binaryTitle.textContent = "Binary";
    binary.style.fontWeight = "normal";
  }, 3000);
});
ascii.addEventListener("click", () => {
  textToClipboard(ascii.textContent);
  ascii.style.fontWeight = "bold";
  asciiTitle.textContent = "ASCII Copied";
  setTimeout(() => {
    asciiTitle.textContent = "ASCII";
    ascii.style.fontWeight = "normal";
  }, 3000);
});

resetBtn.addEventListener("click", () => {
  input.value = "";
  ascii.textContent = "";
  binary.textContent = "";
  input.focus();
});
