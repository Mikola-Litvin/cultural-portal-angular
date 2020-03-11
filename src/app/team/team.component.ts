import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ContentfulService } from '../servises/contentful.service';
import { LanguageService } from '../servises/language.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  private teamInfoID = '29trzImNswYGvQOu9lIO5y';
  public teamInfo = this.contentfulService.getDataById(this.teamInfoID)
    .pipe(map((data: any) => Object.values(data)));
  public lang: string;

  constructor(
    private contentfulService: ContentfulService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageService.language.subscribe(data => this.lang = data);
  }
}
