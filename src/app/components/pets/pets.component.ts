import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';

import { ActivatedRoute } from '@angular/router';
import { IPet } from 'src/app/models/pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  public pets!: IPet[];
  constructor(private petService: PetService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let type: string = this.route.snapshot.params['type'];
    console.log(type);
    //kind of hacky workaround to deal with type being plural
    if(type != 'all' && type != 'other') {
      type = type.slice(0, -1);
    }
    this.petService.getPets(type).subscribe(resp => {
      this.pets = resp;
    });
  }

}
