import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';
import { HomeLayoutRoutingModule } from './home-layout-routing-module';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/shared/material.module';

import { HeaderModule } from '../header/header.module';
import { HomeComponent } from '@app/pages/home/home.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomeComponent
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeLayoutRoutingModule,
    MaterialModule,
    HeaderModule
  ]
})
export class HomeLayoutModule { }
