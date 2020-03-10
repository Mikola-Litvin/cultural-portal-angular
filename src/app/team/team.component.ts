import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../servises/contentful.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  private teamInfoID = '29trzImNswYGvQOu9lIO5y';
  public teamInfo = this.contentfulService.getDataById(this.teamInfoID).pipe(map((data: any) => Object.values(data)));

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.teamInfo.subscribe(data => console.log(data))
  }
}
