import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WorklogRoutingModule } from './worklog-routing.module';
import { WorklogComponent } from './worklog.component';

@NgModule({
  declarations: [WorklogComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    WorklogRoutingModule
  ]
})
export class WorklogModule { }
