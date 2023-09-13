import styled from 'styled-components'
import { livros } from "./dataLastReleases"
import { Title } from "../Title"
import Recommends from "../Recommends"
import ImageRecommends from '../../images/livro2.png'

const ContainerReleases = styled.section`
    background-color: #FFF;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
function LastReleases() {
    return (
        <ContainerReleases>
            <Title
                color='#EB9B00'
                fontSize='36px'
            >ÚLTIMOS LANÇAMENTOS</Title>
            <NewBooksContainer>
                {livros.map(item => (
                    <img src={item.src} alt='lastReleases' />
                ))}
            </NewBooksContainer>
            <Recommends 
            title='Talvez você se interesse por...'
            subtitle='Angular 11'
            description='Construindo uma aplicação integrada com a plataforma Google.'
            image={ImageRecommends}/>
        </ContainerReleases>
    )
}

export default LastReleases