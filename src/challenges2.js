// Desafio 11
function confirmaNumOne(numTel) {
  let numeroValidado = true;
  for (let valor of numTel) {
    if (valor < 0 || valor > 9) {
      numeroValidado = false;
    }
  }
  return numeroValidado;
}

function confirmaNumTwo(numTel) {
  for (let valor2 of numTel) {
    if (numTel.filter((numeros) => numeros === valor2).length >= 3) {
      return false;
    }
  }
}

function generatePhoneNumber(numTel) {
  if (numTel.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (confirmaNumOne(numTel) === false || confirmaNumTwo(numTel) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let telefone = numTel.join('');
  let resultado = telefone.replace(/(\d{0})(\d{2})(\d{0})(\d{5})/, '$1($2)$3 $4-'); 
  // let resultado = telefone.replace(
  //   /(\d{0})(\d{2})(\d{0})(\d{5}/,
  //   '$1($2)$3 $4-'
  // );
  return resultado;
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
  for (let valor of string) {
    if (valor >= 1 && valor <= 9) {
      let valorNum = parseInt(valor);
      quantidade += valorNum;
    }
  }
  if (quantidade === 1) {
    return quantidade + ' copo de água';
  } else {
    return quantidade + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
