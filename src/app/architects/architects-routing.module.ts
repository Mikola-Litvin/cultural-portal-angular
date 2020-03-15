import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchitectsComponent } from './architects.component';
import { ArchitectComponent } from './architect/architect.component';

const routes: Routes = [
  { path: '', component: ArchitectsComponent },
  { path: ':architectsId', component: ArchitectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ ],
  exports: [RouterModule]
})
export class ArchitectsRoutingModule { }
