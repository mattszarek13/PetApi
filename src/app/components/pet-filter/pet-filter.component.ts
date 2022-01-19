import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-pet-filter',
  templateUrl: './pet-filter.component.html',
  styleUrls: ['./pet-filter.component.scss']
})
export class PetFilterComponent implements OnInit {
  public minAgeRange: number[] = Array.from(Array(20).keys());
  public maxAgeRange: number[] = Array.from(Array(20).keys());
  public catBreedList!: string[];
  public dogBreedList!: string[];
  public birdBreedList!: string[];
  public reptileBreedList!: string[];
  public otherBreedList!: string[];

  public filters!: FormGroup;
  constructor(private petService: PetService,
              private fb: FormBuilder) { 
                this.filters = fb.group({
                  cats: new FormControl(false),
                  catBreeds: new FormArray([]),
                  dogs: new FormControl(false),
                  dogBreeds: new FormArray([]),
                  birds: new FormControl(false),
                  birdBreeds: new FormArray([]),
                  reptiles: new FormControl(false),
                  reptileBreeds: new FormArray([]),
                  other: new FormControl(false),
                  otherBreeds: new FormArray([]),
                  minimumAge: new FormControl(1),
                  maximumAge: new FormControl(19),
                  gender: new FormControl(true),
                  city: new FormControl(""),
                  state: new FormControl(""),
                  minimumPrice: new FormControl(0),
                  maximumPrice: new FormControl(0)
                });
  }

  ngOnInit(): void {
    this.populatePetBreeds();
    console.log(this.catBreedList);
  }

  
  populatePetBreeds() {
    this.getCatBreeds();
    this.getDogBreeds();
    this.getBirdBreeds();
    this.getReptileBreeds();
    this.getOtherBreeds();
  }

  //methods get the pet breeds from the server, move them into an array, populate the form control
  getCatBreeds() {
    this.petService.getPetBreedsByType("cat").subscribe(data => {
      this.catBreedList = data;
      console.log(this.catBreedList);
      this.catBreedList.forEach(() => this.catBreeds.push(new FormControl(false)));
    });
  }

  getDogBreeds() {
    this.petService.getPetBreedsByType("dog").subscribe(data => {
      this.dogBreedList = data;
      console.log(this.dogBreedList);
      this.dogBreedList.forEach(() => this.dogBreeds.push(new FormControl(false)));
    });
  }
  getBirdBreeds() {
    this.petService.getPetBreedsByType("bird").subscribe(data => {
      this.birdBreedList = data;
      console.log(this.birdBreedList);
      this.birdBreedList.forEach(() => this.birdBreeds.push(new FormControl(false)));
    });
  }
  getReptileBreeds() {
    this.petService.getPetBreedsByType("reptile").subscribe(data => {
      this.reptileBreedList = data;
      console.log(this.reptileBreedList);
      this.reptileBreedList.forEach(() => this.reptileBreeds.push(new FormControl(false)));
    });
  }
  getOtherBreeds() {
    this.petService.getPetBreedsByType("other").subscribe(data => {
      this.otherBreedList = data;
      console.log(this.otherBreedList);
      this.otherBreedList.forEach(() => this.otherBreeds.push(new FormControl(false)));
    });
  }
  onSubmit() {
    console.log('apply filters hooked up');
    //get all of the selected filters
    
  }

  get catBreeds(): FormArray {
		return this.filters.controls.catBreeds as FormArray;
	}
  get dogBreeds(): FormArray {
		return this.filters.get('dogBreeds') as FormArray;
	}
  get birdBreeds(): FormArray {
		return this.filters.get('birdBreeds') as FormArray;
	}
  get reptileBreeds(): FormArray {
		return this.filters.get('reptileBreeds') as FormArray;
	}
  get otherBreeds(): FormArray {
		return this.filters.get('otherBreeds') as FormArray;
	}
  
}
