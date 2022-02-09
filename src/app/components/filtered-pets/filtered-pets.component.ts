import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPet } from 'src/app/models/pet';
import { TransferDataService } from 'src/app/services/transfer-data.service';

@Component({
  selector: 'app-filtered-pets',
  templateUrl: './filtered-pets.component.html',
  styleUrls: ['./filtered-pets.component.scss']
})
export class FilteredPetsComponent implements OnInit, OnDestroy {
  public pets!: IPet[];
  public subscription!: Subscription;

  constructor(private transferService: TransferDataService) { }

  ngOnInit(): void {
    this.subscription = this.transferService.currentPets.subscribe(filtered => this.pets = filtered);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
