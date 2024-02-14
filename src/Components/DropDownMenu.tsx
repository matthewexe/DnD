import React, { useState } from 'react';

const DropdownMenu = () => {
  // Stato per gestire la visibilità del menu a tendina
  const [isOpen, setIsOpen] = useState(false);

  // Funzione per alternare lo stato di visibilità
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleDropdown}>
        Menu
      </button>
      {isOpen && (
        <ul>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
