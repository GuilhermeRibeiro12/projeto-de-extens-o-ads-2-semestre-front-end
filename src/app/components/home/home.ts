import { Component, OnInit, signal } from '@angular/core';
import { BarbeariaService } from '../../services/barbearia';
import { Servico } from '../../models/servico';
import { Trabalho } from '../../models/trabalho';
import { Barbeiro } from '../../models/barbeiro';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  servicos = signal<Servico[]>([]);
  trabalhos = signal<Trabalho[]>([]);
  barbeiros = signal<Barbeiro[]>([]);

  constructor(private barbeariaService: BarbeariaService) {}

  ngOnInit(): void {
    this.barbeariaService.getServicos().subscribe(dados => this.servicos.set(dados));
    this.barbeariaService.getTrabalhos().subscribe(dados => this.trabalhos.set(dados));
    this.barbeariaService.getBarbeiros().subscribe(dados => this.barbeiros.set(dados));
  }

  formatarPreco(preco: number): string {
    if (preco === 0) {
      return 'Consultar';
    }
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco);
  }

  formatarDuracao(minutos: number): string {
    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;
    if (horas === 0) return `${resto} min`;
    if (resto === 0) return `${horas}h`;
    return `${horas}h${resto}`;
  }

  numero(indice: number): string {
    return String(indice + 1).padStart(2, '0');
  }
}