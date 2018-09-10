module.exports = function solveEquation(equation) {
  var split = equation.split(' ');

  //Подготовка индексов
  var a = +split[0];
  var firstOp = split[3];
  var b = +split[4];
  if(firstOp == '-') { b = -b; };
  var secondOp = split[7];
  var c = +split[8];
  if(secondOp == '-') { c = -c; };

  //Считаем корни
  var D = Math.pow(b, 2) - 4 * a * c;
  var x1 = ( -b + Math.sqrt(D) )/(2 * a);
  var x2 = ( -b - Math.sqrt(D) )/(2 * a);

  var result = [];

  if(x1 > x2){
    result.push( Math.round(x2) );
    result.push( Math.round(x1) );  
  } else {
    result.push( Math.round(x1) );
    result.push( Math.round(x2) );
  }

  return result;
}