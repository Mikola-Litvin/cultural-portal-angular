import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchitectsRoutingModule } from './architects-routing.module';
import { ArchitectsComponent } from './architects.component';
import { ArchitectComponent } from './architect/architect.component';

import {LayoutModule} from '@angular/cdk/layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ArchitectsComponent, ArchitectComponent],
  imports: [
    CommonModule,
    ArchitectsRoutingModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ArchitectsModule { }
