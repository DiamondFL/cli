import { Component, OnInit } from '@angular/core';
import {FEELING} from "../../database/seeds/feeling";
import {KeengService} from "../../services/keeng.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {normalizeAudioSrc, normalizeImageSrc, normalizeSrc} from "../../helpers/standlizied";

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
    private router: Router,
    private keengService: KeengService,
    private route: ActivatedRoute,
  ) {
    this.feelings = FEELING;
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      let id = this.route.snapshot.params['id'];
      this.keengService.albumPlayer(id).then(
        res => {
          let data:any = res['data'];
          let headers:any = res['headers'];
          let audioSrc = [
            ['audio', headers['audio']]
          ];
          let albumSrc = [
            ['image', headers['image']]
          ];
          this.album = data.album;
          this.songs = normalizeSrc(audioSrc, data.tracks);
          this.albums = normalizeSrc(albumSrc, data.relatedAlbums);
          this.song = this.songs[0];
        }
      );
    });
  }
}
