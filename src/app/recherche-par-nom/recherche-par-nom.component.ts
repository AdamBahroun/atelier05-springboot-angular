import { Component } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { voitureService } from '../services/voiture.service';
import { CommonModule } from '@angular/common';
import { Marque } from '../model/marque.model';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [CommonModule,  FormsModule,SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent {
  voitures: Voiture[];
  marques!: Marque[];
  idmarque!: number;
  searchTerm!: string;
  constructor(private voitureService: voitureService) {
    this.voitures = [];

  }

  onChange() {
    console.log(this.idmarque);
    this.voitures = this.voitureService.rechercherParMarque(this.idmarque);
  }

  supprimervoiture(v: Voiture) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.voitureService.supprimervoiture(v);
    this.voitures = this.voitureService.rechercherParMarque(this.idmarque);
  }

  ngOnInit(): void {
    this.marques = this.voitureService.listeMarques();
    this.voitures = this.voitureService.listvoitures();
  } onKeyUp(terme: string): void {
    if (terme.trim() === '') {
      this.voitures = [];
      return;
    }
    this.voitures = this.voitureService.rechercherParNom(terme);
  }
}
