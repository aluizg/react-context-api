// CSS
import './App.css'

// Configuracao do react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componentes
import Navbar from './components/Navbar'

// Paginas
import Home from './pages/Home'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'

function App() {

  return (
    <>
      <div className='App'>
        <h1>React Context APP</h1>
        <BrowserRouter>
          {/* Componente de navegação */}
          <Navbar />
          {/* Definicao das rotas da aplicacao */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/sobre' element={<Sobre />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
