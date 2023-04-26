import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TitleComponent } from './components/title/title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { TaxesComponent } from './pages/taxes/taxes.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { InventoryButtonComponent } from './components/inventory-button/inventory-button.component';
import { TitleWithoutLinksComponent } from './components/title-without-links/title-without-links.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TitleComponent,
    InventoryComponent,
    TaxesComponent,
    LoginUserComponent,
    InventoryButtonComponent,
    TitleWithoutLinksComponent,
  ],
  imports: [
    BrowserModule,
    NgMultiSelectDropDownModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
