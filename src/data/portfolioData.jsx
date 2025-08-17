// src/data/portfolioData.js - ตัวอย่างที่นักศึกษาต้องทำ
import miniEcommerce from '../assets/images/mini-e-commerce.jpg';
import weatherApp from '../assets/images/weather-app.jpg';
import portfolioCollab from '../assets/images/portfolio-collab.jpg';
import todoList from '../assets/images/todo-list.jpg';
import onlineShop from '../assets/images/online-shop.jpg';

export const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured online store built with React and Node.js",
    image: {miniEcommerce},
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://oscro5017.github.io/mini-ecommerce-collaboration/",
    githubUrl: "https://github.com/Oscro5017/mini-ecommerce-collaboration.git",
    featured: true
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts",
    image: {weatherApp},
    technologies: ["React", "OpenWeather API", "CSS3"],
    demoUrl: "https://oscro5017.github.io/weatherApp/",
    githubUrl: "https://github.com/Oscro5017/weatherApp.git",
    featured: true
  },
  {
    id: 3,
    title: "Protfolio collab",
    description: "Devolop portfolio website with friends",
    image: {portfolioCollab},
    technologies: ["HTML", "OpenWeather API", "CSS3"],
    demoUrl: "https://oscro5017.github.io/portfolio-website-collab/",
    githubUrl: "https://github.com/Oscro5017/portfolio-website-collab.git",
    featured: true
  },
  {
    id: 4,
    title: "My react workshop todolist",
    description: "Todolist",
    image: {todoList},
    technologies: ["React", "CSS3"],
    demoUrl: "https://my-react-workshop-todolist.vercel.app/",
    githubUrl: "https://github.com/Oscro5017/my-react-workshop-todolist.git",
    featured: true
  },
  {
    id: 5,
    title: "Online shop",
    description: "*Under Dev*",
    image: {onlineShop},
    technologies: ["HTML", "CSS3"],
    featured: true
  },
];