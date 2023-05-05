import { FC } from 'react'
import githubIcon from ".././assets/github_icon.png"
import { ProjectProp } from '../utils/ProjectList'


interface projectItemInterface {
  item: ProjectProp
}

const ProjectItem: FC<projectItemInterface> = ({ item }) => {
  return (
    <div className="projectItem" key={item.name}>
      <div className="imageContainer">
        <img className="projectPicture" src={item.path} />
      </div>
      <div className='projectInfo'>
        <p className="projectTitle">{item.name}</p>
        <div className='stackInfo'>{item.stack.map((item) =>
          <div className='stackIconContainer' key={item.path}>
            <img className='icon' src={item.path} title={item.name} />
          </div>)}</div>
        <div className='buttonsContainer'>
          <a href={item.site} target='_blank'><button className='visitSiteBtn'>visit</button></a>
          <a href={item.gitHubPage} target='_blank'><button className='visitGithubPage'><img className='gitHubIcon' src={githubIcon} /></button></a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem