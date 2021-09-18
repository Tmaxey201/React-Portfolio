import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import MapMarauders from '../images/MapMarauders.jpg';
import GlobalGastro from '../images/GlobalGastro.jpg';
import personalportfolio from '../images/personalportfolio.jpg';
import Plantr from '../images/Plantr.JPG';

const projects = [
  {
    id: uuidv4(),
    name: 'Plantr',
    desc:
      'A Full Stack MERN Productivity App that will allow you to track, manage, and plan your tasks while simultaneously helping the planet by planting trees with consistent use.',
    img: Plantr,
    glink: 'Www.google.com',
    livelink: 'www.google.com',
  },
  {
    id: uuidv4(),
    name: 'Map Marauders!',
    desc:
      'A Geolocation guessing game using a real time chat feature to play with and compete with your friends.',
    img: MapMarauders,
    glink: 'Www.google.com',
    livelink: 'www.google.com',
  },
  {
    id: uuidv4(),
    name: 'Global Gastronomy',
    desc:
      'A recipe website with a language translation feature that allows you to find recipes and read them in whatever language you need at the click of a button.',
    img: GlobalGastro,
    glink: 'https://github.com/Tmaxey201/Recipe-with-translator',
    livelink: 'https://tmaxey201.github.io/Recipe-with-translator/index.html',
  },
  {
    id: uuidv4(),
    name: 'Personal Portfolio',
    desc: 'A personal portfolio using simply HTML, CSS , and Javascript.',
    img: personalportfolio,
    glink: 'Www.google.com',
    livelink: 'www.google.com',
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc:
      'A Weather Dashboard that allows you to search the current wheather and five day forecast for whatever city you want.',
    img: ProjectImg,
    glink: 'Www.google.com',
    livelink: 'www.google.com',
  },
];

export default projects;
