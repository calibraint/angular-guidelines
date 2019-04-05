import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginLayoutRoutingModule } from './login-layout-routing-module';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';

import { HeaderModule } from '../header/header.module';

import { LoginDialog } from '@appcore/dialogs/login-dialog/login.dialog';

@NgModule({
  declarations: [
    LoginLayoutComponent,
    LoginDialog
  ],
  entryComponents: [
    LoginDialog
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginLayoutRoutingModule,
    MaterialModule,
    HeaderModule
  ]
})
export class LoginLayoutModule { }
