import {Component, OnInit} from '@angular/core';
import {album} from "../../database/entities/album";
import {ALBUM} from "../../database/seeds/album";
import {song} from "../../database/entities/song";
import {SONG} from "../../database/seeds/song";
import {video} from "../../database/entities/video";
import {VIDEO} from "../../database/seeds/video";
import {topic} from "../../database/entities/topic";
import {TOPIC} from "../../database/seeds/topic";
import {flim} from "../../database/entities/flim";
import {FILM} from "../../database/seeds/flim";
import {ITEM_HOT} from "../../database/seeds/itemHots";
import {flashHot} from "../../database/entities/flash-hot";
import {FLASH_HOT} from "../../database/seeds/flash-hot";
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
  itemHots: any[] = [];
  flashHots: any[] = [];
  sources: Array<Object>;
  playlistHots: any[] = [];
  IMAGE_DOMAIN: string = IMAGE_DOMAIN;
  VIDEO_DOMAIN: string = VIDEO_DOMAIN;
  AUDIO_DOMAIN: string = AUDIO_DOMAIN;

  constructor(private keengService: KeengService) {

  }

  ngOnInit() {
    let params: string = '?size=6&size_flashhot=6';
    this.keengService.allData(params)
      .then(
        data => {
          this.flashHots = data.flashs;
          this.playlistHots = data.playlistHots;

          console.log(this.albums);
        },
        error => {
          console.log(error);
        }
      );
    this.albums = ALBUM;
    this.songs = SONG;
    this.videos = VIDEO;
    this.topics = TOPIC;
    this.films = FILM;
    this.itemHots = ITEM_HOT;

    this.sources = [
      {
        src: "http://keengmp3obj.1d2173fe.viettel-cdn.vn/bucket-media-keeng/sata07/video/2017/01/06/hgPLtlVTKDcS1fejBD1E586eff02e1896.mp4",
        type: "video/mp4"
      }
    ];
  }
}
