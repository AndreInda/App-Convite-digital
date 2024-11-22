export default interface Convidado{
    id: string;
    nome: string;
    email: string;
    confirmado: boolean;
    possuiAcompanhates:boolean;
    qtdeAcompanhates: number;
}