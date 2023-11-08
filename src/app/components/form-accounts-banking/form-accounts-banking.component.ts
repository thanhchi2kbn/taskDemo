import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { FilteredDataService } from 'src/app/services/filtered-data.service';

@Component({
  selector: 'app-form-accounts-banking',
  templateUrl: './form-accounts-banking.component.html',
  styleUrls: ['./form-accounts-banking.component.scss']
})
export class FormAccountsBankingComponent implements OnInit {
  validateForm: FormGroup;

  @Output() searchClicked: EventEmitter<any> = new EventEmitter<any>();

  bankOptions = ['Tất Cả', 'AGR', 'BIDV', 'EIB', 'HDB', 'IVB', 'LPB', 'MB', 'MSB', 'SCB', 'SEA', 'SHB', 'STB', 'TCB', 'TPB', 'VCB', 'VIB', 'VPB', 'VTB'];
  statusOptions = ['Tất Cả','Hoạt động', 'Không hoạt động'];
  fmisOptions = ['Tất Cả','Live', 'Sandbox'];

  constructor(private fb: FormBuilder,private filteredDataService: FilteredDataService) {
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
    console.log(formData);   
    let searchData = this.filteredDataService.filterDataByFields(formData);
    console.log(searchData);
  }
}
