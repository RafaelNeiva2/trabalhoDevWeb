// src/components/AthletesList.tsx
import { useState } from 'react';

const allAthletes = [
  { id: 1, number: '101', name: 'Thiago Vinhal' },
  { id: 2, number: '102', name: 'Rodrigo Loiola' },
  { id: 3, number: '103', name: 'Rafael Falsarella' },
  { id: 4, number: '104', name: 'Lah Fabrini' },
];

function AthletesList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAthletes = allAthletes.filter(athlete =>
    athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    athlete.number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Atletas Inscritos</h2>

      {/* Campo de Pesquisa */}
      <div className="row mb-3">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar por nome ou número"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Lista de Atletas */}
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <ul className="list-group">
            {filteredAthletes.map(athlete => (
              <li key={athlete.id} className="list-group-item">
                #{athlete.number} - {athlete.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AthletesList;