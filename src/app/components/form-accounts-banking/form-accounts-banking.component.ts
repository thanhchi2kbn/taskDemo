import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/data.serviecs';
import * as XLSX from 'xlsx';
import { FilteredDataService } from 'src/app/services/filtered-data.service';

@Component({
  selector: 'app-form-accounts-banking',
  templateUrl: './form-accounts-banking.component.html',
  styleUrls: ['./form-accounts-banking.component.scss']
})
export class FormAccountsBankingComponent implements OnInit {
  validateForm: FormGroup;



  bankOptions = ['Tất Cả', 'AGR', 'BIDV', 'EIB', 'HDB', 'IVB', 'LPB', 'MB', 'MSB', 'SCB', 'SEA', 'SHB', 'STB', 'TCB', 'TPB', 'VCB', 'VIB', 'VPB', 'VTB'];
  statusOptions = ['Tất Cả','Hoạt động', 'Không hoạt động'];
  fmisOptions = ['Tất Cả','Live', 'Sandbox'];

  constructor(private fb: FormBuilder,private filteredDataService: FilteredDataService,private AccountService: AccountService) {
    this.validateForm = this.fb.group({
      bankCode: ['Tất Cả', [Validators.required]],
      accountNumber: [''],
      status: ['Tất Cả', [Validators.required]],
      fmisStatus: ['Tất Cả', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onSearchClicked(){    
    const formData = this.validateForm.getRawValue();   
    let searchData = this.filteredDataService.filterDataByFields(formData);
    // console.log(searchData);
    this.AccountService.addAccount(searchData)
  }

  exportToExcel(): void {
    let exportData = this.AccountService.getAccount();
    console.log("xuat file ne",exportData);
    
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'exported-data.xlsx');
  }
}
