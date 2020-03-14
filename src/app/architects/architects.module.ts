import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchitectsRoutingModule } from './architects-routing.module';
import { ArchitectsComponent } from './architects.component';
import { ArchitectComponent } from './architect/architect.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [ArchitectsComponent, ArchitectComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ArchitectsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
  ]
})
export class ArchitectsModule { }
