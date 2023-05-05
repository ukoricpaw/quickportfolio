import { FC } from "react"
import avatar from "../assets/avatar.png"

const Avatar: FC = () => {
  return (
    <div className="avatarContainer"><img className="avatarImage" src={avatar} /></div>
  )
}

export default Avatar