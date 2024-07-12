import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {

  compteur = 0;

  plus():void {
    
   this.compteur ++
  }

  moin():void {
    if(this.compteur <=0){

      this.compteur = 0;
    } else{
      this.compteur --;
    }
    
  }

  display = true ;

  cacher(){

  this.display = !this.display;

}

names = [
  "Jeans",
  "Bastien",
  "Rachide",
  "Nabil"

]

    }

  






