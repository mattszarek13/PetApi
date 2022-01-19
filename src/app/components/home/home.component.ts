import { Component, OnInit } from '@angular/core';
import { IPet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public featuredPets!: IPet[];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.populateFeaturedPets();
  }

  populateFeaturedPets() {
    this.petService.getFeaturedPets().subscribe(data => {
        this.featuredPets = data;
    });
  }
}
