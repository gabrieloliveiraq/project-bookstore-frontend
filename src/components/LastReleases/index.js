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
    margin-top: 20px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
const ImageNewBooks = styled.img`
    padding: 30px;
    width: 15%;
    height: 15%;
    cursor: pointer;
    border: 1px solid #FFF;
    
    border-radius: 50px;
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
                    <ImageNewBooks src={item.src} alt='lastReleases' />
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