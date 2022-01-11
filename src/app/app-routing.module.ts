import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { PetsComponent } from './components/pets/pets.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent,
   children: []},
  { path: 'pet/:id', component: PetCardComponent },
  { path: 'pets/:type', component: PetsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
