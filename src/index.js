module.exports = function solveEquation(equation) {
  const split = equation.split(' ');

  //Подготовка индексов
  const a = +split[0];
  const firstOp = split[3];
  const b = +split[4] * (firstOp == '+' ? 1 : -1);
  const secondOp = split[7];
  const c = +split[8] * (secondOp == '+' ? 1 : -1);;

  //Считаем корни
  const D = Math.pow(b, 2) - 4*a*c;
  const x1 = ( -b + Math.sqrt(D) ) / (2 * a);
  const x2 = ( -b - Math.sqrt(D) ) / (2 * a);

  const result = [ Math.round(x1), Math.round(x2) ];

  return result.sort( (a, b) => a - b );
}