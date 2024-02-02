import React, { useState } from 'react';
import './App.css';

function App() {
  const [contatos, setContatos] = useState([
    { id: 1, nome: 'Ratinha', numero: '123456789' },
    { id: 2, nome: 'Maria', numero: '987654321' },
    { id: 3, nome: 'Tai amor', numero: '987654321' },
    // Adicione mais contatos conforme necessário
  ]);

  return (
    <div className="App">
      <h1>Lista de Contatos</h1>
      <ul>
        {contatos.map(contato => (
          <li key={contato.id}>
            <strong>{contato.nome}</strong>: {contato.numero}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
