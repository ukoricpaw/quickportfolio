import { FC } from 'react'
import telegram from "../assets/telegram.png"

const Contacts: FC = () => {
  return (
    <div className='contactsContainer'>
      <h3 className='contactsTitle'>Contact me:</h3>
      <div className='contactsIconContainer'>
        <a href="https://t.me/temyy44" target='_blank'><img className='contactIcon' src={telegram} /></a>
      </div>
    </div>
  )
}

export default Contacts