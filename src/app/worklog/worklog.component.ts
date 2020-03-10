import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../servises/contentful.service';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.scss']
})
export class WorklogComponent implements OnInit {
  private worklogInfoID = '4hEeduGqq0GArexBesqLRS';
  public worklogInfo = this.contentfulService.getDataById(this.worklogInfoID);

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    // this.worklogInfo.subscribe(data => console.log(data))
  }
}
