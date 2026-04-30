import style from './Home.module.css'

import ChangeCounter from '../components/ChangeCounter'
import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
  // utilizando o contexto via hook
  const { counter } = useCounterContext();
  const { color, dispatch } = useTitleColorContext();

  // Alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color })
  }

  return (
    <div className={style.home}>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* Alterar o valor do contexto */}
      <ChangeCounter />
      {/* Alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home