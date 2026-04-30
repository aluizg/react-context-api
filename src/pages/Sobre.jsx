import style from './Sobre.module.css'
import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Sobre = () => {
  const { counter } = useCounterContext()
  const { color } = useTitleColorContext()

  return (
    <div className={style.sobre}>
      <h1 style={{ color: color }}>Sobre</h1>
      <p>Valor de counter no contexto é {counter}</p>
    </div>
  )
}

export default Sobre