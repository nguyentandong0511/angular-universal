import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, effect, signal } from '@angular/core';
import { Home } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  post = signal<Home.PostApiModel>({
    userId: 0,
    id: 0,
    title: '',
    body: ''
  })
  posts = signal<Home.PostApiModel[]>([])

  constructor(private http: HttpClient) { }

  e = effect(() => {
    this.getPosts()
  }, { allowSignalWrites: true })


  getPosts() {
    this.http.get<Home.PostApiModel[]>('https://jsonplaceholder.typicode.com/posts').subscribe(
      res => {
        this.posts.update(p => p = res)
      }
    )
  }

  getPostDetail(id: number) {
    this.clearSignal(this.post)
    this.http.get<Home.PostApiModel>(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe(
      res => {
        this.post.update(p => p = res)
      }
    )
  }


  clearSignal<T>(signal: WritableSignal<T>) {
    signal.mutate((s) => {
      s = null as T
    })
  }
}
