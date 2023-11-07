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
      bankCode: ['', [ Validators.required]],
      accountNumber: ['', [Validators.required]],
      status: ['', [Validators.required]],
      fmisStatus: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  bankOptions = ['Tất Cả', 'BIDV', 'MBank', 'ViettinBank' , 'VietcomBank', 'AngryBank', 'TechcomBank']; // Danh sách lựa chọn cho trường ngân hàng
  statusOptions = ['Tất Cả', 'Hoạt Động', 'Không Hoạt Động']; // Danh sách lựa chọn cho trường trạng thái
  fmisOptions = ['Tất Cả', 'Live', 'Sandbox']; // Danh sách lựa chọn cho trường FMIS

  selectedBank: string = 'Tất Cả'; // Biến để lưu giá trị ngân hàng được chọn
  selectedStatus: string = 'Tất Cả'; // Biến để lưu giá trị trạng thái được chọn
  selectedFMIS: string = 'Tất Cả'; // Biến để lưu giá trị FMIS được chọn
  selectedAccNumber: string = ''; // Biến để lưu giá trị số tài khoản


}
