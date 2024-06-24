import { useState } from "react";
import FigureForm from "./FigureForm";
import Results from "./Results";

function Layout() {
  const [results, setResults] = useState(null);

  const handleCalculate = (result) => {
    setResults(result);
  };

  return (
    <div className="container">
      <h1>Calculadora Geométrica</h1>
      <FigureForm onCalculate={handleCalculate} />
      {results && <Results results={results} />}
    </div>
  );
}

export default Layout;