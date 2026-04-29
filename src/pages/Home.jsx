import style from './Home.module.css'

// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'
import { useCounterContext } from '../hooks/useCounterContext'

const Home = () => {
  // const {counter} = useContext(CounterContext)

  // utilizando o contexto via hook
  const { counter } = useCounterContext();
  
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