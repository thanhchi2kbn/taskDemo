import { Component, Input, OnInit, OnChanges, AfterViewInit, AfterContentInit } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd';
import { FilteredDataService } from 'src/app/services/filtered-data.service';


@Component({
  selector: 'app-table-accouts-banking',
  templateUrl: './table-accouts-banking.component.html',
  styleUrls: ['./table-accouts-banking.component.scss']
})
export class TableAccoutsBankingComponent implements OnInit {
  @Input() searchData: any[] = [];
  @Input() newAccounts: any[] = [];
  
  
  filteredData: any[] = [];

  constructor(private filteredDataService: FilteredDataService) {
    
  }

  ngOnInit(): void {
    // this.filteredData = this.listOfData; 
    let getData = this.filteredDataService.getFilteredData();
    this.filteredData = getData; 
  }

  deleteItem(item: any){
    const index = this.filteredData.indexOf(item);
    if (index !== -1) {
      const eleDel = this.filteredData.splice(index, 1);
      this.filteredData = this.filteredData.filter((e) => eleDel[0].id !== e.id)
    }
  }


}




