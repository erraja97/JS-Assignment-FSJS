const convertBtn = document.getElementById("convert-btn");
const textInput = document.getElementById("text");

const camelCase = (text) => {
  const wordArray = text.split(" ");

  const newArray = wordArray.map((word, i) => {
    if (i === 0) {
      return (word = word.toLowerCase());
    } else {
      const firstLetter = word.slice(0, 1);
      const remainLetter = word.slice(1);
      return firstLetter.toUpperCase() + remainLetter.toLowerCase();
    }
  });

  return newArray.join("");
};

const pascalCase = (text) => {
  const wordArray = text.split(" ");

  const newArray = wordArray.map((word, i) => {
    const firstLetter = word.slice(0, 1);
    const remainLetter = word.slice(1);
    return firstLetter.toUpperCase() + remainLetter.toLowerCase();
  });

  return newArray.join("");
};

const snakeCase = (text) => {
  const wordArray = text.split(" ");
  return wordArray.join("_");
};

const screamingSnakeCase = (text) => {
  const wordArray = text.toUpperCase().split(" ");
  return wordArray.join("_");
};

const kebabCase = (text) => {
  const wordArray = text.split(" ");
  return wordArray.join("-");
};

const screamingKebabCase = (text) => {
  const wordArray = text.toUpperCase().split(" ");
  return wordArray.join("-");
};

convertBtn.addEventListener("click", function () {
  const text = textInput.value;

  // Convert to camelCase
  document.getElementById("camel-case").textContent = camelCase(text);

  // Convert to PascalCase
  document.getElementById("pascal-case").textContent = pascalCase(text);

  // Convert to snake_case
  document.getElementById("snake-case").textContent = snakeCase(text);

  // Convert to SCREAMING_SNAKE_CASE
  document.getElementById("screaming-snake-case").textContent =
    screamingSnakeCase(text);

  // Convert to kebab-case
  document.getElementById("kebab-case").textContent = kebabCase(text);

  // Convert to SCREAMING-KEBAB-CASE
  document.getElementById("screaming-kebab-case").textContent =
    screamingKebabCase(text);
});
