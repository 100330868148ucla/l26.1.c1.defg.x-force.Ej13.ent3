export default interface I_vEmpresa {
  recibirResultados(
    total: number,
    maySal: number,
    menSal: number,
    margen: number,
    porcentaje: number,
    porcJuridica: number,
  ): void;
}
