import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { voiture } from '../model/voiture.model';
import { voitureService } from '../services/voiture.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-voiture',
  imports: [FormsModule],
  templateUrl: './add-voiture.component.html',
})
export class AddvoituresComponent implements OnInit{
  newvoiture= new voiture();
  message!:String;
  constructor(private voitureService: voitureService,private router :Router){
    

  }
  addvoiture(){
//console.log(this.newvoiture);
this.voitureService.addvoiture(this.newvoiture);
//this.message =this.newvoiture.nomvoiture+" ajouter avec succée"
this.router.navigate(['voitures']);  

}

  ngOnInit(): void {
    
  }

}
