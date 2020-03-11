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

  public arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.architectsInfo.subscribe(data => console.log(data));
  }
}
