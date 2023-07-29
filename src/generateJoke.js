import axios from 'axios';

function generateJoke() {
  const config  = {
    headers: {
      Accept: 'application/json'
    }
  };

  axios.get('https://icanhazdadjoke.com/', config).then(res => {
    const jokeDiv = document.getElementById("joke");
    if(res.status) {
      return jokeDiv.innerHTML = res.data.joke;
    }
    return jokeDiv.innerHTML = "Loading Joke";
  })
}

export default generateJoke;