import { Component, OnInit } from '@angular/core';
import {SONG} from "../../database/seeds/song";
import {ALBUM} from "../../database/seeds/album";
import {FEELING} from "../../database/seeds/feeling";

@Component({
  selector: 'app-player-album',
  templateUrl: './player-album.component.html',
  styleUrls: ['./player-album.component.css']
})
export class PlayerAlbumComponent implements OnInit {
  song: any;
  songs: any[];
  albums: any[];
  feelings : any[];
  constructor() {
    this.song = SONG[0];
    this.songs = SONG;
    this.albums = ALBUM;
    this.feelings = FEELING;
  }

  ngOnInit() {

  }
}
