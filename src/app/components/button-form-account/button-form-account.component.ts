import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-form-account',
  templateUrl: './button-form-account.component.html',
  styleUrls: ['./button-form-account.component.scss']
})
export class ButtonFormAccountComponent implements OnInit {
  @Input() searchData: any; // Nhận dữ liệu đã chọn từ FormAccountsBankingComponent

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    // Thực hiện tác vụ tìm kiếm dựa trên dữ liệu đã chọn
    // Sử dụng this.searchData để truy cập các giá trị đã chọn
  }
}
