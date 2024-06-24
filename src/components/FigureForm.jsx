import React, { useState } from 'react';
import { calculateGeometry } from '../services/calculations';

function FigureForm({ figureType, figure, onFigureChange, onCalculate }) {
  const [inputs, setInputs] = useState({});

  const handleFigureChange = (e) => {
    onFigureChange(e.target.value);
    setInputs({});
  };

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateGeometry(figureType, figure, inputs);
    onCalculate(result);
  };

  const figureOptions = {
    planas: [
      { id:'trapecioIsosceles', name: 'Trapecio Isosceles' },
      { id:'romboide', name: 'Romboide' },
      { id:'hexagonoRegular', name: 'Hexagono Regular' },
      { id:'pentagonoRegular', name: 'Pentágono Regular' },
      { id:'trapezoide', name: 'Trapezoide' },
      { id:'elipse', name: 'Elipse' }
    ],
    solidas: [
      { id: 'cubo', name: 'Cubo' },
      { id: 'prismaRectangular', name: 'Prisma Rectangular' },
      { id: 'cilindro', name: 'Cilindro' },
      { id: 'esfera', name: 'Esfera' },
      { id: 'cono', name: 'Cono' },
      { id: 'tetraedroRegular', name: 'Tetraedro Regular' }
    ]
  };

  const inputFields = {
    trapecioIsosceles: [
      { name: 'a', label: 'Base Mayor' },
      { name: 'b', label: 'Base Menor' },
      { name: 'c', label: 'Lado' },
      { name: 'h', label: 'Altura' }
    ],
    romboide: [
      { name: 'a', label: 'Base' },
      { name: 'h', label: 'Altura' }
    ],
    hexagonoRegular: [
      { name: 'a', label: 'Lado' }
    ],
    pentagonoRegular: [
      { name: 'a', label: 'Lado' }
    ],
    trapezoide: [
      { name: 'a', label: 'Base Mayor' },
      { name: 'b', label: 'Base Menor' },
      { name: 'c', label: 'Lado' },
      { name: 'd', label: 'Lado' },
      { name: 'h', label: 'Altura' }
    ],
    elipse: [
      { name: 'a', label: 'Semieje Mayor' },
      { name: 'b', label: 'Semieje Menor' }
    ],
    cubo: [
      { name: 'a', label: 'Lado' }
    ],
    prismaRectangular: [
      { name: 'a', label: 'Largo' },
      { name: 'b', label: 'Ancho' },
      { name: 'c', label: 'Altura' }
    ],
    cilindro: [
      { name: 'r', label: 'Radio' },
      { name: 'h', label: 'Altura' }
    ],
    esfera: [
      { name: 'r', label: 'Radio' }
    ],
    cono: [
      { name: 'r', label: 'Radio' },
      { name: 'h', label: 'Altura' }
    ],
    tetraedroRegular: [
      { name: 'a', label: 'Lado' }
    ]
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Seleccione la figura:
        <select value={figure} onChange={handleFigureChange}>
          <option value="">--Seleccione--</option>
          {figureOptions[figureType].map((fig) => (
            <option key={fig.id} value={fig.id}>
              {fig.name}
            </option>
          ))}
        </select>
      </label>
      {figure && (
        <div>
          {inputFields[figure].map((field) => (
            <div key={field.name}>
              <label>
                {field.label}:
                <input
                  type="number"
                  name={field.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
          ))}
        </div>
      )}
      <button type="submit">Calcular</button>
    </form>
  );
}

export default FigureForm;
