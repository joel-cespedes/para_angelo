import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';




@Component({
  selector: 'app-data-api',
  templateUrl: './data-api.component.html',
  styleUrls: ['./data-api.component.scss']
})
export class DataApiComponent {

  // responseData: any;

  // constructor(private apiService: ApiService) {}

  // ngOnInit(): void {
  //   this.apiService.getData().subscribe((data) => {
  //     this.responseData = data;
  //   });
  // }

  public apiInformation: Array<any> = [];


  constructor ( private ApiService: ApiService ){
    this.ApiService.getInformation().subscribe((resp:any)=>{
      console.log(resp)
      this.apiInformation = resp
    })
  }

}
