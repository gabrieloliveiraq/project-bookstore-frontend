import styled from 'styled-components'

const optionsHeader = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE', 'SOBRE']

const OptionsContainer = styled.ul`
  display: flex;
`
const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
function OptionsHeader() {
    return (
        <OptionsContainer>
          {optionsHeader.map((texto) => (
            <Option><p>{texto}</p></Option>
          ))}
        </OptionsContainer>
    )
}

export default OptionsHeader