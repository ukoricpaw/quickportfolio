import { FC } from 'react'
import { skillsIcons } from '../utils/ProjectList'

const Skills: FC = () => {

  const IconsValues = Object.values(skillsIcons)
  const IconsKeys = Object.keys(skillsIcons)

  return (
    <div className='skillsContainer'>
      <h3 className='skillsTitle'>Skills</h3>
      <div className='skillsList'>{IconsValues.map((icon, index) => <div key={index} className='iconContainer'><img className='stackIcon' src={icon} />
        <p className='hiddenInfo'>{IconsKeys[index]}</p>
      </div>)}</div>
    </div>
  )
}

export default Skills