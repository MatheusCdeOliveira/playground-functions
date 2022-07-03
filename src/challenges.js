// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
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
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 !== 0 && numeros[index] % 5 !== 0) {
      arrayString.push('bug!');
    }
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      arrayString.push('fizzBuzz');
    } else if (numeros[index] % 3 === 0) {
      arrayString.push('fizz');
    } else if (numeros[index] % 5 === 0) {
      arrayString.push('buzz');
    }
  }
  return arrayString;
}

// Desafio 9
function encode(frase) {
  let result = frase
    .replaceAll('a', '1')
    .replaceAll('e', '2')
    .replaceAll('i', '3')
    .replaceAll('o', '4')
    .replaceAll('u', '5');

  return result;
}

function decode(frase2) {
  let result2 = frase2
    .replaceAll('1', 'a')
    .replaceAll('2', 'e')
    .replaceAll('3', 'i')
    .replaceAll('4', 'o')
    .replaceAll('5', 'u');

  return result2;
}

// Desafio 10
function techList(array, string) {
  let arrayObjetos = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  array = array.sort();
  for (let index = 0; index < array.length; index += 1) {
    arrayObjetos.push({ name: string, tech: array[index] });
  }
  return arrayObjetos;
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
