import './style.css'
import profile from '../../images/perfil.svg'
import checkout from '../../images/sacola.svg'

const icons = [profile, checkout]

function IconsHeader() {
    return (
        <ul className='icons'>
        {icons.map((icon) => (
          <li className='icon'><img src={icon} alt='icons' /></li>
        ))}
      </ul>
    )
}

export default IconsHeader