import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/services/items.service';

@Component({
  selector: 'app-items-dashboard',
  templateUrl: './items-dashboard.component.html',
  styleUrls: ['./items-dashboard.component.scss']
})
export class ItemsDashboardComponent implements OnInit {
  items: Array<any>;
  isLoading = true;
  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemsService.getAll().subscribe(
      (res: any) => {
        this.items = res;
        this.isLoading = false;
    },
    (error: Error) => console.error(error));
  }
}
