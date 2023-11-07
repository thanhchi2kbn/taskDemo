import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-accounts-banking',
  templateUrl: './form-accounts-banking.component.html',
  styleUrls: ['./form-accounts-banking.component.scss']
})
export class FormAccountsBankingComponent implements OnInit {
  validateForm: FormGroup;
  isModalVisible: boolean = false;
  isShow :boolean = false

  @Output() searchClicked: EventEmitter<any> = new EventEmitter<any>(); // Tạo một sự kiện để truyền dữ liệu đã chọn


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

  openModalAddNewAcc(): void {
    this.isModalVisible = true;
  }

  openModal(){
    this.isShow = true;
  }

  onSearchClicked() {
    // Gửi dữ liệu đã chọn đến thành phần cha (SettingAccountsBankingComponent)
    const searchData = {
      selectedBank: this.selectedBank,
      selectedStatus: this.selectedStatus,
      selectedFMIS: this.selectedFMIS,
      selectedAccNumber: this.selectedAccNumber
    };
    this.searchClicked.emit(searchData);
  }
}