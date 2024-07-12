// Importation des modules nécessaires
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FruitInterface } from '../shared/entities';
import { CommonModule } from '@angular/common';

// Définition du composant Angular
@Component({
  selector: 'app-exo-algo', // Le nom de la balise HTML pour ce composant
  standalone: true, // Composant autonome
  imports: [FormsModule, CommonModule], // Importation de modules nécessaires
  templateUrl: './exo-algo.component.html', // Fichier HTML associé à ce composant
  styleUrl: './exo-algo.component.css' // Fichier CSS associé à ce composant
})
export class ExoAlgoComponent {
  // --- EXO CONVERSION MONNAIE ---

  // Variable pour stocker le montant en monnaie
  monnaie: number = 100;  
  // Variable pour savoir si le montant est en dollars (true) ou en euros (false)
  enDollars: boolean = true;

  // Méthode pour convertir la monnaie
  convertir(): void {
    if (this.enDollars) {
      // Si c'est en dollars, convertir en euros
      this.monnaie = this.convertirEnEuros(this.monnaie);
    } else {
      // Sinon, convertir en dollars
      this.monnaie = this.convertirEnDollars(this.monnaie);
    }
    // Inverser la valeur de enDollars
    this.enDollars = !this.enDollars;
  }

  // Méthode pour convertir un montant en euros
  convertirEnEuros(montant: number): number {
    const tauxConversion = 0.85; // Taux de conversion dollars -> euros
    return montant * tauxConversion; // Retourner le montant converti
  }

  // Méthode pour convertir un montant en dollars
  convertirEnDollars(montant: number): number {
    const tauxConversion = 1 / 0.85; // Taux de conversion euros -> dollars
    return montant * tauxConversion; // Retourner le montant converti
  }

  // --- EXO MINEUR/MAJEUR ---

  // Variable pour stocker l'âge de l'utilisateur
  age: number = 18;
  // Variable pour stocker le message (mineur ou majeur)
  message: string = "";

  // Méthode pour vérifier l'âge et définir le message
  Voyage() {
    if (this.age <= 18) {
      // Si l'âge est inférieur ou égal à 18, c'est un mineur
      this.message = "Vous êtes mineur";
    } else {
      // Sinon, c'est un majeur
      this.message = "Vous êtes majeur";
    }
  }

  // Méthode pour changer la couleur de fond du document
  Colorer(color: string) {
    document.body.className = (color); // Appliquer la classe CSS correspondant à la couleur
  }

  // --- PANIER ---

  // Liste des fruits disponibles avec leurs prix
  fruits: FruitInterface[] = [
    { name: 'Pomme', price: 1.5 },
    { name: 'Banane', price: 1.2 },
    { name: 'Orange', price: 1.8 },
  ];

  // Panier pour stocker les fruits sélectionnés
  panier: { fruit: FruitInterface, quantity: number }[] = [];
  // Fruit sélectionné pour l'ajout au panier
  selectedFruit: FruitInterface | null = null;
  // Quantité de fruit à ajouter
  quantity: number = 1;

  // Méthode pour ajouter un fruit au panier
  ajouterAuPanier() {
    if (this.selectedFruit) {
      // Vérifier si le fruit est déjà dans le panier
      const existingItem = this.panier.find(item => item.fruit === this.selectedFruit);
      if (existingItem) {
        // Si le fruit est déjà dans le panier, augmenter la quantité
        existingItem.quantity += this.quantity;
      } else {
        // Sinon, ajouter le fruit avec la quantité spécifiée
        this.panier.push({ fruit: this.selectedFruit, quantity: this.quantity });
      }
      // Réinitialiser le fruit sélectionné et la quantité
      this.selectedFruit = null;
      this.quantity = 1;
    }
  }

  // Méthode pour supprimer un fruit du panier
  supprimerDuPanier(index: number) {
    this.panier.splice(index, 1); // Supprimer l'élément à l'index spécifié
  }

  // Méthode pour modifier la quantité d'un fruit dans le panier
  modifierQuantite(index: number, quantity: number) {
    if (quantity <= 0) {
      // Si la quantité est inférieure ou égale à zéro, supprimer le fruit du panier
      this.supprimerDuPanier(index);
    } else {
      // Sinon, mettre à jour la quantité
      this.panier[index].quantity = quantity;
    }
  }

  // Méthode pour calculer le total du panier
  getTotal(): number {
    return this.panier.reduce((total, item) => total + item.fruit.price * item.quantity, 0); // Calculer la somme totale
  }
}
