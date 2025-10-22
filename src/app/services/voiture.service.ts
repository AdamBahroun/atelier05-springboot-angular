import { Injectable } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { Marque } from '../model/marque.model';

@Injectable({
  providedIn: 'root'
})
export class voitureService {
  marques: Marque[];
  voitures: Voiture[];
  voitureRecherche: Voiture[];
  constructor() {
    this.voitureRecherche=[];
    this.marques = [
      { idmarque: 1, nommarque: "Volkswagen" },
      { idmarque: 2, nommarque: "Ferrari" },
      { idmarque: 3, nommarque: "BMW" },
      { idmarque: 4, nommarque: "Mercedes-Benz" },
      { idmarque: 5, nommarque: "Audi" },
      { idmarque: 6, nommarque: "Toyota" },
      { idmarque: 7, nommarque: "Honda" },
      { idmarque: 8, nommarque: "Ford" },
      { idmarque: 9, nommarque: "Chevrolet" },
      { idmarque: 10, nommarque: "Nissan" },
      { idmarque: 11, nommarque: "Peugeot" },
      { idmarque: 12, nommarque: "Renault" },
      { idmarque: 13, nommarque: "Lamborghini" },
      { idmarque: 14, nommarque: "Porsche" },
      { idmarque: 15, nommarque: "Kia" },
      { idmarque: 16, nommarque: "Hyundai" },
      { idmarque: 17, nommarque: "Mazda" },
      { idmarque: 18, nommarque: "Citroën" },
      { idmarque: 19, nommarque: "Volvo" },
      { idmarque: 20, nommarque: "Jaguar" },
      { idmarque: 21, nommarque: "Haval" }
    ];

    this.voitures = [
      { idvoiture: 1, nomvoiture: "Porsche 911 ", prixvoiture: 213000, dateCreation: new Date("01/14/2011"), marque: { idmarque: 14, nommarque: "Porsche" } },
      { idvoiture: 2, nomvoiture: "Audi Rs6", prixvoiture: 140080, dateCreation: new Date("12/17/2010"), marque: { idmarque: 5, nommarque: "Audi" }, },
      { idvoiture: 3, nomvoiture: "BMW M5", prixvoiture: 166250, dateCreation: new Date("02/20/2010"), marque: { idmarque: 3, nommarque: "BMW" }, }
    ];
  }
  listvoitures(): Voiture[] {
    return this.voitures;
  }
  addvoiture(voiture: Voiture) {
    this.voitures.push(voiture)

  }
  supprimervoiture(prod: Voiture) {
    const index = this.voitures.indexOf(prod, 0);
    if (index > -1) {
      this.voitures.splice(index, 1);
    }

  }
  consultervoiture(id: number): Voiture {
    return this.voitures.find(p => p.idvoiture == id)!;

  }
  updatevoiture(prod: Voiture) {
    const index = this.voitures.indexOf(prod, 0);
    if (index > -1) {
      this.voitures.splice(index, 1);
      this.voitures.splice(index, 0, prod);
    }
  }
  listeMarques(): Marque[] {
    return this.marques;
  }
  consulterMarque(id: number): Marque {
    return this.marques.find(cat => cat.idmarque == id)!;
  }
  rechercherParMarque(idmarque: number):Voiture[] {
this.voitureRecherche=[];
this.voitures.forEach((cur,index)=>{
  if (idmarque == cur.marque?.idmarque) {
    console.log("cur"+cur);
    this.voitureRecherche.push(cur);
  }})
  return this.voitureRecherche;
}

}

