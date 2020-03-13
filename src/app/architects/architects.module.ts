import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchitectsRoutingModule } from './architects-routing.module';
import { ArchitectsComponent } from './architects.component';
import { ArchitectComponent } from './architect/architect.component';

import {LayoutModule} from '@angular/cdk/layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import { StepperComponent } from './stepper/stepper.component';
import {MatInputModule} from "@angular/material/input";
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [ArchitectsComponent, ArchitectComponent, StepperComponent],
  imports: [
    CommonModule,
    ArchitectsRoutingModule,
    LayoutModule,
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
  ],
  exports: [
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})

export class ArchitectsModule { }
