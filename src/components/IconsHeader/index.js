import profile from '../../images/perfil.svg'
import checkout from '../../images/sacola.svg'
import styled from 'styled-components'

const icons = [profile, checkout]

const IconsContainer = styled.ul`
    display: flex;
    align-items: center;
` 

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`

function IconsHeader() {
    return (
        <IconsContainer>
        {icons.map((icon) => (
          <Icon><img src={icon} alt='icons'/></Icon>
        ))}
      </IconsContainer>
    )
}

export default IconsHeader