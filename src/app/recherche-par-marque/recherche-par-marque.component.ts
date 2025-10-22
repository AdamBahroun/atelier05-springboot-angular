import { Component } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { voitureService } from '../services/voiture.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Marque } from '../model/marque.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-recherche-par-marque',
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './recherche-par-marque.component.html',
})
export class RechercheParMarqueComponent {
voitures :Voiture[];
marques! :Marque[];
idmarque! :number;
constructor(private voitureService: voitureService) {
  this.voitures=[]
}

onChange(){
  console.log(this.idmarque);
  this.voitures=this.voitureService.rechercherParMarque(this.idmarque);
}
supprimervoiture(prod :Voiture){
 let conf = confirm("Etes-vous sûr ?");
if (conf)
this.voitureService.supprimervoiture(prod);
this.voitures=this.voitureService.rechercherParMarque(this.idmarque);
}
ngOnInit():void{
  this.marques =this.voitureService.listeMarques();
this.voitures = this.voitureService.listvoitures();
}
}
