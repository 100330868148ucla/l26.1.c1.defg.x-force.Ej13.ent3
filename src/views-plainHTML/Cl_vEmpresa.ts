import I_vEmpresa from "../interfaces/I_vEmpresa.js";

export default class Cl_vEmpresa implements I_vEmpresa {
  recibirResultados(
    total: number,
    maySal: number,
    menSal: number,
    margen: number,
    porcExtras: number,
    porcJuridica: number,
  ): void {
    const detalle = document.getElementById("detalleReporte");
    if (detalle) {
      detalle.innerHTML = `
        <p><strong>Monto total de nómina:</strong> ${total}$</p>
        <p><strong>Salario mayor:</strong> ${maySal}$ | <strong>Salario menor:</strong> ${menSal}$</p>
        <p><strong>Margen de diferencia:</strong> ${margen}$</p>
        <p><strong>Porcentaje trabajadores con extras:</strong> ${porcExtras.toFixed(2)}%</p>
        <p><strong>Porcentaje personas jurídicas:</strong> ${porcJuridica.toFixed(2)}%</p>
      `;
    }
  }
}
