import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlbumsProvider } from '../../providers/albums/albums';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  photos: any;

  constructor(public navCtrl: NavController, private _albums: AlbumsProvider) {
    _albums.getMyAlbums().subscribe(data => {
      this.photos = data;
    })
  }

  getClass(photo) {
    let stringToReturn
    switch (photo.albumId) {
      case 100:
        stringToReturn = 'green'
        break;
      case 99:
        stringToReturn = 'blue'
        break;
      case 98:
        stringToReturn = 'purple'
        break;
    }
    return stringToReturn
  }
}
