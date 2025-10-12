import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { voitureService } from '../services/voiture.service';
import { Voiture } from '../model/voiture.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-update-voiture',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-voiture.component.html',
  styles: ``
})
export class UpdatevoitureComponent implements OnInit{
  
  currentvoiture = new Voiture();
  marques! : Marque[];
  updatedMarqueId! : number;
  constructor(private activatedRoute : ActivatedRoute, private router :Router,private voitureService :voitureService) {
    
    
    
  }
  ngOnInit(): void {
    this.marques = this.voitureService.listeMarques();
    this.currentvoiture = this.voitureService.consultervoiture(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentvoiture);
    this.updatedMarqueId=this.currentvoiture.marque!.idmarque;


  }
  updatevoiture(){
    this.currentvoiture.marque=this.voitureService.consulterMarque(this.updatedMarqueId);
    this.voitureService.updatevoiture(this.currentvoiture);
    this.router.navigate(['voitures']);  
  }

}
