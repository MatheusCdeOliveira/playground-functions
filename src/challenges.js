// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ',' + ' ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  return vitoria + empate;
}

// Desafio 6
function highestCount(arrayNum) {
  let maiorNum = Math.max.apply(null, arrayNum);
  let result = 0;
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] === maiorNum) result += 1;
  }

  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(Math.abs(cat1) - Math.abs(mouse));
  let distancia2 = Math.abs(Math.abs(cat2) - Math.abs(mouse));
  if (distancia1 > distancia2) {
    return 'cat2';
  } else if (distancia1 < distancia2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros) {
  let arrayString = [];
  for (index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 !== 0 && numeros[index] % 5 !== 0){
      arrayString.push('bug!')
    }
    if(numeros[index] % 3 === 0 && numeros[index] % 5 === 0){
      arrayString.push('fizzBuzz')
    } else if (numeros[index] % 3 === 0) {
      arrayString.push('fizz')
    } else if(numeros[index] % 5 === 0){
      arrayString.push('buzz')
    }
  }
  return arrayString;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
