export interface Servico {
  id: number;
  nome: string;
  descricao: string | null;
  preco: number;
  duracao_minutos: number;
  ativo: boolean;
  criado_em: string;
}