import React, { useState } from 'react';
import Layout from './components/Layout';
import FigureSelector from './components/FigureSelector';
import FigureForm from './components/FigureForm';
import Results from './components/Results';

function App() {
  const [figureType, setFigureType] = useState('');
  const [figure, setFigure] = useState('');
  const [results, setResults] = useState(null);

  const handleFigureTypeChange = (type) => {
    setFigureType(type);
    setFigure('');
    setResults(null);
  };

  const handleFigureChange = (figure) => {
    setFigure(figure);
    setResults(null);
  };

  const handleCalculate = (result) => {
    setResults(result);
  };

  return (
    <Layout>
      <h1>Calculadora Geométrica</h1>
      <FigureSelector onSelectType={handleFigureTypeChange} />
      {figureType && (
        <FigureForm
          figureType={figureType}
          figure={figure}
          onFigureChange={handleFigureChange}
          onCalculate={handleCalculate}
        />
      )}
      {results && <Results results={results} />}
    </Layout>
  );
}

export default App;
