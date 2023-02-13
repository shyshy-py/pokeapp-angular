import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeserviceService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlSpecie: string = 'https://pokeapi.co/api/v2/pokemon-species';

  constructor(private http: HttpClient) {}

  

  getPokemon(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  changePokemon(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  getSpecie(id: string) {
    return this.http.get(`${this.urlSpecie}/${id}`);
  }

  getAll() {
    console.log('funciona data Home');
    return this.http.get(`${this.url}/1`);
  }
}
