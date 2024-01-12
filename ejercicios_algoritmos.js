// Dada la siguiente problemática: ¿puede un número X formarse
// usando la suma de 2 elementos de un array?

//ALGORITMO MENOS EFICIENTE

const findIfSumIsPossible = (nums, requiredSum) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === requiredSum) {
        return true;
      }
    }
  }
  return false;
};

//ALGORITMO UN POCO MÁS EFICIENTE

const betterFindIfSumIsPossible = (nums, requiredSum) => {
  const listaDeNumerosUnicos = [];

  for (const num of nums) {
    const restante = requiredSum - num;

    if (listaDeNumerosUnicos.includes(restante)) {
      return true;
    }

    if (!listaDeNumerosUnicos.includes(num)) {
      listaDeNumerosUnicos.push(num);
    }
  }
  return false;
};

const nums = [
  7, 12, 24, 18, 31, 45, 3, 29, 10, 16, 5, 41, 27, 13, 36, 20, 8, 49, 14, 22, 1,
  33, 48, 9, 38, 25, 17, 6, 42, 19, 26, 50, 2, 28, 11, 34, 16, 44, 23, 30, 21,
  37, 46, 15, 40, 35, 4, 32, 47, 39,
];

//debería retornar false
console.log(findIfSumIsPossible(nums, 444));
console.log(betterFindIfSumIsPossible(nums, 444));

//debería retornar true
console.log(findIfSumIsPossible(nums, 78));
console.log(betterFindIfSumIsPossible(nums, 78));
