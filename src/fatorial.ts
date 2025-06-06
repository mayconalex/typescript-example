export function fatorial(n: number): number {
  // Validação da entrada
  if (n < 0) throw new Error("Fatorial não é definido para números negativos.");
  
  if (!Number.isInteger(n)) throw new Error("Fatorial é definido apenas para números inteiros.");
  // Casos base
  if (n === 0 || n === 1) return 1;

  // Cálculo iterativo
  let resultado = 1;

  for (let i = 2; i <= n; i++) resultado *= i;

  return resultado;
}

// branch criada: feature/1-implementar-e-testar-a-funcao-fatorial