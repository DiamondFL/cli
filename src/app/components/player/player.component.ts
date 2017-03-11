import {Component, OnInit} from '@angular/core';
import {FEELING} from "../../database/seeds/feeling";
import {KeengService} from "../../services/keeng.service";
import {ActivatedRoute} from "@angular/router";
import {IMAGE_DOMAIN} from "../../configs/app.config";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  song: any = null;
  songs: any[] = null;
  albums: any[] = null;
  feelings: any[] = null;

  constructor(private keengService: KeengService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: number = this.route.snapshot.params['id'];
    this.keengService.songDetail(id)
      .then(
        data => {
          console.log(data);
          this.song = data.track;
          this.songs = data.relatedTracks;
          this.albums = data.hotAlbums;
          for(let i in this.albums) {
            this.albums[i].image = IMAGE_DOMAIN + JSON.parse(data.hotAlbums[i].images)[0]['origin'];
          }
        }
      );
    this.feelings = FEELING;
  }
}
