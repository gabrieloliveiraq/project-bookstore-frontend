import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './DataSearch'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 355, #326589 100%);
    color: #fff;
    text-align: center;
    padding: 8px 0;
    height: 270px;
    width: 100%;
`
const Title = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
`
const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 50px;
`
const ResultSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:20px ;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 200px;
    }
    &:hover {
        border: 1px solid #f4ff33;
    }
`
function Search() {
    const [typedBooks, setTypedBooks] = useState([])
    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input
                placeholder='Escreva sua próxima leitura'
                onBlur={event => {
                    const typedText = event.target.value
                    const resultSearch = livros.filter(item => item.name.includes(typedText))
                    setTypedBooks(resultSearch)
                }}
            />
            {typedBooks.map(item => (
                <ResultSearch>
                    <p>{item.name}</p>
                    <img src={item.src} alt='img book' />
                </ResultSearch>
            ))}
        </SearchContainer>
    )
}

export default Search