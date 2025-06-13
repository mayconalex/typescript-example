import { quadradosComFor, quadradosComForEach, concatenarStrings, ordenarStrings, obterDoisPrimeiros, filtrarPares }
from '../src/manipulacao_arrays';

describe('Testes de Manipulação de Arrays', () => {

  // Testes para a questão 1
  describe('quadrados', () => {
    const arrayTeste = [3, 5, 7, 3, 8, 9, 1];
    const resultadoEsperado = [9, 25, 49, 9, 64, 81, 1];

    it('1a. deve calcular o quadrado de cada elemento usando for', () => {
      expect(quadradosComFor(arrayTeste)).toEqual(resultadoEsperado);
    });

    it('1b. deve calcular o quadrado de cada elemento usando forEach', () => {
      expect(quadradosComForEach(arrayTeste)).toEqual(resultadoEsperado);
    });
  });

  // Teste para a questão 2
  it('2. deve concatenar o array de strings com espaços', () => {
    const arrayTeste = ['Arrays', 'com', 'TypeScript'];
    const resultadoEsperado = 'Arrays com TypeScript';
    expect(concatenarStrings(arrayTeste)).toBe(resultadoEsperado);
  });

  // Teste para a questão 3
  it('3. deve ordenar o array de strings em ordem alfabética', () => {
    const arrayTeste = ['carro', 'boneco', 'ave', 'lapis'];
    const resultadoEsperado = ['ave', 'boneco', 'carro', 'lapis'];
    expect(ordenarStrings(arrayTeste)).toEqual(resultadoEsperado);
  });

  // Teste para a questão 4
  it('4. deve extrair os dois primeiros elementos do array', () => {
    const arrayTeste = [2, 4, 6, 2, 8, 9, 5];
    const resultadoEsperado = [2, 4];
    expect(obterDoisPrimeiros(arrayTeste)).toEqual(resultadoEsperado);
  });

  // Teste para a questão 5
  it('5. deve filtrar apenas os números pares do array', () => {
    const arrayTeste = [8, 3, 9, 5, 6, 12];
    const resultadoEsperado = [8, 6, 12];
    expect(filtrarPares(arrayTeste)).toEqual(resultadoEsperado);
  });

});