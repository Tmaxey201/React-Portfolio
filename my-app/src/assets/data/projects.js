import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Map Marauders!',
    desc:
      'A Geolocation guessing game using a real time chat feature to play with and compete with your friends.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Global Gastronomy',
    desc:
      'A recipe website with a language translation feature that allows you to find recipes and read them in whatever language you need at the click of a button.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Personal Portfolio',
    desc: 'A personal portfolio using simply HTML, CSS , and Javascript.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Note Taker',
    desc:
      'A note taker that can be used to write and save notes using an Express.js back end and will save and retrieve note data from a JSON file.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc:
      'A Weather Dashboard that allows you to search the current wheather and five day forecast for whatever city you want.',
    img: ProjectImg,
  },
];

export default projects;
