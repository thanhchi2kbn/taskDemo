import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/data.serviecs';

@Component({
  selector: 'app-setting-accounts-banking',
  templateUrl: './setting-accounts-banking.component.html',
  styleUrls: ['./setting-accounts-banking.component.scss']
})
export class SettingAccountsBankingComponent implements OnInit {

  listData=[];

  constructor(private accountService: AccountService ) { }
  newAccounts: any[] = [];

  ngOnInit(): void {
    
  }







}
