import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  appTitle = this._title.getTitle();
  constructor(private _meta: Meta, private _title: Title) {
    this.setTitle('Home Page');
    this._meta.addTags([
      { name: 'title', content: this.appTitle + ' My Angular Universal Application' },
      { name: 'description', content: 'This is my Angular Universal application.' },
      { name: 'keywords', content: 'Angular, Universal, SEO' },
    ]);
  }

  setTitle(newTitle: string) {
    this._title.setTitle(newTitle);
  }
}
