import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      bankCode: ['Tất Cả', [Validators.required]],
      accountNumber: ['', [Validators.required]],
      status: ['Tất Cả', [Validators.required]],
      fmisStatus: ['Tất Cả', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  bankOptions = ['Tất Cả', 'BIDV', 'MBank', 'ViettinBank', 'VietcomBank', 'AngryBank', 'TechcomBank'];
  statusOptions = ['Tất Cả', 'Hoạt Động', 'Không Hoạt Động'];
  fmisOptions = ['Tất Cả', 'Live', 'Sandbox'];
}
