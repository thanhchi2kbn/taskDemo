import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-accounts-banking',
  templateUrl: './setting-accounts-banking.component.html',
  styleUrls: ['./setting-accounts-banking.component.scss']
})
export class SettingAccountsBankingComponent implements OnInit {
  filteredData: any[] = []; // Create an array to store the filtered data
  originalData: any[] = []; // Store the original data (you need to replace 'any[]' with your actual data type)

  constructor() { }

  ngOnInit(): void {
    // Load your original data into 'originalData' here
  }

 

}
