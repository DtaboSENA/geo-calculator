import React from 'react';

function Results({ results }) {

  const renderPerimeter = () => {
    if (results.perimeter) {
      return <p>Perímetro: {results.perimeter} Unidades</p>;
    }
  }

  const renderVolume = () => {
    if (results.volume) {
      return <p>Volumen: {results.volume} Unidades</p>;
    }
  }

  return (
    <div>
      <hr />
      <h2>Resultados:</h2>
      {renderPerimeter()}
      <p>Área: {results.area} Unidades</p>
      {renderVolume()}
      <hr />
      <p className='formula'>
        <span>Fórmula aplicada:</span>
        <span>{results.formula.split(',')[0]}</span>
        <span>{results.formula.split(',')[1]}</span>
      </p>
    </div>
  );
}

export default Results;
