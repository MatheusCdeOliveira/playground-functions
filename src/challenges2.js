// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineB + lineA) {
    return true;
  }
  return false;

  // if (lineA < Math.abs(lineB % lineC) && lineB < Math.abs(lineA % lineC) && lineC < Math.abs(lineB % lineA)) {
  //   return false

  // }
}
// Desafio 13
function hydrate(string) {
  let quantidade = 0;
  for(let valor of string){
    if (valor >= 1 && valor <= 9){
      let valorNum = parseInt(valor)
      quantidade += valorNum
    }
  }
  if(quantidade === 1){
  return quantidade + ' copo de água'
  } else {
    return quantidade + ' copos de água'
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
