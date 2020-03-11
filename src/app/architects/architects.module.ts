import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchitectsRoutingModule } from './architects-routing.module';
import { ArchitectsComponent } from './architects.component';
import { ArchitectComponent } from './architect/architect.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ArchitectsComponent, ArchitectComponent],
  imports: [
    CommonModule,
    ArchitectsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ArchitectsModule { }
