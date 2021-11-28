import { Grupo } from "./grupo";

export interface Contato {
    id: number,
    nome: string,
    sobrenome: string,
    apelido: string,
    telefones: Telefone[],
    email: string,
    grupo: Grupo,
    data_nascimento: Date,
    informacoes: string
    ativo: boolean,
}

export interface Telefone {
    tipo: TipoTelefone,
    telefone:  string
}

export enum TipoTelefone {
    CELULAR = "Celular",
    RESIDENCIAL = "Residencial",
    EMPRESARIAL = "Empresarial"
}
