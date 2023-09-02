import './App.css';
import Logo from './components/Logo/index.js';
import profile from './images/perfil.svg'
import checkout from './images/sacola.svg'

const optionsHeader = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icons = [profile, checkout]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='options'>
          {optionsHeader.map((texto) => (
            <li className='option'><p>{texto}</p></li>
          ))}
        </ul>
        
        <ul className='icons'>
          {icons.map((icon) => (
            <li className='icon'><img src={icon} alt='icons' /></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
