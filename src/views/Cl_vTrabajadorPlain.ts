export default class Cl_vTrabajadorPlain {
  private dNombre: string;
  private dhReg: number;
  private dhExt: number;
  private dTipo: string; // Nuevo dato

  constructor(nombre: string, hReg: number, hExt: number, tipo: string = "N") {
    this.dNombre = nombre;
    this.dhReg = hReg;
    this.dhExt = hExt;
    this.dTipo = tipo;
  }

  recibirTrabajador(
    nombre: string,
    hReg: number,
    hExt: number,
    tipo: string,
  ): void {
    console.log(`Reporte para: ${nombre} (${tipo})`);
    console.log(`Horas Reg: ${hReg}, Horas Ext: ${hExt}`);
  }

  get dataNombre(): string {
    return this.dNombre;
  }
  get dataHReg(): number {
    return this.dhReg;
  }
  get dataHExt(): number {
    return this.dhExt;
  }
  get dataTipo(): string {
    return this.dTipo;
  }
}
