
import { Component } from '@angular/core';
import { voiture } from '../model/voiture.model';
import { CommonModule } from '@angular/common';
import { voitureService } from '../services/voiture.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-voitures',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './voiture.component.html',
})
export class voituresComponent {
voitures :voiture[];
constructor(private voitureService: voitureService ) {
  this.voitures=[]

 }
 supprimervoiture(prod :voiture){
 let conf = confirm("Etes-vous sûr ?");
if (conf)
this.voitureService.supprimervoiture(prod);
}
ngOnInit():void{
this.voitures = this.voitureService.listvoitures();
}
}

