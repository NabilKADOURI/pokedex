import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonInterface } from '../shared/entities';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../shared/services/pokemon.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit,OnDestroy{
  pokemon: PokemonInterface | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
   this.fetchOne();
  }
// 1er methode :
  // fetchOne(){
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.pokemonService.getPokemon(id).subscribe(data => {
  //     this.pokemon = data;
  //   });


 private  dataPokemon!: Subscription

  // 2eme methode:
  fetchOne(){
    this.dataPokemon = this.route.params.subscribe(params =>{
      this.pokemonService.getPokemon(params['id']).subscribe(data=>{
        this.pokemon = data;
      })
    })
  }

ngOnDestroy(): void {
  this.dataPokemon.unsubscribe();
}




// fonction pour la barre de niveau
   calculatePercentage(hp: number): number {
    const maxHp = 180;
    return (hp / maxHp) * 100;
  }


}
