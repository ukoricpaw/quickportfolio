import { FC } from 'react'
import { getAllProjectList } from '../utils/ProjectList'
import ProjectItem from './ProjectItem'

const ProjectList: FC = () => {
  return (
    <div className="projectList">
      <h2 className='petProjectsTitle'>Pet Projects</h2>
      {getAllProjectList.map((item) =>
        <ProjectItem item={item} />
      )}
    </div>
  )
}

export default ProjectList