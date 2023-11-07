import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  originalData: any[] = []; // Dữ liệu gốc

  // Hàm này cho phép bạn cập nhật dữ liệu gốc từ bất kỳ thành phần nào
  updateOriginalData(data: any[]) {
    this.originalData = data;
  }
}