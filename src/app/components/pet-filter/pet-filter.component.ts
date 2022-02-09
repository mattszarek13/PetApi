import { Component, OnDestroy, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { IPet } from 'src/app/models/pet';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pet-filter',
  templateUrl: './pet-filter.component.html',
  styleUrls: ['./pet-filter.component.scss']
})
export class PetFilterComponent implements OnInit, OnDestroy {
  public minAgeRange: number[] = Array.from(Array(20).keys());
  public maxAgeRange: number[] = Array.from(Array(20).keys());
  public filteredPets!: IPet[];

  public filters!: FormGroup;

  public subscription!: Subscription;
  constructor(private petService: PetService,
              private fb: FormBuilder,
              private transferService: TransferDataService) { 
                this.filters = fb.group({
                  cats: new FormControl(false),
                  dogs: new FormControl(false),
                  birds: new FormControl(false),
                  reptiles: new FormControl(false),
                  other: new FormControl(false),
                  maximumAge: new FormControl(0),
                  gender: new FormControl(""),
                  city: new FormControl("",),
                  state: new FormControl(""),
                  maximumPrice: new FormControl(0)
                });
  }

  ngOnInit(): void {
    this.subscription = this.transferService.currentPets.subscribe(filtered => this.filteredPets = filtered);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSubmit() {
    let filtersData = JSON.stringify(this.filters.value);
    this.petService.getPetsWithFilters(filtersData).subscribe(data => {
      this.filteredPets = data;
      this.transferService.filterPets(this.filteredPets)
    });
  }
  
}
