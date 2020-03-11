import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { map } from 'rxjs/operators';
import { ContentfulService } from '../servises/contentful.service';
import { LanguageService } from '../servises/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private headerInfoID = '1HyR1RNVv0P4Osg7QwBLRk';
  public headerInfo = this.contentfulService.getDataById(this.headerInfoID);
  public lang: string;

  constructor(
    private router: Router,
    private contentfulService: ContentfulService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageService.language.subscribe(data => this.lang = data);
  }

  public goToPage(vaule: string): void {
    this.router.navigateByUrl(vaule);
  }

  public changeLang(value: string) {
    this.languageService.language.next(value);
  }
}
