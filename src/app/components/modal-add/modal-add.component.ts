import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/data.serviecs';
import { FilteredDataService } from 'src/app/services/filtered-data.service';

export function accountNumberValidators(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return { required: 'Số tài khoản không được để trống' };
    }

    if (!/^[0-9 .]*$/.test(value)) {
      return { pattern: 'Số tài khoản chỉ được bao gồm ký tự số, dấu chấm và khoảng trắng' };
    }
    return null;
  };
}

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private accountService: AccountService, private filteredDataService: FilteredDataService) {
    this.validateForm = this.fb.group({
      bankCode: [this.bankOptions[0], [Validators.required]],
      accountNumber: [null, [Validators.required, accountNumberValidators()]],
      status: ['Hoạt động', [Validators.required]],
      fmisStatus: ['Sandbox', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  bankOptions = ['AGR', 'BIDV', 'EIB', 'HDB', 'IVB', 'LPB', 'MB', 'MSB', 'SCB', 'SEA', 'SHB', 'STB', 'TCB', 'TPB', 'VCB', 'VIB', 'VPB', 'VTB'];
  statusOptions = ['Hoạt động', 'Không hoạt động'];
  fmisOptions = ['Live', 'Sandbox'];

  onSave() {
    if (this.validateForm.valid) {
      const formData = this.validateForm.value;
      console.log("Dữ liệu được thêm:", formData);
      this.filteredDataService.addDataToFilteredData(formData)
      this.router.navigate(['/account-setting']);
    } else {
      const accountNumberControl = this.validateForm.get('accountNumber');
      if (accountNumberControl.hasError('required')) {
        window.alert(accountNumberControl.getError('required'));
      } else if (accountNumberControl.hasError('pattern')) {
        window.alert(accountNumberControl.getError('pattern'));
      } else {
        window.alert("Dữ liệu không hợp lệ.");
      }
    }
  }
}
