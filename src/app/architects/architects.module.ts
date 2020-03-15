import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchitectsRoutingModule } from './architects-routing.module';
import { ArchitectsComponent } from './architects.component';
import { ArchitectComponent } from './architect/architect.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MglTimelineModule} from 'angular-mgl-timeline.9';
import {AngularYandexMapsModule} from 'angular8-yandex-maps';
import {BoldDirective} from './directives/bold.directive';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FilterPipe } from '../pipes/filter.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ArchitectsComponent, ArchitectComponent, BoldDirective, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ArchitectsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule,
    MatExpansionModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MglTimelineModule,
    FormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    AngularYandexMapsModule.forRoot (
      '23b74637-3ecf-4417-8178-bb00a0411ee9')
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    BoldDirective
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})

export class ArchitectsModule { }
