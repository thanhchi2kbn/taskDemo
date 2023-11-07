import { Component, OnInit } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd';
interface AccountBanking {
  id: string;
  bankName: string;
  accountNumber: string;
  status: number;
  statusFmis: number
}

@Component({
  selector: 'app-table-accouts-banking',
  templateUrl: './table-accouts-banking.component.html',
  styleUrls: ['./table-accouts-banking.component.scss']
})
export class TableAccoutsBankingComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  listOfData: AccountBanking[] = [
    {
      id: '1',
      bankName: 'BIDV',
      accountNumber: '1298390213398',
      status: 1,
      statusFmis: 1
    },

    {
      id: '2',
      bankName: 'MBank',
      accountNumber: '89217391273312',
      status: 0,
      statusFmis: 1
    },

    {
      id: '3',
      bankName: 'TechcomBank',
      accountNumber: '3921347219048',
      status: 1,
      statusFmis: 1
    },

    {
      id: '4',
      bankName: 'AngryBank',
      accountNumber: '231289312734',
      status: 0,
      statusFmis: 0
    },

    {
      id: '5',
      bankName: 'VietinBank',
      accountNumber: '1293812093804',
      status: 1,
      statusFmis: 1
    },

    {
      id: '5',
      bankName: 'VietinBank',
      accountNumber: '1293812093804',
      status: 1,
      statusFmis: 1
    },

    {
      id: '5',
      bankName: 'VietinBank',
      accountNumber: '1293812093804',
      status: 1,
      statusFmis: 1
    },

    {
      id: '5',
      bankName: 'VietinBank',
      accountNumber: '1293812093804',
      status: 1,
      statusFmis: 1
    },

    {
      id: '5',
      bankName: 'VietinBank',
      accountNumber: '1293812093804',
      status: 1,
      statusFmis: 1
    }
    

  ];

}


