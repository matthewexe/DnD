import React, { useState } from 'react';
import { useGetRacesQuery, useGetClassesQuery } from './api'; // Usa le hooks generate

const CharacterSheet = () => {
  const [selectedRace, setSelectedRace] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const { razza: races } = useGetRacesQuery();
  const { classe: classes } = useGetClassesQuery();

  return (
    <div>
      <h2>Scheda Personaggio</h2>
      <div>
        <label>Razza:</label>
        <select value={selectedRace} onChange={(e) => setSelectedRace(e.target.value)}>
          {races?.results.map((race) => (
            <option key={race.index} value={race.index}>
              {race.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Classe:</label>
        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
          {classes?.results.map((cls) => (
            <option key={cls.index} value={cls.index}>
              {cls.name}
            </option>
          ))}
        </select>
      </div>
      {/* Qui puoi aggiungere ulteriori dettagli e logica per popolare la scheda */}
    </div>
  );
};

export default CharacterSheet;
