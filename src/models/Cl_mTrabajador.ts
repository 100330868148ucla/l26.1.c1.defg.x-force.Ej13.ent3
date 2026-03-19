export default class Cl_mTrabajador {
  private _nombre: string;
  private _hReg: number;
  private _hExt: number;
  private _tipo: string;

  constructor(nombre: string, hReg: number, hExt: number, tipo: string = "N") {
    this._nombre = nombre;
    this._hReg = hReg;
    this._hExt = hExt;
    this._tipo = tipo.toUpperCase();
  }

  set nombre(n: string) {
    this._nombre = n;
  }
  get nombre(): string {
    return this._nombre;
  }

  set hReg(h: number) {
    this._hReg = h;
  }
  get hReg(): number {
    return this._hReg;
  }

  set hExt(h: number) {
    this._hExt = h;
  }
  get hExt(): number {
    return this._hExt;
  }

  set tipo(t: string) {
    this._tipo = t.toUpperCase();
  }
  get tipo(): string {
    return this._tipo;
  }

  calcularSalario(): number {
    return this._hReg * 10 + this._hExt * 25;
  }
}
