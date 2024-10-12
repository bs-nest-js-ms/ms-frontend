import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

  public sidenavWith: string = '300px';
  public collapse: boolean = false;

  public toogleCollapse () {
    this.collapse = !this.collapse;
    if (!this.collapse) {
      this.sidenavWith = '300px';
    } else {
      this.sidenavWith = '65px';
    }
  }

}
