class NumeroImmaginario {
  constructor() {
    this.reale = 0;
    this.immaginario = 1;
  }
  calcolaRadiceQuadrata() {
    const reale = Math.sqrt(-1) * this.reale;
    const immaginario = Math.sqrt(-1) * this.immaginario;
    return new NumeroImmaginario(reale, immaginario);
  }
}
const numeroImmaginario = new NumeroImmaginario();

const radiceQuadrata = numeroImmaginario.calcolaRadiceQuadrata();

console.log("La radice quadrata di -1 = ", "i");
