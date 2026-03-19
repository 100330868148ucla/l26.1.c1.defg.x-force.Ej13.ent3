import Cl_vTrabajadorPlain from "../views/Cl_vTrabajadorPlain.js";

export default class Cl_vTrabajador {
  constructor(vTP: Cl_vTrabajadorPlain) {
    this.mostrarEnDOM(vTP);
  }

  private mostrarEnDOM(vTP: Cl_vTrabajadorPlain): void {
    const output = document.getElementById("output");
    if (output) {
      const p = document.createElement("p");
      p.innerText = `Procesando: ${vTP.dataNombre} - Tipo: ${vTP.dataTipo} (hReg: ${vTP.dataHReg}, hExt: ${vTP.dataHExt})`;
      output.appendChild(p);
    }
  }
}
