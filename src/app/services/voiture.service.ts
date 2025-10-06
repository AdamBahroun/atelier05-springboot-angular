import { Injectable } from '@angular/core';
import { voiture } from '../model/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class voitureService {
  voitures : voiture[];
    constructor(){
      this.voitures = [
{idvoiture : 1, nomvoiture : "PC Asus", prixvoiture : 3000.600, dateCreation : new Date("01/14/2011")},
{idvoiture : 2, nomvoiture : "Imprimante Epson", prixvoiture : 450, dateCreation : new Date("12/17/2010")},
{idvoiture : 3, nomvoiture :"Tablette Samsung", prixvoiture : 900.123, dateCreation : new Date("02/20/2020")}
 ];
    }
    listvoitures():voiture[]{
      return this.voitures;
    }
    addvoiture(voiture:voiture){
      this.voitures.push(voiture)

    }
    supprimervoiture( prod: voiture){
const index = this.voitures.indexOf(prod, 0);
if (index > -1) {
this.voitures.splice(index, 1);
}

}
consultervoiture(id:number): voiture{
return  this.voitures.find(p => p.idvoiture == id)!;

}
updatevoiture( prod: voiture){
 const index = this.voitures.indexOf(prod, 0);
 if (index > -1) {
 this.voitures.splice(index, 1); 
 this.voitures.splice(index,0,prod);
 }
 }
    
}

