import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public featuredPets!: any[];
  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.populateFeaturedPets();
  }

  populateFeaturedPets() {
    this.featuredPets = this.petService.getFeaturedPets();
  }

}
