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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
