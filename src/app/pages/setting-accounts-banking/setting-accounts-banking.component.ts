import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/data.serviecs';
interface AccountBanking {
  id: string;
  bankName: string;
  accountNumber: string;
  status: number;
  statusFmis: number
}
@Component({
  selector: 'app-setting-accounts-banking',
  templateUrl: './setting-accounts-banking.component.html',
  styleUrls: ['./setting-accounts-banking.component.scss']
})
export class SettingAccountsBankingComponent implements OnInit {

  constructor(private accountService: AccountService) { }
  newAccounts: any[] = [];

  ngOnInit(): void {
    this.newAccounts = this.accountService.getAccount();
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
      bankName: 'MB',
      accountNumber: '89217391273312',
      status: 0,
      statusFmis: 1
    },

    {
      id: '3',
      bankName: 'TCB',
      accountNumber: '3921347219048',
      status: 1,
      statusFmis: 1
    },

    {
      id: '4',
      bankName: 'MSB',
      accountNumber: '231289312734',
      status: 0,
      statusFmis: 0
    },

    {
      id: '5',
      bankName: 'VTB',
      accountNumber: '1293812093804',
      status: 1,
      statusFmis: 1
    },

    {
      id: '6',
      bankName: 'VTB',
      accountNumber: '1293812093804',
      status: 1,
      statusFmis: 1
    },

    {
      id: '7',
      bankName: 'TCB',
      accountNumber: '129381203804',
      status: 1,
      statusFmis: 0
    },

    {
      id: '8',
      bankName: 'HDB',
      accountNumber: '129382093804',
      status: 1,
      statusFmis: 1
    },

    {
      id: '9',
      bankName: 'AGR',
      accountNumber: '129381209384',
      status: 1,
      statusFmis: 0
    }

  ];

  searchData: any; // Khai báo biến để lưu dữ liệu tìm kiếm

  onSearchDataReceived(data: any) {
    this.searchData = data; // Lưu dữ liệu tìm kiếm từ sự kiện
  }
}
