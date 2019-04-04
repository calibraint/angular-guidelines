import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';
import { HomeLayoutRoutingModule } from './home-layout-routing-module';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';

import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '@app/pages/home/home.component';

import { LoginDialog } from '@appcore/dialogs/login-dialog/login.dialog';

@NgModule({
  declarations: [
    HomeLayoutComponent,
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
    HomeLayoutRoutingModule,
    MaterialModule
  ]
})
export class HomeLayoutModule { }
