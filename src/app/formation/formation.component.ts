import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegistrationFormComponentComponent } from '../registration-form-component/registration-form-component.component';
import { FormationsInterface } from '../shared/entities';
import {  formationsMock } from '../shared/mockFormation';



@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule, RegistrationFormComponentComponent],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent implements OnInit {

  formations:FormationsInterface[] = [];

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll(){
    this.formations= formationsMock;

    
  }

}

