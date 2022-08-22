import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Better Section Header';
  image1 = 'https://preview.redd.it/f58v4g8mwh551.jpg?width=640&crop=smart&auto=webp&s=f1ac5ce4b8411b6ba000dc0c4c37cd2e926fe814';
  image2 = 'https://external-preview.redd.it/wlmltbrPPqORxZyAZOraJDqAUyLTG5lZBhbYCMmjGEY.jpg?width=640&crop=smart&auto=webp&s=5a62716fcb8102dd0f2f354bc5eed2a609b23eef';
  image3 = 'https://preview.redd.it/v8y89qbj0w351.jpg?width=640&crop=smart&auto=webp&s=c2bcedbf88450f29cd6383e321ff76059b74ec87';
  image4 = 'https://i.imgur.com/3tFIv4d.gif';
  constructor() { }

  ngOnInit() {
  }

}