import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-accounts-banking',
  templateUrl: './form-accounts-banking.component.html',
  styleUrls: ['./form-accounts-banking.component.scss']
})
export class FormAccountsBankingComponent implements OnInit {
  validateForm: FormGroup;

  @Output() searchClicked: EventEmitter<any> = new EventEmitter<any>();

  bankOptions = ['Tất Cả', 'BIDV', 'MBank', 'ViettinBank', 'VietcomBank', 'AngryBank', 'TechcomBank'];
  statusOptions = ['Tất Cả', 'Hoạt Động', 'Không Hoạt Động'];
  fmisOptions = ['Tất Cả', 'Live', 'Sandbox'];

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      bankCode: ['Tất Cả', [Validators.required]],
      accountNumber: [''],
      status: ['Tất Cả', [Validators.required]],
      fmisStatus: ['Tất Cả', [Validators.required]]
    });
  }

  ngOnInit(): void {}

 public onSearchClicked(){    
    const formData = this.validateForm.getRawValue();    
    this.searchClicked.emit( formData);
  }
}
