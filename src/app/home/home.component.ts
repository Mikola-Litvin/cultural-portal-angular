import { Component, OnInit } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { ContentfulService } from '../servises/contentful.service';
import { LanguageService } from '../servises/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public lang: string;
  public data = this.contentfulService.getData();
  public architectOfDay: any;
  public architects = this.data.pipe(
    map((data: any) => {
      const idList: string[] = data.filter(item => item.fields.id === "architects");
      return idList;
    }),
    pluck('0'),
    pluck('fields'),
    pluck('data'),
  );

  public mainInfo = this.data.pipe(
    map((data: any) => {
      const idList: string[] = data.filter(item => item.fields.id === "mainInfo");
      return idList;
    }),
    pluck('0'),
    pluck('fields'),
    pluck('data')
  );

  public headerInfo = this.data.pipe(
    map((data: any) => {
      const idList: string[] = data.filter(item => item.fields.id === "headerinfo");
      return idList;
    }),
    pluck('0'),
    pluck('fields'),
    pluck('data')
  );
  
  constructor(
    private contentfulService: ContentfulService,
    private languageService: LanguageService
  ) {}

  public ngOnInit(): void {
    this.languageService.language.subscribe(data => this.lang = data);
    this.architectOfDay = this.architects.pipe(
      map(data => Object.values(data)),
      map(data => {
        const day = new Date().getDate();
        if (day <= data[0].length) return data[0][day - 1];
        const modulo = day - Math.floor(day / data[0].length) * data[0].length;
        if (!modulo) return data[0][data[0].length - 1];
        return data[0][modulo - 1];
      })
    );
  }
}
