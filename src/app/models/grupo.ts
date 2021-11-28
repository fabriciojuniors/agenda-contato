export interface Grupo {
    id: number,
    nome: string,
    descricao: string,
    relevancia: Relevancia,
    ativo: boolean
}

export enum Relevancia {
    ALTA = "Alta",
    MEIDA = "Média",
    BAIXA = "Baixa"
}
