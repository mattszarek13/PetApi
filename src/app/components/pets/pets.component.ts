import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';

import { ActivatedRoute, Router } from '@angular/router';
import { IPet } from 'src/app/models/pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  public pets!: IPet[];
  constructor(private petService: PetService,
              private routeA: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let type: string = this.routeA.snapshot.params['type'];
    //added this to ensure that navigation between pets, such as clicking from cats to dogs in the nav,
    //actually works
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    //kind of hacky workaround to deal with type being plural
    if(type != 'all' && type != 'other') {
      type = type.slice(0, -1);
    }
    this.petService.getPets(type).subscribe(resp => {
      this.pets = resp;
    });
  }

}
