import { Component, OnInit } from '@angular/core';
import {SONG} from "../../database/seeds/song";
import {ALBUM} from "../../database/seeds/album";
import {FEELING} from "../../database/seeds/feeling";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  song: any;
  songs: any[];
  albums: any[];
  feelings: any[];
  constructor() { }

  ngOnInit() {
    this.song = SONG[0];
    this.songs = SONG;
    this.albums = ALBUM;
    this.feelings = FEELING;
  }
}
