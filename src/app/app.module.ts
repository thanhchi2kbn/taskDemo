import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, NzTreeSelectModule, vi_VN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { SettingAccountsBankingComponent } from './pages/setting-accounts-banking/setting-accounts-banking.component';
import { FormAccountsBankingComponent } from './components/form-accounts-banking/form-accounts-banking.component';
import { SharedModule } from 'src/shared/shared.module';
import { TableAccoutsBankingComponent } from './components/table-accouts-banking/table-accouts-banking.component';
import { ModalAddComponent } from './components/modal-add/modal-add.component';
registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    SettingAccountsBankingComponent,
    FormAccountsBankingComponent,
    TableAccoutsBankingComponent,
    ModalAddComponent,


    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    NzTreeSelectModule,
    SharedModule
  ],
  providers: [{ provide: NZ_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
