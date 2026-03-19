import Cl_mTrabajador from "./Cl_mTrabajador.js";

export default class Cl_mEmpresa {
  private acNomina: number;
  private maySal: number;
  private menSal: number;
  private contExtras: number;
  private contTotal: number;
  private contJuridica: number;

  constructor() {
    this.acNomina = 0;
    this.maySal = 0;
    this.menSal = 9999;
    this.contExtras = 0;
    this.contTotal = 0;
    this.contJuridica = 0;
  }

  procesarTrabajador(t: Cl_mTrabajador): void {
    const s = t.calcularSalario();

    this.acNomina += s;
    this.contTotal++;

    if (t.tipo === "J") {
      this.contJuridica++;
    }

    if (t.hExt > 0) {
      this.contExtras++;
    }

    if (s > this.maySal) {
      this.maySal = s;
    }
    if (s < this.menSal) {
      this.menSal = s;
    }
  }

  totalNomina(): number {
    return this.acNomina;
  }

  margenDiferencia(): number {
    if (this.contTotal === 0) return 0;
    return this.maySal - this.menSal;
  }

  porcentajeExtras(): number {
    if (this.contTotal === 0) return 0;
    return (this.contExtras / this.contTotal) * 100;
  }

  porcentajeJuridicas(): number {
    if (this.contTotal === 0) return 0;
    return (this.contJuridica / this.contTotal) * 100;
  }

  get mayorSalario(): number {
    return this.maySal;
  }
  get menorSalario(): number {
    return this.contTotal === 0 ? 0 : this.menSal;
  }
}
