import { Component, OnInit } from '@angular/core';
import {FEELING} from "../../database/seeds/feeling";
import {KeengService} from "../../services/keeng.service";
import {ActivatedRoute} from "@angular/router";
import {IMAGE_DOMAIN} from "../../configs/app.config";
import {MediaService} from "../../services/media.service";

@Component({
  selector: 'app-player-album',
  templateUrl: './player-album.component.html',
  styleUrls: ['./player-album.component.css'],
})
export class PlayerAlbumComponent implements OnInit {
  album: any;
  albums: any[];
  feelings : any[];
  song: any;
  songs: any[];

  constructor(
    private keengService: KeengService,
    private route: ActivatedRoute,
    private mediaService: MediaService
  ) {
    this.feelings = FEELING;
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.keengService.albumPlayer(id).then(
      data => {
        console.log(data);
        this.album = data.album;
        this.songs = data.tracks;
        this.song = this.songs[0];

        this.albums = data.relatedAlbums;
        for(let i in this.albums) {
          this.albums[i].image = IMAGE_DOMAIN + JSON.parse(this.albums[i].images)[0]['origin'];
        }
      }
    );
  }
}
