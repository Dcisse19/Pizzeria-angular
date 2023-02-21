import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {

  tableForm!: FormGroup; // Déclaration d'un objet FormGroup pour gérer notre formulaire
  submitted = false; // Variable pour indiquer si le formulaire a été soumis ou non

  constructor(private formBuilder: FormBuilder, private router: Router) {} // Injection des dépendances FormBuilder et Router dans notre component

  ngOnInit() {
    // Initialisation de notre formulaire avec un champ "tableNumber" qui doit être valide s'il est non vide, ne contient pas de lettres et est compris entre 1 et 14
    this.tableForm = this.formBuilder.group({
      tableNumber: ['', [Validators.required, this.validateTableNumber, this.validateTableRange]]
    });
  }

  submitForm() {
    this.submitted = true; // Le formulaire a été soumis
    // Vérification si le formulaire est valide lors de sa soumission
    if (this.tableForm.valid) {
      // Redirection vers la page de tous les produits si le formulaire est valide
      this.router.navigate(['/products']);
    }
  }

  // Fonction de validation personnalisée pour vérifier si la saisie ne contient pas de lettres
  validateTableNumber(control: AbstractControl): { [key: string]: any } | null {
    const regex = /^[0-9]*$/; // expression régulière pour vérifier que la chaîne ne contient que des chiffres
    if (!regex.test(control.value)) {
      return { 'invalidTableNumber': true };
    }
    return null;
  }

  // Fonction de validation personnalisée pour vérifier si le numéro de table est compris entre 1 et 14
  validateTableRange(control: AbstractControl): { [key: string]: any } | null {
    const tableNumber = Number(control.value);
    if (tableNumber < 1 || tableNumber > 14) {
      return { 'invalidTableRange': true };
    }
    return null;
  }

}

