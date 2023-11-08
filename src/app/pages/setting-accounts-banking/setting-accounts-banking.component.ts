import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/data.serviecs';

@Component({
  selector: 'app-setting-accounts-banking',
  templateUrl: './setting-accounts-banking.component.html',
  styleUrls: ['./setting-accounts-banking.component.scss']
})
export class SettingAccountsBankingComponent implements OnInit {

  listData=[];

  constructor(private accountService: AccountService, ) { }
  newAccounts: any[] = [];

  ngOnInit(): void {
    this.newAccounts = this.accountService.getAccount();
  }



  searchData: any; // Khai báo biến để lưu dữ liệu tìm kiếm

  onSearchDataReceived(data: any) {
    this.searchData = data; // Lưu dữ liệu tìm kiếm từ sự kiện
  }
}
