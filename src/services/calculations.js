export function calculateGeometry(figure, inputs) {
  let perimeter = 0;
  let area = 0;
  let volume = 0;

  const a = inputs.a;
  const { a: pa, b: pb, c: pc } = inputs;
  const { r: cr, h: ch } = inputs;
  const er = inputs.r;
  const { r: cor, h: coh } = inputs;
  const ta = inputs.a;
  
  switch (figure) {
    case 'cubo':
      perimeter = 12 * a;
      area = 6 * a * a;
      volume = a * a * a;
      break;
    case 'prisma':
      perimeter = 4 * (pa + pb + pc);
      area = 2 * (pa * pb + pb * pc + pa * pc);
      volume = pa * pb * pc;
      break;
    case 'cilindro':
      perimeter = 2 * Math.PI * cr;
      area = 2 * Math.PI * cr * (cr + ch);
      volume = Math.PI * cr * cr * ch;
      break;
    case 'esfera':
      perimeter = 0; // no tiene perímetro
      area = 4 * Math.PI * er * er;
      volume = (4 / 3) * Math.PI * er * er * er;
      break;
    case 'cono':
      perimeter = 2 * Math.PI * cor;
      area = Math.PI * cor * (cor + Math.sqrt(coh * coh + cor * cor));
      volume = (1 / 3) * Math.PI * cor * cor * coh;
      break;
    case 'tetraedro':
      perimeter = 6 * ta;
      area = Math.sqrt(3) * ta * ta;
      volume = (Math.sqrt(2) / 12) * ta * ta * ta;
      break;
    default:
      break;
  }

  return { perimeter, area, volume };
}
