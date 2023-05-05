import ag_image from "../assets/ag_image.png"
import mc_image from "../assets/mc_image.png"
import w_image from "../assets/w_image.png"
import react from "../assets/react.png"
import redux from "../assets/redux.png"
import sass from "../assets/sass.png"
import typescript from "../assets/typescript.png"
import openweatherapi from "../assets/openweatherapi.png"
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

interface iconsInterface {
  name: string;
  path: string;
}

export const icons = {
  react: { name: "React", path: react },
  redux: { name: "Redux", path: redux },
  sass: { name: "Sass", path: sass },
  typescript: { name: "TypeScript", path: typescript },
  openweatherapi: { name: "OpenWeatherMap", path: openweatherapi },
  movie_db: { name: "MovieDatabase", path: movie_db }
}


export interface ProjectProp {
  name: string;
  path: string;
  stack: iconsInterface[];
  site: string;
  gitHubPage: string;
}


export const getAllProjectList: ProjectProp[] = [
  {
    name: "Art Gallery",
    path: ag_image,
    stack: [icons["react"], icons["redux"], icons["typescript"]
    ],
    site: "https://art-gallery-hazel.vercel.app/",
    gitHubPage: "https://github.com/ukoricpaw/art-gallery"
  },
  {
    name: "Movie Catalog",
    path: mc_image,
    stack: [icons["react"], icons["redux"], icons["typescript"], icons["movie_db"]],
    site: "https://moviecatalog.vercel.app/",
    gitHubPage: "https://github.com/ukoricpaw/moviecatalog"
  },
  {
    name: "Weather App",
    path: w_image,
    stack: [icons["react"], icons["redux"], icons["typescript"], icons["openweatherapi"], icons["sass"]],
    site: "https://weather-app-mis7.vercel.app/",
    gitHubPage: "https://github.com/ukoricpaw/WeatherApp"
  },
]