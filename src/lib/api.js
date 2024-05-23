const jokeButton = document.getElementById('get-joke');
const jokeDisplay = document.getElementById('joke-display');


jokeButton.addEventListener('click', function() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      jokeDisplay.textContent = data.value;
      imagen.src = data.icon_url;
    })
    .catch(error => console.error('Error al obtener la api:', error));
});
