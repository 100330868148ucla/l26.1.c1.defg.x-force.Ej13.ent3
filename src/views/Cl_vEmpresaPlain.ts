import I_vEmpresa from "../interfaces/I_vEmpresa.js";

export default class Cl_vEmpresaPlain implements I_vEmpresa {
  recibirResultados(total: number, maySal: number, menSal: number, margen: number, porcentaje: number, porcJuridica: number): void {
    console.log("--- RESULTADOS FINALES DE LA EMPRESA ---");
    console.log(`Monto Total de la Nómina: ${total}$`);
    console.log(`Salario Mayor: ${maySal}$ | Salario Menor: ${menSal}$`);
    console.log(`Margen de Diferencia: ${margen}$`);
    console.log(`Porcentaje de Trabajadores con Extras: ${porcentaje}%`);
    console.log(`Porcentaje Personas Jurídicas: ${porcJuridica.toFixed(2)}%`);
  }
}