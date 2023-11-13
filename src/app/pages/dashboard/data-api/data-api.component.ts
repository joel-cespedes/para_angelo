import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';




@Component({
  selector: 'app-data-api',
  templateUrl: './data-api.component.html',
  styleUrls: ['./data-api.component.scss']
})
export class DataApiComponent implements OnInit {


  apiData: any[] = [];

  constructor(private apiDataService: ApiService) {}

  ngOnInit() {
    this.apiDataService.apiData$.subscribe(data => {
      this.apiData = data;
    });
  }

}
