import ProjectList from "./components/ProjectList"
import About from "./components/About"
import Skills from "./components/Skills"
import { FC } from "react"
import Contacts from "./components/Contacts"

const App: FC = () => {
  return (
    <div className="contentWrapper">
      <div className="aboutWrapper">
        <About />
        <Skills />
        <Contacts />
      </div>
      <ProjectList />
    </div>
  )
}

export default App