import logo from '../../images/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    margin-left: 1%;
`

const LogoImg = styled.img`
    width: 48px;
    height: 48px;
    margin-top: 19px;
    
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt={'logo'} className='logo-img'></LogoImg>
            <p><strong>Book</strong>Store</p>
        </LogoContainer>
    )
}

export default Logo