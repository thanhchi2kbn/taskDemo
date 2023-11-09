import { AccountService } from 'src/app/services/data.serviecs';
import { Component, Input, OnInit, OnChanges, AfterViewInit, AfterContentInit, DoCheck, AfterContentChecked } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd';
import { FilteredDataService } from 'src/app/services/filtered-data.service';


@Component({
  selector: 'app-table-accouts-banking',
  templateUrl: './table-accouts-banking.component.html',
  styleUrls: ['./table-accouts-banking.component.scss']
})
export class TableAccoutsBankingComponent implements OnInit, AfterContentChecked {

  filteredData: any[] = [];
  searchResult: any[] = [];
  constructor(private filteredDataService: FilteredDataService,private accountService: AccountService) {
    
  }

  ngAfterContentChecked(): void {
    this.searchResult =  this.accountService.getAccount();
    if(this.searchResult){
      this.filteredData = this.searchResult
    }
  }

  ngOnInit(): void {
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




