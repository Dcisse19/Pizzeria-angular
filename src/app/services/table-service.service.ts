import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
  private selectedTableNumber$ = new BehaviorSubject<number>(0); // BehaviorSubject pour stocker la dernière valeur sélectionnée

  constructor( private router : Router) {
    this.getSelectedTable(); // Récupération de la dernière valeur sélectionnée au démarrage du service
  }

  // Getter pour récupérer la valeur actuelle de la table sélectionnée
  get selectedTableNumber(): number {
    return this.selectedTableNumber$.getValue();
  }

  // Setter pour mettre à jour la valeur de la table sélectionnée
  setSelectedTable(value: number) {
    this.selectedTableNumber$.next(value);
    localStorage.setItem('TableNumber', value.toString()); // Mise à jour du local storage
  }

  // Fonction pour récupérer la valeur de la table sélectionnée dans le local storage
  getSelectedTable(): void {
    const selectedTable = localStorage.getItem('TableNumber');
    if (selectedTable) {
      this.selectedTableNumber$.next(parseInt(selectedTable));
    }
  }

  // Fonction pour supprimer la valeur de la table sélectionnée dans le local storage
  clearSelectedTable(): void {
    localStorage.removeItem('TableNumber');
    this.selectedTableNumber$.next(0);
  }

  redirectIfNoTable(){
    if(this.selectedTableNumber === 0 || !localStorage.getItem('TableNumber')){
      this.router.navigate(['/']);
    }
  }
}
