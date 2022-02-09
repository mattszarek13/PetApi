import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  private defaultPetArr!: IPet[];
  private petSource = new BehaviorSubject(this.defaultPetArr);
  currentPets = this.petSource.asObservable();

  constructor() { }

  filterPets(pets: IPet[]) {
    this.petSource.next(pets);
  }
}
