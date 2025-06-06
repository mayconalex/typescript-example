import { fatorial } from './fatorial';

describe('fatorial', () => {
  // Caso base: fatorial de 0
  it('deve retornar 1 para fatorial de 0', () => {
    expect(fatorial(0)).toBe(1);
  });

  // Caso base: fatorial de 1
  it('deve retornar 1 para fatorial de 1', () => {
    expect(fatorial(1)).toBe(1);
  });

  // Número positivo pequeno
  it('deve retornar 6 para fatorial de 3', () => {
    expect(fatorial(3)).toBe(6);
  });

  // Número positivo maior
  it('deve retornar 120 para fatorial de 5', () => {
    expect(fatorial(5)).toBe(120);
  });

  // Tratamento de erro com números negativos
  it('deve lançar um erro para fatorial de um número negativo', () => {
    // Para testar se uma função lança um erro, ela precisa ser chamada dentro de outra função
    expect(() => fatorial(-1)).toThrow("Fatorial não é definido para números negativos.");
    expect(() => fatorial(-5)).toThrowError("Fatorial não é definido para números negativos."); // Outra forma de escrever
  });

  // Garantir que não inteiros também lancem erro
  it('deve lançar um erro para fatorial de um número não inteiro', () => {
    expect(() => fatorial(3.5)).toThrow("Fatorial é definido apenas para números inteiros.");
  });
});