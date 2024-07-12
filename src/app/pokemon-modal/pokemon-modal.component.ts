import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-pokemon-modal',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-modal.component.html',
  styleUrl: './pokemon-modal.component.css'
})
export class PokemonModalComponent {

  @Input() id!: string ; 
  @Input() category!: string;
  @Input() name!: string ;
  @Input() hp!: number; 
  @Input() image!: string; 
}
