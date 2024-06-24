function Results({ results }) {
  return (
    <div>
      <hr />
      <h2>Resultados:</h2>
      <p>Perímetro: {results.perimeter} Unidades</p>
      <p>Área: {results.area} Unidades</p>
      <p>Volumen: {results.volume} Unidades</p>
    </div>
  );
}

export default Results;
