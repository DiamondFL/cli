import {Component, OnInit} from '@angular/core';
import {KeengService} from "../../services/keeng.service";
import {IMAGE_DOMAIN} from "../../configs/app.config";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  albums: any[] = [];
  songs: any[] = [];
  videos: any[] = [];
  flashHots: any[] = [];
  IMAGE_DOMAIN: string = IMAGE_DOMAIN;
  constructor(private keengService: KeengService) {

  }

  ngOnInit() {
    this.keengService.home()
      .then(
        data => {
          this.albums = data.hotAlbums;
          for(let i in this.albums) {
            this.albums[i].image = IMAGE_DOMAIN + JSON.parse(data.hotAlbums[i].images)[0]['origin'];
          }
          this.videos = data.hotVideos;
          this.flashHots = data.flashHot;
          this.albums = data.hotAlbums;
          this.songs = data.hotTracks;
        }
      );
  }
}
