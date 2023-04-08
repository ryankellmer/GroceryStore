import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { TaxesComponent } from './pages/taxes/taxes.component';

const routes: Routes = [{ path: 'login', component: LoginUserComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'taxes', component: TaxesComponent },
{ path: '', redirectTo: 'login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
