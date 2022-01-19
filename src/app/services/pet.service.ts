import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IPet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  apiString: string = 'https://localhost:5001/api/Pets/';
  constructor(private http: HttpClient) { }
  

  getAllPets() {
    return this.http.get<IPet>(this.apiString);
  }

  getPetById(id: number) {
    var requestString = this.apiString + id;
    return this.http.get<IPet>(requestString);
  }

  getPets(type: string) {
    if(type == 'all') {
      return this.http.get<IPet[]>(this.apiString);
    }

    return this.http.get<IPet[]>(this.apiString + type);
  }

  getFeaturedPets() {
    //temporary code for populating featured pets
    return this.http.get<IPet[]>(this.apiString + 'featured');
  }

  getPetBreedsByType(type: string) {
    var toAppend = 'petBreed/' + type;
    return this.http.get<string[]>(this.apiString + toAppend);
  }

  getPetsWithFilters(filters: string[]) {
    
  }
}
