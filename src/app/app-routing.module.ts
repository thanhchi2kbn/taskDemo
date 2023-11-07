import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingAccountsBankingComponent } from './pages/setting-accounts-banking/setting-accounts-banking.component';
import { ModalAddComponent } from './components/modal-add/modal-add.component';


const routes: Routes = [
  {path: "" , component: SettingAccountsBankingComponent},
  {path: "account-setting/add-modal", component: ModalAddComponent},
  { path: "account-setting", component: SettingAccountsBankingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
