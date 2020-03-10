import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorklogComponent } from './worklog.component';

const routes: Routes = [{ path: '', component: WorklogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorklogRoutingModule { }
