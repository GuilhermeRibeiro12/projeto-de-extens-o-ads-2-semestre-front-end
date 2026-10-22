import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Servico } from '../models/servico';
import { Barbeiro } from '../models/barbeiro';
import { Trabalho } from '../models/trabalho';
import { TRABALHOS_MOCK } from '../mocks/mock-data';

interface ApiResponse<T> {
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class BarbeariaService {
  private readonly apiUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) {}

  getServicos(): Observable<Servico[]> {
    return this.http
      .get<ApiResponse<Servico[]>>(`${this.apiUrl}/servicos`)
      .pipe(map(resposta => resposta.data));
  }

  getBarbeiros(): Observable<Barbeiro[]> {
    return this.http
      .get<ApiResponse<Barbeiro[]>>(`${this.apiUrl}/barbeiros`)
      .pipe(map(resposta => resposta.data));
  }

  // A API ainda não tem rota de trabalhos, então continua mockado
  getTrabalhos(): Observable<Trabalho[]> {
    return of(TRABALHOS_MOCK);
  }
}