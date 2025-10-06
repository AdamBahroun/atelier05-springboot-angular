import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { voitureService } from '../services/voiture.service';
import { voiture } from '../model/voiture.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-voiture',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-voiture.component.html',
  styles: ``
})
export class UpdatevoitureComponent implements OnInit{
  
  currentvoiture = new voiture();
  constructor(private activatedRoute : ActivatedRoute, private router :Router,private voitureService :voitureService) {
    
    
    
  }
  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params['id']);
    this.currentvoiture = this.voitureService.consultervoiture(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentvoiture);

  }
  updatevoiture(){

    this.voitureService.updatevoiture(this.currentvoiture);
    this.router.navigate(['voitures']);  
  }

}
