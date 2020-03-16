import { AfterViewChecked, Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { pluck } from 'rxjs/operators';
import { ContentfulService } from '../../servises/contentful.service';
import { LanguageService } from 'src/app/servises/language.service';
import { SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-architect',
  templateUrl: './architect.component.html',
  styleUrls: ['./architect.component.scss']
})
export class ArchitectComponent implements OnInit, AfterViewChecked {

  public architect = this.route.params.pipe(
    pluck('architectsId')
  );

  private architectsInfoID = 'eqqoo4gVdSVoohQvDxlHC';
  public architectsInfo = this.contentfulService.getDataById(this.architectsInfoID);

  public lang: string;
  private responseData: object;
  private firstEnterOnPage = true;
  public arch: any;

  public architectId: string;
  public lat: number;
  public lng: number;
  public zoom: number;
  public safeSrc: SafeResourceUrl;

  public content: object = {
    en: {
      biography: 'Biography',
      works: 'Works',
      map: 'Map',
      movie: 'Movie'
    },
    ru: {
      biography: 'Биография',
      works: 'Работы',
      map: 'Карта',
      movie: 'Видео'
    },
    by: {
      biography: 'Біяграфія',
      works: 'Работы',
      map: 'Карта',
      movie: 'Відэа'
    }
  };

    constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService,
    private languageService: LanguageService
  ) {
      this.safeSrc = '';
  }

  private setArchitectDetails(data) {
    if (this.firstEnterOnPage) {
      this.firstEnterOnPage = false;
      return;
    }
    this.architect.subscribe(
      id => {
        this.architectId = id;
      }
    );
    // @ts-ignore
    this.arch = data.data.find(item => item.id === this.architectId);
    this.lat = +this.arch.coords.split(',')[0];
    this.lng = +this.arch.coords.split(',')[1];
    this.zoom = 8;
    console.log(this.arch);
  }

  public ngOnInit(): void {
    this.languageService.language.subscribe(data => {
      this.lang = data;
      this.setArchitectDetails(this.responseData);
    });

    this.architectsInfo.subscribe(data => {
      this.responseData = data;
      this.setArchitectDetails(data);
    });
  }

  public ngAfterViewChecked(): void {

    if (!document.querySelector('.modal-trigger')) { return; }

    const body = document.body;
    const modal = document.querySelector('.modal');
    const trigger = document.querySelector('.modal-trigger');
    const iframe = document.querySelector('.youtube');

    trigger.addEventListener('click', (event) => {
      event.preventDefault();

      const id = document.querySelector('.modal-trigger').getAttribute('data-id');
      const src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

      iframe.setAttribute('src', src);
      body.classList.add('noscroll');
      modal.classList.add('show');
    });

    function closeModal(event) {
      event.preventDefault();

      body.classList.remove('noscroll');
      modal.classList.remove('show');
      iframe.setAttribute('src', '');
    }

    document.querySelector('.hide').addEventListener('click', (event) => {
      closeModal(event);
    });

    body.addEventListener('keypress', (event) => {
      if (event.key === 'Escape') {
        closeModal(event);
      }
    });
  }
}
