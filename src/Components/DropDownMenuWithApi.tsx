import React, { useState, useEffect } from 'react';
// Assumi che getRaces sia la funzione importata da api.ts che effettua la chiamata API
import { useGetRacesByIndexQuery } from '../services/api';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchRaces = async () => {
      try {
        // Assumi che getRaces() restituisca un array di razze
        const response = await useGetRacesByIndexQuery();
        if (response.ok) {
          const data = await response.json();
          setOptions(data.results); // o adatta in base al formato della risposta
        }
      } catch (error) {
        console.error("Errore nel recupero delle razze:", error);
      }
    };

    fetchRaces();
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleDropdown}>Razze</button>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option.id}>{option.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
