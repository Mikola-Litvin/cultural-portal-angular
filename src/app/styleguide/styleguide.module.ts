import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { StyleguideRoutingModule } from './styleguide-routing.module';
import { StyleguideComponent } from './styleguide.component';


@NgModule({
  declarations: [StyleguideComponent],
  imports: [
    CommonModule,
    StyleguideRoutingModule,
    MatButtonModule
  ]
})
export class StyleguideModule { }
