import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <section *ngFor="let p of hSvc.posts()">
        <a routerLink="/home/{{p.id}}"><b>{{p.title}}</b></a>
        <p>{{p.body}}</p>
      </section>
    </nav>
  `
})
export class HomeComponent {
  hSvc = inject(HomeService)

}
