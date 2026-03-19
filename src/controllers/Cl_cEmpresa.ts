import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import Cl_vEmpresa from "../views-plainHTML/Cl_vEmpresa.js";
import Cl_mTrabajador from "../models/Cl_mTrabajador.js";

export default class Cl_cEmpresa {
  private _model: Cl_mEmpresa;
  private _view: Cl_vEmpresa;

  constructor() {
    this._model = new Cl_mEmpresa();
    this._view = new Cl_vEmpresa();

    const btnAceptar = document.getElementById("btnAceptar");
    if (btnAceptar) {
      btnAceptar.onclick = () => this.procesarFormulario();
    }
  }

  procesarFormulario(): void {
    const inNombre = document.getElementById("inNombre") as HTMLInputElement;
    const inHReg = document.getElementById("inHReg") as HTMLInputElement;
    const inHExt = document.getElementById("inHExt") as HTMLInputElement;
    const inTipo = document.getElementById("inTipo") as HTMLSelectElement;

    const nombre = inNombre.value;
    const hReg = Number(inHReg.value);
    const hExt = Number(inHExt.value);
    const tipo = inTipo.value;

    if (nombre && !isNaN(hReg) && !isNaN(hExt) && tipo) {
      const trabajador = new Cl_mTrabajador(nombre, hReg, hExt, tipo);

      this._model.procesarTrabajador(trabajador);

      this.actualizarInterfaz(nombre);

      inNombre.value = "";
      inHReg.value = "";
      inHExt.value = "";
      inNombre.focus();
    } else {
      alert("Por favor, complete todos los campos correctamente.");
    }
  }

  actualizarInterfaz(ultimoNombre: string): void {
    const lista = document.getElementById("listaTrabajadores");
    if (lista) {
      const li = document.createElement("li");
      li.textContent = `Procesado: ${ultimoNombre}`;
      lista.appendChild(li);
    }

    this._view.recibirResultados(
      this._model.totalNomina(),
      this._model.mayorSalario,
      this._model.menorSalario,
      this._model.margenDiferencia(),
      this._model.porcentajeExtras(),
      this._model.porcentajeJuridicas(),
    );
  }
}
