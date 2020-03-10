import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Architects of Belarus';

  constructor(private router: Router) {}

  ngOnInit() {}

  public goToPage(vaule: string): void {
    this.router.navigateByUrl(vaule);
  }
}
