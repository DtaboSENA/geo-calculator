import React from 'react';

function FigureSelector({ onSelectType }) {
  return (
    <div>
      <h2>Selecciona el tipo de figura</h2>
      <div className='figures-wrapper'>
        <button onClick={() => onSelectType('planas')}>Figuras Planas</button>
        <button onClick={() => onSelectType('solidas')}>Figuras Sólidas</button>
      </div>
      <hr />
    </div>
  );
}

export default FigureSelector;
