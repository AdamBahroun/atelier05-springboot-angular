/*import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Voiture } from '../model/voiture.model';
import { Marque } from '../model/marque.model';
import { voitureService } from '../services/voiture.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-recherche-par-nom',
imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent {
voitures :Voiture[];
marques! :Marque[];
allvoitures! : Voiture[];
searchTerm!: string;
idmarque!:number;
constructor(private voitureService: voitureService) {
  this.voitures=[]
}

ngOnInit(): void {
this.voitureService.listvoitures.subscribe(voits => {
console.log(voits);
this.allvoitures = voits;
});
}
onKeyUp(filterText : string){
this.voitures = this.allvoitures.filter(item =>
item.nomvoiture.toLowerCase().includes(filterText));
}
supprimervoiture(voit :Voiture){
 let conf = confirm("Etes-vous sûr ?");
if (conf)
this.voitureService.supprimervoiture(voit);
this.voitures=this.voitureService.rechercherParMarque(this.idmarque);
}

}*/
