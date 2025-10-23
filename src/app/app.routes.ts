import { Routes } from '@angular/router';
import { voituresComponent } from './voiture/voiture.component';
import { AddvoituresComponent } from './add-voiture/add-voiture.component';
import { UpdatevoitureComponent } from './update-voiture/update-voiture.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

export const routes: Routes = [
    {path: "voitures", component : voituresComponent},
    {path: "add-voitures", component : AddvoituresComponent},
    {path: "updatevoiture/:id", component: UpdatevoitureComponent},
    {path: "rechercheParMarque", component : RechercheParMarqueComponent},
    {path: "rechercheParNom", component : RechercheParNomComponent},
    {path: "", redirectTo: "voitures", pathMatch: "full"}
    


];
