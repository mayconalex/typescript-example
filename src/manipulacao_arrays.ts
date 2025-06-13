// 1. Faça um programa TypeScript que calcule o quadrado de cada elemento do array
export function quadradosComFor(numeros: number[]): number[] {
  const resultado: number[] = [];
  for (let i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i] * numeros[i]);
  }
  return resultado;
}

export function quadradosComForEach(numeros: number[]): number[] {
  const resultado: number[] = [];
  numeros.forEach(numero => {
    resultado.push(numero * numero);
  });
  return resultado;
}

// 2. Faça um Programa TypeScript que transforme o array, concatenando as String com 1 (um) espaço (“ “)
export function concatenarStrings(palavras: string[]): string {
  return palavras.join(' ');
}

// 3. Faça um programa que imprima seus elementos ordenados. Use o método SORT da classe Array
export function ordenarStrings(palavras: string[]): string[] {
  return palavras.slice().sort();
}

// 4. Faça um programa que leia o array pegue apenas os dois primeiros elementos. Use o método SLICE da classe Array
export function obterDoisPrimeiros(elementos: any[]): any[] {
  return elementos.slice(0, 2);
}

// 5. Faça um programa que leia o array e extrai os elementos pares. Use o método FILTER da classe Array
export function filtrarPares(numeros: number[]): number[] {
  return numeros.filter(numero => numero % 2 === 0);
}