import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../home/home.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-home-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
        <a><b>{{hSvc.post().title}}</b></a>
        <p>{{hSvc.post().body}}</p>
      </section>
  `,
})
export class HomeDetailComponent {
  hSvc = inject(HomeService)
  id = +this._activatedRoute.snapshot.paramMap.get('id')!;
  constructor(private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.hSvc.getPostDetail(this.id)
  }
}
