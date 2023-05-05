import { FC } from 'react'
import { getAllProjectList } from '../utils/ProjectList'
import githubIcon from ".././assets/github_icon.png"

const ProjectList: FC = () => {
  return (
    <div className="projectList">
      <h2 className='petProjectsTitle'>Pet Projects</h2>
      {getAllProjectList.map((item) =>
        <div className="projectItem" key={item.name}>
          <div className="imageContainer">
            <img className="projectPicture" src={item.path} />
          </div>
          <div className='projectInfo'>
            <p className="projectTitle">{item.name}</p>
            <div className='stackInfo'>{item.stack.map((item) =>
              <div className='stackIconContainer' key={item}>
                <img className='icon' src={item} />
              </div>)}</div>
            <div className='buttonsContainer'>
              <a href={item.site} target='_blank'><button className='visitSiteBtn'>visit</button></a>
              <a href={item.gitHubPage} target='_blank'><button className='visitGithubPage'><img className='gitHubIcon' src={githubIcon} /></button></a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectList