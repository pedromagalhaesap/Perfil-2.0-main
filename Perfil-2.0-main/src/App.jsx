import GlobalStyle from './styles/global'
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { MeuPerfil } from './pages/MeuPerfil';

function App() {
  return (
    <>   
      <Router>
        <Routes>
          <Route path="/" element={<MeuPerfil/>} />
        </Routes>
   
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
