fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=6af3ab264955dd8d2826ed4ed21d')
  .then(data => data.json())
  .then(jokeData => {
    const jokeText = jokeData.jokeContent;
    const joke = document.getElementById('joke');

    joke.innerHTML = jokeText;
  })