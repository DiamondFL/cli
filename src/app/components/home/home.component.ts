import {Component, OnInit} from '@angular/core';
import {topic} from "../../database/entities/topic";
import {flim} from "../../database/entities/flim";
import {KeengService} from "../../services/keeng.service";
import {IMAGE_DOMAIN, VIDEO_DOMAIN, AUDIO_DOMAIN} from "../../configs/app.config";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  albums: any[] = [];
  songs: any[] = [];
  videos: any[] = [];
  topics: topic[] = [];
  films: flim[] = [];
  flashHots: any[] = [];
  playlistHots: any[] = [];
  IMAGE_DOMAIN: string = IMAGE_DOMAIN;

  constructor(private keengService: KeengService) {
    // let a = (JSON.parse('[{"origin":"images/tintuc/2017/02/20/kSkYzfReH3yuWaC23kmb58aa97cfb8d65.PNG"},{"640":"images/images_thumb/f_sata11/images/tintuc/2017/02/20/kSkYzfReH3yuWaC23kmb58aa97cfb8d65_640_293.PNG"},{"684":"images/images_thumb/f_sata11/images/tintuc/2017/02/20/kSkYzfReH3yuWaC23kmb58aa97cfb8d65_684_286.PNG"},{"700":"images/images_thumb/f_sata11/images/tintuc/2017/02/20/kSkYzfReH3yuWaC23kmb58aa97cfb8d65_700_293.PNG"}]'));
    // console.log(a[3]['700'])
  }


  ngOnInit() {
    this.keengService.home()
      .then(
        data => {
          this.albums = data.hotAlbums;
          for(let i in this.albums) {
            this.albums[i].image = IMAGE_DOMAIN + JSON.parse(data.hotAlbums[i].images.slice(0, -1)).origin;
          }
          this.videos = data.hotVideos;
          //console.log(data);
          //console.log(data.hotTracks[0]);
          this.flashHots = data.flashHot;
          this.playlistHots = data.playlistHots;
          this.albums = data.hotAlbums;
          this.songs = data.hotTracks;
        },
        error => {
          console.log(error);
        }
      );
  }
}
