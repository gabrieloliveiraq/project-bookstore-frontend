import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'

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
    margin-top: 100px;
`
const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 50px;
`

function Search() {
    const [typedText, setTypedText] = useState('')

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input
                placeholder='Escreva sua próxima leitura'
                onBlur={event => setTypedText(event.target.value)}
                />
                <p>{typedText}</p>
        </SearchContainer>
    )
}

export default Search