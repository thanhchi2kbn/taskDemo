import { Component, Input, OnInit } from '@angular/core';
import { log } from 'console';
import { NzTableQueryParams } from 'ng-zorro-antd';


@Component({
  selector: 'app-table-accouts-banking',
  templateUrl: './table-accouts-banking.component.html',
  styleUrls: ['./table-accouts-banking.component.scss']
})
export class TableAccoutsBankingComponent implements OnInit {
  @Input() listOfData: any[] = [];
  @Input() searchForm: any[] = [];
  filteredData: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Ban đầu, hiển thị toàn bộ dữ liệu
    this.filteredData = this.listOfData;

    
  }
 
  onSearch(searchData: any): void {
    // this.filteredData = this.listOfData.filter(item => {
    //   return (
    //     (searchData.bankcode === 'Tất Cả' || item.bankName === searchData.selectedBank) &&
    //     (searchData.selectedStatus === 'Tất Cả' || item.status.toString() === searchData.selectedStatus) &&
    //     (searchData.selectedFMIS === 'Tất Cả' || item.statusFmis.toString() === searchData.selectedFMIS) &&
    //     (item.accountNumber.includes(searchData.selectedAccNumber))
    //   );
    // });
    console.log(this.filteredData);
  }
}


