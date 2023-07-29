import generateJoke from "./generateJoke";
import Laughing from './assets/laughing.svg';

import './styles/main.scss';

const laughImg = document.getElementById('laughImg');

laughImg.src = Laughing;

const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();