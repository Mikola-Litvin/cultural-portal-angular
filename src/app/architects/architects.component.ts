import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../servises/contentful.service';
import {LanguageService} from '../servises/language.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-architects',
  templateUrl: './architects.component.html',
  styleUrls: ['./architects.component.scss']
})
export class ArchitectsComponent implements OnInit {
  private architectsInfoID = 'eqqoo4gVdSVoohQvDxlHC';
  public architectsInfo = this.contentfulService.getDataById(this.architectsInfoID);

  private firstEnterOnPage = true;
  public lang: string;
  private responseData: object;
  public architectsArr: object[] = [];

  constructor(
    private contentfulService: ContentfulService,
    private languageService: LanguageService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.languageService.language.subscribe(data => {
      this.lang = data;
      this.getCurrentLangData(data, this.responseData);
    });

    this.architectsInfo.subscribe(data => {
      this.responseData = data;
      this.getCurrentLangData(this.lang, data);
    });
  }

  private getCurrentLangData(lang: string, responseData): void {
    if (this.firstEnterOnPage) {
      this.firstEnterOnPage = false;
      return;
    }
    console.log(responseData);
    this.architectsArr.length = 0;
    responseData.data.forEach(item => this.architectsArr.push(item));
  }

  public sendId(id: string): void {
    this.route.navigate([`/architects/${id}`]);
  }
}
