import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd';


@Component({
  selector: 'app-table-accouts-banking',
  templateUrl: './table-accouts-banking.component.html',
  styleUrls: ['./table-accouts-banking.component.scss']
})
export class TableAccoutsBankingComponent implements OnInit {
  @Input() listOfData: any[] = [];
  @Input() searchData: any[] = [];
  @Input() newAccounts: any[] = [];
  
  
  filteredData: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filteredData = this.listOfData; 
    
    
  }


  ngOnChanges(): void{
    console.log(this.newAccounts ,"in table cpn");
  }

  deleteItem(item: any){
    const index = this.filteredData.indexOf(item);
    if (index !== -1) {
      const eleDel = this.filteredData.splice(index, 1);
      this.filteredData = this.filteredData.filter((e) => eleDel[0].id !== e.id)
    }
  
    
  }
}




