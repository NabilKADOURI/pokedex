import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component';
import { PokemonInterface } from '../shared/entities';
import { PokemonService } from '../shared/services/pokemon.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../shared/pipes/search.pipe';


@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule,RouterLink,PokemonModalComponent,FormsModule,SearchPipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  constructor(private service:PokemonService){}

  pokemons:PokemonInterface[] = [];
 terms = '';

  ngOnInit(): void {
    this.getPokemon()
  }

  private  dataPokemon!: Subscription

  getPokemon(){

    this.dataPokemon = this.service.fetchAll().subscribe(data => {
      this.pokemons = data.slice(0,15);
    })

    }

    ngOnDestroy(): void {
      this.dataPokemon.unsubscribe();
    }

  }
