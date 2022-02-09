import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilteredPetsComponent } from './components/filtered-pets/filtered-pets.component';
import { HomeComponent } from './components/home/home.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { PetsComponent } from './components/pets/pets.component';
const routes: Routes = [
  { path: 'pets/:type', component: PetsComponent },
  { path: 'pet/:id', component: PetCardComponent },
  
  { path: 'home', component: HomeComponent},
  { path: 'filters', component: FilteredPetsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
