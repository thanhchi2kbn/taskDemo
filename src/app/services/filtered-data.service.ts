import { Injectable } from '@angular/core';
interface AccountBanking {
  id: string;
  bankCode: string;
  accountNumber: string;
  status: string;
  fmisStatus: string
}

let listOfData: AccountBanking[] = [
  {
    id: '1',
    bankCode: 'BIDV',
    accountNumber: '1298390213398',
    status: 'Hoạt động',
    fmisStatus: 'Sandbox'
  },

  {
    id: '2',
    bankCode: 'MB',
    accountNumber: '89217391273312',
    status: 'Không hoạt động',
    fmisStatus: 'Live'
  },

  {
    id: '3',
    bankCode: 'TCB',
    accountNumber: '3921347219048',
    status: 'Hoạt động',
    fmisStatus: 'Sandbox'
  },

  {
    id: '4',
    bankCode: 'MSB',
    accountNumber: '231289312734',
    status: 'Không hoạt động',
    fmisStatus: 'Live'
  },

  {
    id: '5',
    bankCode: 'VTB',
    accountNumber: '1293812093804',
    status: 'Hoạt động',
    fmisStatus: 'Sandbox'
  },

  {
    id: '6',
    bankCode: 'VTB',
    accountNumber: '1293812093804',
    status: 'Hoạt động',
    fmisStatus: 'Live'
  },

 

];


@Injectable({
  providedIn: 'root'
})
export class FilteredDataService {
  public filteredData: any[] = listOfData;

  setFilteredData(data: any[]) {
    this.filteredData = data;
  }

  getFilteredData() {
    return this.filteredData;
  }

  addDataToFilteredData(newData: AccountBanking) {
    this.filteredData.push(newData);
  }

  filterDataByFields(formData: any) {
    let searchData = this.filteredData;
  
    // Lọc dữ liệu dựa trên từng trường một nếu trường không rỗng
    if (formData.bankCode && formData.bankCode !== 'Tất Cả') {
      searchData = searchData.filter((item) => item.bankCode === formData.bankCode);
    }
  
    if (formData.status && formData.status !== 'Tất Cả') {
      searchData = searchData.filter((item) => item.status === formData.status);
    }
  
    if (formData.fmisStatus && formData.fmisStatus !== 'Tất Cả') {
      searchData = searchData.filter((item) => item.fmisStatus === formData.fmisStatus);
    }
  
    searchData=Object.assign([],searchData);
    // console.log(searchData);
    return searchData;
  }
}

