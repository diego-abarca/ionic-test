import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AlbumsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlbumsProvider {

  constructor(public http: HttpClient) {
  }

  getMyAlbums() {
    return new Observable<any>(observer => {
      this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((photos: any[]) => {
        let lenght = 0;
        let albums = {};
        let photosToSend = [];
        photos.reverse().forEach((p, i) => {
          if (!albums[p.albumId]) {
            if (length < 3) {
              albums[p.albumId] = {
                albumId: p.albumId,
                photos: [0]
              }
              photosToSend.push(p)
              length++
            }
          } else {
            if (albums[p.albumId].photos.length < 2) {
              albums[p.albumId].photos.push(0)
              photosToSend.push(p)
            }
          }
        })
        observer.next(photosToSend);
      })
    })
  }

}
