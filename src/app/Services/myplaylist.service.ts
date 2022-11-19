import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyplaylistService {

  public movieItemList: any = []
  public movieList = new BehaviorSubject<any>([]);

  constructor() { }

  getMovie() {
    return this.movieList.asObservable();
  }
  setMovie(prouct: any) {
    this.movieItemList.push(...prouct);
    this.movieList.next(prouct);
  }
  addtoList(product: any) {
    this.movieItemList.push(product);
    this.movieList.next(this.movieItemList);
    console.log(this.movieItemList);
  }

  removePlaylistItem(product: any) {
    this.movieItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.movieItemList.splice(index, 1);
      }
    })
    this.movieList.next(this.movieItemList)
  }

  removeAll() {
    this.movieItemList = [];
    this.movieList.next(this.movieItemList);
    this.movieList.next(this.movieItemList)
  }

}
