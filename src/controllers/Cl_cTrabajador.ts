import Cl_mTrabajador from "../models/Cl_mTrabajador.js";
import Cl_vTrabajadorPlain from "../views/Cl_vTrabajadorPlain.js";
import Cl_vTrabajador from "../views-plainHTML/Cl_vTrabajador.js";

export default class Cl_cTrabajador {
  private _model: Cl_mTrabajador;
  private _viewHTML: Cl_vTrabajador;

  constructor(nombre: string, hReg: number, hExt: number, tipo: string = "N") {
    this._model = new Cl_mTrabajador(nombre, hReg, hExt, tipo);

    const vTP = new Cl_vTrabajadorPlain(nombre, hReg, hExt, tipo);

    this._viewHTML = new Cl_vTrabajador(vTP);
  }

  get model(): Cl_mTrabajador {
    return this._model;
  }
}
