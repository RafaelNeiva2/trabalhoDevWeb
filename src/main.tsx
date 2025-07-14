// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// =====================================================================
// 1. IMPORTAÇÃO DOS ESTILOS (A ORDEM IMPORTA!)
// =====================================================================

// Primeiro, importamos o CSS das bibliotecas externas.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Depois, importamos nossos arquivos de CSS customizados.
// Eles vêm por último para que possam sobrescrever os estilos do Bootstrap.
import './index.css'; // Seu CSS customizado que veio do projeto original
import './index.css';  // CSS geral criado pelo Vite (opcional, pode ser modificado ou removido)


// =====================================================================
// 2. IMPORTAÇÃO DO JAVASCRIPT DO BOOTSTRAP
// =====================================================================

// Essencial para fazer os componentes interativos do Bootstrap funcionarem
// (como o Carrossel, Modal, Abas, Dropdowns, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// =====================================================================
// 3. RENDERIZAÇÃO DA APLICAÇÃO REACT
// =====================================================================

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)