import { TipoDocumento } from "./tipo-documento.model";
import { Usuario } from "./usuario.model";

export class Documento {
  constructor(
    public id?: number,
    public nome?: string,
    public tipoDocumento?: TipoDocumento,
    public criador?: Usuario,
    public descricao?: string
  ){ }
}