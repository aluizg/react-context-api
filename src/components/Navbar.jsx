import style from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  // Função que centraliza a lógica do estilo
  const checkActive = ({ isActive }) => (isActive ? style.active : undefined);

  return (
    <nav className={style.navbar}>
      <ul>
        <li><NavLink className={checkActive} to="/">Home</NavLink></li>
        <li><NavLink className={checkActive} to="/contato">Contato</NavLink></li>
        <li><NavLink className={checkActive} to="/sobre">Sobre</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar