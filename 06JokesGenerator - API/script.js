const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const fetchJoke = () => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", options)
    .then((response) => response.json())
    .then((data) => {
      jokeElement.innerText = data.joke;
    })
    .catch((error) => console.log(error));
};

jokeBtn.addEventListener("click", fetchJoke);
