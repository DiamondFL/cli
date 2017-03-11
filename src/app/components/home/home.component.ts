import {Component, OnInit} from '@angular/core';
import {KeengService} from "../../services/keeng.service";
import {IMAGE_DOMAIN} from "../../configs/app.config";
import {normalizeSrc} from "../../helpers/standlizied";

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
        res => {
          console.log(res);
          let data = res['data'];
          let headers = res['headers'];
          let audioSrc = [
            ['audio', headers['audio']]
          ];
          let albumSrc = [
            ['image', headers['image']]
          ];
          this.albums = normalizeSrc(albumSrc, data.hotAlbums);
          let videoSrc = [
            ['video', headers['video']]
          ];

          this.videos = normalizeSrc(videoSrc, data.hotVideos);
          this.flashHots = data.flashHot;
          this.songs = normalizeSrc(audioSrc, data.hotTracks);
          console.log(this.videos);
        }
      );
  }
}
