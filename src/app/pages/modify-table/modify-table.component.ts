import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TableServiceService } from 'src/app/services/table-service.service';

@Component({
  selector: 'app-modify-table',
  templateUrl: './modify-table.component.html',
  styleUrls: ['./modify-table.component.css']
})
export class ModifyTableComponent implements OnInit {

  tableForm!: FormGroup; // Déclaration d'un objet FormGroup pour gérer notre formulaire
  submitted = false; // Variable pour indiquer si le formulaire a été soumis ou non
  tableNumber: number; // Numéro de table renseigné par l'utilisateur


  constructor( public tableService: TableServiceService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.tableNumber = this.activatedRoute.snapshot.params['tableNumber'];
  } // Injection des dépendances FormBuilder et Router dans notre component

  ngOnInit() {
    this.tableService.redirectIfNoTable();
    // Initialisation de notre formulaire avec un champ "tableNumber" qui doit être valide s'il est non vide, ne contient pas de lettres et est compris entre 1 et 14
    this.tableForm = this.formBuilder.group({
      tableNumber: [this.tableNumber, [Validators.required, this.validateTableNumber, this.validateTableRange]]
    });
  }

  submitForm() {
    this.submitted = true; // Le formulaire a été soumis
    // Vérification si le formulaire est valide lors de sa soumission
    if (this.tableForm.valid) {
      // Stockage du numéro de table dans le local storage grâce au service TableService
      const selectedTableNumber = Number(this.tableForm.get('tableNumber')!.value);
      this.tableService.setSelectedTable(selectedTableNumber);
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