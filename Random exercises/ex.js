/*Dato un mazzo di carte estrai 5 carte casualmente */
class Carta {
  constructor(seme, valore) {
    this.seme = seme;
    this.valore = valore;
  }
}

class Mazzo {
  constructor() {
    this.mazzo = [];
    const semi = ["Cuori", "Quadri", "Picche", "Fiori"];
    const valori = [
      "Asso",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Regina",
      "Re",
    ];
    const mazzo = [];
    for (let seme of semi) {
      for (let valore of valori) {
        this.mazzo.push(new Carta(seme, valore));
      }
    }
  }
  mescola() {
    for (let i = this.mazzo.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * this.mazzo.length);
      [this.mazzo[i], this.mazzo[j]] = [this.mazzo[j], this.mazzo[i]];
    }
  }

  estraiCarta() {
    if (this.mazzo.length === 0) {
      console.log("Il mio mazzo è vuto");
      return;
    }
    return this.mazzo.pop();
  }
}

const mazzo = new Mazzo();
mazzo.mescola();
console.log("Estrazione di 5 carte: ");

for (let i = 0; i < 5; i++) {
  const carta = mazzo.estraiCarta();
  console.log(`Carta estratta: ${carta.valore} di ${carta.seme}`);
}
