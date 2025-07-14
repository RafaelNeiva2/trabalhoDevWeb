import { useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import HomePage from './pages/Homepage';
import InscricoesPage from './pages/InscricaoPage';
import PercursoPage from './pages/PercursoPage';
import ContatoPage from './pages/ContatoPage';


import Footer from './components/Footer';
import LojaPage from './pages/LojaPage';

function App() {
  
  
  useEffect(() => {
    
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        
          <Route path="/inscricoes" element={<InscricoesPage />} />

          <Route path="/loja" element={<LojaPage />} />

          <Route path="/percurso" element={<PercursoPage />} />

          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </main>


      <Footer />
    </BrowserRouter>
  );
}

export default App;