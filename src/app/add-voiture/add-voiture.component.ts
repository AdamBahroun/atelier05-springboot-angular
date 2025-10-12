import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Voiture } from '../model/voiture.model';
import { voitureService } from '../services/voiture.service';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
@Component({
  selector: 'app-add-voiture',
  imports: [FormsModule],
  templateUrl: './add-voiture.component.html',
})
export class AddvoituresComponent implements OnInit{
  newvoiture= new Voiture();
  newMarque!: Marque;
  newIdMarque!:number;
  marques! :Marque[];
  message!:String;
  constructor(private voitureService: voitureService,private router :Router){
    

  }
  addvoiture(){
//console.log(this.newvoiture);
this.voitureService.addvoiture(this.newvoiture);
//this.message =this.newvoiture.nomvoiture+" ajouter avec succée"
this.newMarque =
this.voitureService.consulterMarque(this.newIdMarque);
this.newvoiture.marque = this.newMarque;
this.router.navigate(['voitures']);  

}

  ngOnInit(): void {
    this.marques=this.voitureService.listeMarques();
  }

}
