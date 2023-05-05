import { FC } from 'react'
import Avatar from './Avatar'

const About: FC = () => {
  return (
    <div className='aboutSection'>
      <Avatar />
      <div className='ownInfo'>
        <h1 className="nameTitle">I'm Artem Khegai</h1>
        <h2 className='aboutInfo'>I utilize my technical skills and creativity to design and develop intuitive and user-friendly web applications.</h2>
      </div>
    </div>
  )
}

export default About