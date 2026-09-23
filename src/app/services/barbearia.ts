import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Servico } from '../models/servico';
import { Trabalho } from '../models/trabalho';
import { Barbeiro } from '../models/barbeiro';
import { SERVICOS_MOCK, TRABALHOS_MOCK, BARBEIROS_MOCK } from '../mocks/mock-data';

@Injectable({
  providedIn: 'root'
})
export class BarbeariaService {

  getServicos(): Observable<Servico[]> {
    return of(SERVICOS_MOCK);
  }

  getTrabalhos(): Observable<Trabalho[]> {
    return of(TRABALHOS_MOCK);
  }

  getBarbeiros(): Observable<Barbeiro[]> {
    return of(BARBEIROS_MOCK);
  }
}