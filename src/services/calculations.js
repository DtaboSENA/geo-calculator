export function calculateGeometry(figureType, figure, inputs) {
  let perimeter = 0;
  let area = 0;
  let volume = 0;
  let formula = '';

  switch (figure) {
    case 'trapecioIsosceles':
      const { a: tia, b: tib, c: tic, h: tih } = inputs;
      perimeter = tia + tib + 2 * tic;
      area = ((tia + tib) * tih) / 2;
      volume = null;
      formula = `Perímetro: ${tia} + ${tib} + 2 * ${tic} = ${perimeter} Unidades, Área: ((${tia} + ${tib}) * ${tih}) / 2 = ${area} Unidades`;
      break;
    case 'romboide':
      const { a: ra, h: rh } = inputs;
      perimeter = 2 * (ra + rh);
      area = ra * rh;
      volume = null;
      formula = `Perímetro: 2 * (${ra} + ${rh}) = ${perimeter} Unidades, Área: ${ra} * ${rh} = ${area} Unidades`;
      break;
    case 'hexagonoRegular':
      const { a: ha } = inputs;
      perimeter = 6 * ha;
      area = (3 * Math.sqrt(3) * ha ** 2) / 2;
      volume = null;
      formula = `Perímetro: 6 * ${ha} = ${perimeter} Unidades, Área: (3 * sqrt(3) * ${ha}^2) / 2 = ${area} Unidades`;
      break;
    case 'pentagonoRegular':
      const { a: pa } = inputs;
      perimeter = 5 * pa;
      area = (pa ** 2 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5)))) / 4;
      volume = null;
      formula = `Perímetro: 5 * ${pa} = ${perimeter} Unidades, Área: (${pa}^2 * sqrt(5 * (5 + 2 * sqrt(5)))) / 4 = ${area} Unidades`;
      break;
    case 'trapezoide':
      const { a: tza, b: tzb, c: tzc, d: tzd, h: tzh } = inputs;
      perimeter = tza + tzb + tzc + tzd;
      area = ((tza + tzb) * tzh) / 2;
      volume = null;
      formula = `Perímetro: ${tza} + ${tzb} + ${tzc} + ${tzd} = ${perimeter} Unidades, Área: ((${tza} + ${tzb}) * ${tzh}) / 2 = ${area} Unidades`;
      break;
    case 'elipse':
      const { a: ea, b: eb } = inputs;
      perimeter = Math.PI * (3 * (ea + eb) - Math.sqrt((3 * ea + eb) * (ea + 3 * eb)));
      area = Math.PI * ea * eb;
      volume = null;
      formula = `Perímetro: π * (3 * (${ea} + ${eb}) - sqrt((3 * ${ea} + ${eb}) * (${ea} + 3 * ${eb}))) = ${perimeter} Unidades, Área: π * ${ea} * ${eb} = ${area} Unidades`;
      break;
    case 'cubo':
      const { a: ca } = inputs;
      perimeter = null;
      area = 6 * ca ** 2;
      volume = ca ** 3;
      formula = `Área: 6 * ${ca}^2 = ${area} Unidades, Volumen: ${ca}^3 = ${volume} Unidades`;
      break;
    case 'prismaRectangular':
      const { a: pra, b: prb, c: prc } = inputs;
      perimeter = null;
      area = 2 * (pra * prb + pra * prc + prb * prc);
      volume = pra * prb * prc;
      formula = `Área: 2 * (${pra} * ${prb} + ${pra} * ${prc} + ${prb} * ${prc}) = ${area} Unidades, Volumen: ${pra} * ${prb} * ${prc} = ${volume} Unidades`;
      break;
    case 'cilindro':
      const { r: cr, h: ch } = inputs;
      perimeter = null;
      area = 2 * Math.PI * cr * (cr + ch);
      volume = Math.PI * cr ** 2 * ch;
      formula = `Área: 2 * π * ${cr} * (${cr} + ${ch}) = ${area} Unidades, Volumen: π * ${cr}^2 * ${ch} = ${volume} Unidades`;
      break;
    case 'esfera':
      const { r: er } = inputs;
      perimeter = null;
      area = 4 * Math.PI * er ** 2;
      volume = (4 / 3) * Math.PI * er ** 3;
      formula = `Área: 4 * π * ${er}^2 = ${area} Unidades, Volumen: (4 / 3) * π * ${er}^3 = ${volume} Unidades`;
      break;
    case 'cono':
      const { r: cor, h: coh } = inputs;
      perimeter = null;
      const l = Math.sqrt(cor ** 2 + coh ** 2); // generatriz
      area = Math.PI * cor * (cor + l);
      volume = (1 / 3) * Math.PI * cor ** 2 * coh;
      formula = `Área: π * ${cor} * (${cor} + sqrt(${cor}^2 + ${coh}^2)) = ${area} Unidades, Volumen: (1 / 3) * π * ${cor}^2 * ${coh} = ${volume} Unidades`;
      break;
    case 'tetraedroRegular':
      const { a: ta } = inputs;
      perimeter = null;
      area = Math.sqrt(3) * ta ** 2;
      volume = (ta ** 3 / (6 * Math.sqrt(2)));
      formula = `Área: sqrt(3) * ${ta}^2 = ${area} Unidades, Volumen: ${ta}^3 / (6 * sqrt(2)) = ${volume} Unidades`;
      break;
    default:
      break;
  }

  return { perimeter, area, volume, formula };
}
