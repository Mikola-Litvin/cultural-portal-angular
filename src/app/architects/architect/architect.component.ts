import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { pluck } from 'rxjs/operators';
import {ContentfulService} from '../../servises/contentful.service';
import { LanguageService } from 'src/app/servises/language.service';

@Component({
  selector: 'app-architect',
  templateUrl: './architect.component.html',
  styleUrls: ['./architect.component.scss']
})
export class ArchitectComponent implements OnInit{

  public architect = this.route.params.pipe(
    pluck('architectsId')
  );

  private architectsInfoID = 'eqqoo4gVdSVoohQvDxlHC';
  public architectsInfo = this.contentfulService.getDataById(this.architectsInfoID);

  public lang: string;
  private responseData: object;
  private firstEnterOnPage = true;
  public architectsArr: object[] = [];

  public architectDetails: any = {};
  public architectId: string;

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService,
    private languageService: LanguageService,
  ) {}

  private getCurrentLangData(lang: string, responseData): void {
    if (this.firstEnterOnPage) {
      this.firstEnterOnPage = false;
      return;
    }
    this.architectsArr.length = 0;
    responseData.data.forEach(item => this.architectsArr.push(item));
  }

  private setArchitectDetails(){
    // if(this.firstEnterOnPage){
    //   this.firstEnterOnPage = false;
    //   return
    // }
    this.architect.subscribe(
      id => {
        this.architectId = id;
      }
    );
    // @ts-ignore
    this.architectDetails = this.responseData.data.find(item => item.id === this.architectId);
    console.log( 2);
    console.log( this.architectDetails);
  }

  public ngOnInit(): void {
    this.architectsInfo.subscribe(data => {
      this.responseData = data;

      this.languageService.language.subscribe(data => {
        this.lang = data;
        // this.getCurrentLangData(data, this.responseData);
        this.setArchitectDetails();

      });
      console.log( 1);
      console.log( this.responseData);
      // this.setArchitectDetails();
    });
  }
}
