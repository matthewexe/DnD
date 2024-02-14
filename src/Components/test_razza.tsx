import React, { useState, useEffect } from 'react';

import { useGetRacesByIndexQuery } from '../services/api';

const raceOptions = [
  'dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf',
  'half-orc', 'halfling', 'human', 'tiefling'
];

const DropDownMenuWithApi = () => {
  const [selectedRace, setSelectedRace] = useState('');
  const [raceDetails, setRaceDetails] = useState(null);

  useEffect(() => {
    if (!selectedRace) return;

    const fetchRaceDetails = async () => {
      // Questa funzione simula la chiamata API
      // Nella realtà, qui useresti getRaceDetails(selectedRace) o una funzione simile
      const details = await useGetRacesByIndexQuery(selectedRace);
      setRaceDetails(details);
    };

    fetchRaceDetails();
  }, [selectedRace]);

  return (
    <div>
      <select onChange={(e) => setSelectedRace(e.target.value)} value={selectedRace}>
        <option value="">Seleziona una razza</option>
        {raceOptions.map((race) => (
          <option key={race} value={race}>{race}</option>
        ))}
      </select>
      {raceDetails && (
        <div>
          {/* Visualizza i dettagli della razza qui */}
        </div>
      )}
    </div>
  );
};

export default DropDownMenuWithApi;
