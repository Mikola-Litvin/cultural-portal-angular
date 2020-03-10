import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchitectsRoutingModule } from './architects-routing.module';
import { ArchitectsComponent } from './architects.component';
import { ArchitectComponent } from './architect/architect.component';


@NgModule({
  declarations: [ArchitectsComponent, ArchitectComponent],
  imports: [
    CommonModule,
    ArchitectsRoutingModule
  ]
})
export class ArchitectsModule { }
