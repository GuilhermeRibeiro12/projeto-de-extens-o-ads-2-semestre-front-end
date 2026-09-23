import { Servico } from '../models/servico';
import { Trabalho } from '../models/trabalho';
import { Barbeiro } from '../models/barbeiro';

export const SERVICOS_MOCK: Servico[] = [
  {
    id: 1,
    numero: '01',
    nome: 'Corte Clássico',
    descricao: 'Tesoura e máquina, acabamento na navalha e finalização com pomada.',
    preco: 60
  },
  {
    id: 2,
    numero: '02',
    nome: 'Barba Completa',
    descricao: 'Toalha quente, óleo pré-barba e contornos precisos com navalha.',
    preco: 50
  },
  {
    id: 3,
    numero: '03',
    nome: 'Pacote Completo',
    descricao: 'Corte, barba e sobrancelha. A experiência full-service da casa.',
    preco: 95
  }
];

export const TRABALHOS_MOCK: Trabalho[] = [
  { id: 1, imagem: 'assets/img/trabalho1.jpg', descricao: 'Corte finalizado' },
  { id: 2, imagem: 'assets/img/trabalho2.jpg', descricao: 'Barba sendo feita' },
  { id: 3, imagem: 'assets/img/cadeira.jpg', descricao: 'Cadeira da barbearia' }
];

export const BARBEIROS_MOCK: Barbeiro[] = [
  { id: 1, nome: 'Otavio', especialidade: 'Cortes clássicos', foto: 'assets/img/barbeiro1.jpg' },
  { id: 2, nome: 'Bruno Natan', especialidade: 'Barba e navalha', foto: 'assets/img/barbeiro2.jpg' }
];