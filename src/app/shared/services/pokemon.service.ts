import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { PokemonInterface } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  url ="https://tyradex.vercel.app/api/v1/gen/1";
  urlDetail = "https://tyradex.vercel.app/api/v1/pokemon"

  fetchAll(){
    return this.http.get<PokemonInterface[]>(this.url);
  }

  getPokemon(id: string|null): Observable<PokemonInterface> {
    return this.http.get<PokemonInterface>(`${this.urlDetail}/${id}`);
  }


      
}
