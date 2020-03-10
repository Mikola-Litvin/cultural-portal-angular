import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../servises/contentful.service';

@Component({
  selector: 'app-architects',
  templateUrl: './architects.component.html',
  styleUrls: ['./architects.component.scss']
})
export class ArchitectsComponent implements OnInit {
  private architectsInfoID = 'eqqoo4gVdSVoohQvDxlHC';
  public architectsInfo = this.contentfulService.getDataById(this.architectsInfoID);

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.architectsInfo.subscribe(data => console.log(data))
  }
}
