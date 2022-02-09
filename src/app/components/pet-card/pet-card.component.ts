import { Component, OnInit } from '@angular/core';
import { IPet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {
  public pet!: IPet;
  public type!: string;
  constructor(private petService: PetService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let petId: number = parseInt(this.route.snapshot.params['id']);
    //this.pet = this.petService.getPetById(petId);
    this.petService.getPetById(petId).subscribe(data => this.pet = {
      id: data.id,
      name: data.name,
      age: data.age,
      gender: data.gender,
      bio: data.bio,
      type: data.type,
      picture: data.picture,
      price: data.price,
      city: data.city,
      state: data.state
      
    });
    
  }

}
