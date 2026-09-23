import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarbeariaService } from '../../services/barbearia';
import { Servico } from '../../models/servico';
import { Trabalho } from '../../models/trabalho';
import { Barbeiro } from '../../models/barbeiro';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  servicos: Servico[] = [];
  trabalhos: Trabalho[] = [];
  barbeiros: Barbeiro[] = [];

  constructor(private barbeariaService: BarbeariaService) {}

  ngOnInit(): void {
    this.barbeariaService.getServicos().subscribe(dados => this.servicos = dados);
    this.barbeariaService.getTrabalhos().subscribe(dados => this.trabalhos = dados);
    this.barbeariaService.getBarbeiros().subscribe(dados => this.barbeiros = dados);
  }
}