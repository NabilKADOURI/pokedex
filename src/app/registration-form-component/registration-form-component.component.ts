import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registration-form-component.component.html',
  styleUrl: './registration-form-component.component.css'
})
export class RegistrationFormComponentComponent {

  validInscription(){
    
    alert("Votre demande d'inscription a était prise en compte!")
    
  }
  
}
