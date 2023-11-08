import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private account: any = null;

  addAccount(account: any) {
    this.account = account;
    
  }

  getAccount() {
    return this.account;
  }
}
