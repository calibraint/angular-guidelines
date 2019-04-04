import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing-module';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';
import { HeaderComponent } from '../header/header.component';
import { LoginDialog } from '@appcore/dialogs/login-dialog/login.dialog';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LoginDialog
  ],
  entryComponents: [
    LoginDialog
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
