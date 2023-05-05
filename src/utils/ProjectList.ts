import ag_image from "../assets/ag_image.png"
import mc_image from "../assets/mc_image.png"
import w_image from "../assets/w_image.png"
import react from "../assets/react.png"
import redux from "../assets/redux.png"
import sass from "../assets/sass.png"
import typescript from "../assets/typescript.png"
import openweatherapi from "../assets/openweatherapi.png"
import axios from "../assets/axios.png"
import movie_db from "../assets/movie_db.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
export const skillsIcons = {
  html,
  css,
  javascript,
  react,
  redux,
  sass,
  typescript
}


export const icons = {
  react,
  redux,
  sass,
  typescript,
  openweatherapi,
  axios,
  movie_db,
}


interface ProjectProp {
  name: string;
  path: string;
  stack: string[];
  site: string;
  gitHubPage: string;
}


export const getAllProjectList: ProjectProp[] = [
  {
    name: "Art Gallery",
    path: ag_image,
    stack: [icons["react"], icons["redux"], icons["typescript"], icons["axios"],
    ],
    site: "https://art-gallery-hazel.vercel.app/",
    gitHubPage: "https://github.com/ukoricpaw/art-gallery"
  },
  {
    name: "Movie Catalog",
    path: mc_image,
    stack: [icons["react"], icons["redux"], icons["typescript"], icons["axios"], icons["movie_db"]],
    site: "https://moviecatalog.vercel.app/",
    gitHubPage: "https://github.com/ukoricpaw/moviecatalog"
  },
  {
    name: "Weather App",
    path: w_image,
    stack: [icons["react"], icons["redux"], icons["typescript"], icons["axios"], icons["openweatherapi"], icons["sass"]],
    site: "https://weather-app-mis7.vercel.app/",
    gitHubPage: "https://github.com/ukoricpaw/WeatherApp"
  },
]