import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../servises/language.service';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {
  public lang: string;
  public translate = {
    by: {
      title: "Стылi",
      description: "Мы выкарыстоўваем стылi i кампаненты Angular Material, а таксама свае стылi ў гэтым праэкце."
    },
    en: {
      title: "Styleguide",
      description: "We use Angular Material styles and components and our own styles in the project."
    },
    ru: {
      title: "Стили",
      description: "Мы используем стили и компоненты Angular Material, а также свои стили в этом проекте."
    }
  }

  constructor(
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageService.language.subscribe(data => this.lang = data);
  }

}
