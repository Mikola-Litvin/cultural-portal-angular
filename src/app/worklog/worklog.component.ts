import { Component, OnInit } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { ContentfulService } from '../servises/contentful.service';
import { LanguageService } from '../servises/language.service';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.scss']
})
export class WorklogComponent implements OnInit {
  public sum = 0;
  public lang: string;
  public data = this.contentfulService.getData();
  public requirements = this.data.pipe(
    map((data: any) => {
      const idList: string[] = data.filter(item => item.fields.id === "requirements");
      return idList;
    }),
    pluck('0'),
    pluck('fields'),
    pluck('data'),
    pluck('requirements')
  );

  public worklog = this.data.pipe(
    map((data: any) => {
      const idList: string[] = data.filter(item => item.fields.id === "worklog");
      return idList;
    }),
    pluck('0'),
    pluck('fields'),
    pluck('data'),
    map(data => Object.values(data))
  );

  public difficulties = this.data.pipe(
    map((data: any) => {
      const idList: string[] = data.filter(item => item.fields.id === "difficulties");
      return idList;
    }),
    pluck('0'),
    pluck('fields'),
    pluck('data'),
    pluck('0')
  );
  
  constructor(
    private contentfulService: ContentfulService,
    private languageService: LanguageService
  ) {}

  public ngOnInit(): void {
    this.languageService.language.subscribe(data => this.lang = data);
    this.requirements.subscribe(data => this.sum = 
      data.filter(item => item.status)
      .reduce((sum, item) => {
      return sum + Number(item.points)}, 0)
    );
  }

  public calculatePoints($event) {
    if ($event.target.checked) {
      this.sum = this.sum + Number($event.target.value);
    } else {
      this.sum = this.sum - Number($event.target.value);
    }
  }
}
