import style from './Sobre.module.css'
import { useCounterContext } from '../hooks/useCounterContext'

const Sobre = () => {
  const { counter } = useCounterContext()

  return (
    <div className={style.sobre}>
      <h1>Sobre</h1>
      <p>Valor de counter no contexto é {counter}</p>
    </div>
  )
}

export default Sobre