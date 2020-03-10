import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-architect',
  templateUrl: './architect.component.html',
  styleUrls: ['./architect.component.scss']
})
export class ArchitectComponent {

  public architect = this.route.params.pipe(
    pluck('architectsId')
  );

  constructor(private route: ActivatedRoute) { }

}
