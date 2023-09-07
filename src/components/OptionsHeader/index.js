import './style.css'

const optionsHeader = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OptionsHeader() {
    return (
        <ul className='options'>
          {optionsHeader.map((texto) => (
            <li className='option'><p>{texto}</p></li>
          ))}
        </ul>
    )
}

export default OptionsHeader