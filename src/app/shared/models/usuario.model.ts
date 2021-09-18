import { Nacionalidade } from "./nacionalidade.model";

export class Usuario {
  constructor(
    public id?: number,
    public nomeUsuario?: string,
    public senhaUsuario?: string,
    public nomeCompleto?: string,
    public dataNascimento?: string,
    public nacionalidade?: Nacionalidade,
    public email?: string
    ){}
}
