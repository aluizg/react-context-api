import style from './Home.module.css'

import { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'

const Home = () => {
const {counter} = useContext(CounterContext)

  return (
    <div className={style.home}>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* Alterar o valor do contexto */}
      <ChangeCounter />
    </div>
  )
}

export default Home