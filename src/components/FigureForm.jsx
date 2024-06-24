import { useState } from 'react';
import { calculateGeometry } from '../services/calculations';


function FigureForm({ onCalculate }) {
  const [figure, setFigure] = useState('');
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: parseFloat(e.target.value),
    });

  };

  const handleFigureChange = (e) => {
    setFigure(e.target.value);
    setInputs({});
    onCalculate(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateGeometry(figure, inputs);
    onCalculate(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Seleccione la figura:</span>
        <select value={figure} onChange={handleFigureChange}>
          <option value="">--Seleccione--</option>
          <option value="cubo">Cubo</option>
          <option value="prisma">Prisma Rectangular</option>
          <option value="cilindro">Cilindro</option>
          <option value="esfera">Esfera</option>
          <option value="cono">Cono</option>
          <option value="tetraedro">Tetraedro Regular</option>
        </select>
      </label>
      {figure && (
        <div>
          {figure === 'cubo' && (
            <div className="specs" >
              <label>
                <span>Lado:</span>
                <input type="number" name="a" onChange={handleInputChange} required />
                <span>Unidades</span>
              </label>
            </div>
          )}
          {figure === 'prisma' && (
            <div className="specs" >
              <label>
                <span>Largo:</span>
                <input type="number" name="a" onChange={handleInputChange} required />
                <span>Unidades</span>
              </label>
              <label>
                <span>Ancho:</span>
                <input type="number" name="b" onChange={handleInputChange} required />
                <span>Unidades</span>
              </label>
              <label>
                <span>Altura:</span>
                <input type="number" name="c" onChange={handleInputChange} required />
                <span>Unidades</span>
              </label>
            </div>
          )}
          {figure === 'cilindro' && (
            <div className="specs" >
              <label>
                <span>Radio:</span>
                <input type="number" name="r" onChange={handleInputChange} required />
                <span>Unidades</span>
              </label>
              <label>
                <span>Altura:</span>
                <input type="number" name="h" onChange={handleInputChange} required />
                <span>Unidades</span>
              </label>
            </div>
          )}
          {figure === 'esfera' && (
            <div className="specs" >
              <label>
                <span>Radio:</span>
                <input type="number" name="r" onChange={handleInputChange} required />
                <span>Unidades</span>
              </label>
            </div>
          )}
          {figure === 'cono' && (
            <div className="specs" >
              <label>
                <span>Radio:</span>
                <input type="number" name="r" onChange={handleInputChange} required />
                <span>Unidades</span>
              </label>
              <label>
                <span>Altura:</span>
                <input type="number" name="h" onChange={handleInputChange} required />
                <span>Unidades</span>
              </label>
            </div>
          )}
          {figure === 'tetraedro' && (
            <div className="specs" >
              <label>
                <span>Lado:</span>
                <input type="number" name="a" onChange={handleInputChange} required />
                <span>Unidades</span>
              </label>
            </div>
          )}
        </div>
      )}
      <button type="submit">Calcular</button>
    </form>
  );
}

export default FigureForm;
