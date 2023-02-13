import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from 'src/app/services/pokeservice.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  loading = false;

  //Variables de pokemon
  id: string = '';
  animate:any='';
  colors: any = {
    steel: '#A8A8C0',
    water: '#3899F8',
    bug: 'rgb(168,184,32)',
    dragon: '#7860E0',
    electric: '#F8D030',
    ghost: '#6060B0',
    fire: '#BA4A32 ',
    fairy: '#E79FE7',
    ice: '#58C8E0',
    fighting: '#A05038',
    normal: '#A8A090',
    grass: '#78C850',
    psychic: '#F870A0',
    rock: '#B8A058',
    dark: '#7A5848',
    ground: '#E9D6A4',
    flight: '#98A8F0',
    poison: 'violet',
  };

  //Caracteristicas
  
  pokeName: string = '';
  pokeImg: string = './assets/images/juegos.png';
  pokeDesc: string = '';
  pokeSpecie: string = '';
  pokeGenera: any = '';
  pokeEvolved: string = '';
  

  //Estadisticas
  pokeStats: any[] = [];
  pokeType: any;

  //Ataques

  constructor(private pokeApi: PokeserviceService) {}

  ngOnInit() {}

  getPokemon() {
    this.loading = true;

    this.pokeApi.getPokemon(this.id).subscribe(
      (data: any) => {
        this.id = data.id;
        this.pokeImg = data.sprites.front_default;
        console.log(this.id);
        this.pokeName = data.name;
        this.pokeStats = Object.values(data.stats);
        this.pokeType = data.types[0].type.name;
        console.log(this.pokeType);

        this.getDescPoke(this.id);

        console.log(data);
        console.log(this.pokeStats);

        this.loading = false;
      },
      (err) => {
        this.loading = false;
        this.pokeName = "Pokemon doesn't exist";
        this.pokeImg = './assets/images/avatar.png';
        this.pokeGenera = 'Not available';
        this.pokeDesc = 'Description is not available';
        this.pokeStats = [];
        this.id = 'Error';

        this.pokeType = 'ERROR';

        console.log(err);
      }
    );
  }

  getDescPoke(id: string) {
    
    this.pokeApi.getSpecie(id).subscribe((dataSpecie: any) => {
      try {
        this.pokeGenera = dataSpecie.genera[7].genus;
        this.pokeDesc = dataSpecie.flavor_text_entries[0].flavor_text;


        //Evolved seccion
        this.pokeEvolved = dataSpecie.evolves_from_species.name;
        this.pokeApi.getPokemon(this.pokeEvolved).subscribe((data:any)=>{
          this.animate=data.sprites.versions['generation-v']['black-white'].animated.front_default
          console.log(this.animate)
        })
        console.log(this.animate)
        console.log(dataSpecie);
      } catch (error) {
        console.log('error', error);
        this.pokeEvolved = 'No Evolution';
        this.pokeGenera='';
        this.pokeDesc='';
        this.animate='assets/images/errorGif.gif'
      }
    });
  }

  nextPokemon() {
    this.pokeApi.changePokemon(this.id).subscribe((data: any) => {
      this.id = data.id + 1;
      this.getPokemon();
      this.getDescPoke(this.id);

      this.id = data.name;
    });
  }

  backPokemon() {
    this.pokeApi.changePokemon(this.id).subscribe((data: any) => {
      this.id = data.id + -1;
      this.getPokemon();
      this.getDescPoke(this.id);
      this.id = data.name;
      console.log(this.id);
    });
  }
}
