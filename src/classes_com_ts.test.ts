import { Livro, ProdutoEletronico, Veiculo, Carro, Bicicleta } 
from '../src/classes_com_ts';

describe('Testes de Programação Orientada a Objetos', () => {

  // testes para a questão 1 =====
  describe('Interfaces - Descrevivel', () => {

    it('deve retornar a descrição correta para cada classe', () => {
      const meuLivro = new Livro('O Hobbit', 'J.R.R. Tolkien');
      expect(meuLivro.descrever()).toBe('O livro "O Hobbit" foi escrito por J.R.R. Tolkien.');

      meuLivro.autor = 'Tolkien';
      expect(meuLivro.descrever()).toBe('O livro "O Hobbit" foi escrito por Tolkien.');

      const meuMonitor = new ProdutoEletronico('Monitor Dell', 220);
      expect(meuMonitor.descrever()).toBe('O produto Monitor Dell opera em 220V.');
    });
  });

  // testes para a questão 2 =====
  describe('Classes Abstratas - Veiculo', () => {

    it('deve usar o método estático para calcular o custo da viagem corretamente', () => {
      const meuCarro = new Carro('Fusca', 10, 5.00);

      expect(Veiculo.calcularCustoViagem(meuCarro, 100)).toBe('O custo da viagem de 100km com o Fusca é de R$50.00.');

      const minhaBicicleta = new Bicicleta('Caloi 10', 200);
    
      expect(Veiculo.calcularCustoViagem(minhaBicicleta, 100)).toBe('O custo da viagem de 100km com o Caloi 10 é de R$4.00.');
      
      meuCarro.precoCombustivel = 7.00;

      expect(Veiculo.calcularCustoViagem(meuCarro, 100)).toBe('O custo da viagem de 100km com o Fusca é de R$70.00.');
    });
  });
});