// questão 1 INTERFACES =====

export interface Descrevivel {
  descrever(): string;
}

export class Livro implements Descrevivel {
  public titulo: string;
  public autor: string;

  constructor(titulo: string, autor: string) {
    this.titulo = titulo;
    this.autor = autor;
  }

  descrever(): string {
    return `O livro "${this.titulo}" foi escrito por ${this.autor}.`;
  }
}

export class ProdutoEletronico implements Descrevivel {
  public nome: string;
  public voltagem: number;

  constructor(nome: string, voltagem: number) {
    this.nome = nome;
    this.voltagem = voltagem;
  }

  descrever(): string {
    return `O produto ${this.nome} opera em ${this.voltagem}V.`;
  }
}

// questão 2 CLASSES ABSTRATAS =====

export abstract class Veiculo {
  public modelo: string;
  
  public abstract calcularCustoPorKm(): number;
  
  constructor(modelo: string) {
    this.modelo = modelo;
  }

  public static calcularCustoViagem(veiculo: Veiculo, distanciaEmKm: number): string {
    const custoTotal = veiculo.calcularCustoPorKm() * distanciaEmKm;
    return `O custo da viagem de ${distanciaEmKm}km com o ${veiculo.modelo} é de R$${custoTotal.toFixed(2)}.`;
  }
}

export class Carro extends Veiculo {
  public consumoKmLitro: number;
  public precoCombustivel: number;

  constructor(modelo: string, consumoKmLitro: number, precoCombustivel: number) {
    super(modelo);
    this.consumoKmLitro = consumoKmLitro;
    this.precoCombustivel = precoCombustivel;
  }

  public calcularCustoPorKm(): number {
    return this.precoCombustivel / this.consumoKmLitro;
  }
}

export class Bicicleta extends Veiculo {
  public custoManutencaoAnual: number;
  
  constructor(modelo: string, custoManutencaoAnual: number) {
    super(modelo);
    this.custoManutencaoAnual = custoManutencaoAnual;
  }

  public calcularCustoPorKm(): number {
    const kmAnuaisEstimados = 5000;
    return this.custoManutencaoAnual / kmAnuaisEstimados;
  }
}