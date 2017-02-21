import { Component, OnInit } from '@angular/core';
import {SONG} from "../../database/seeds/song";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  newSongs: any[];
  hotSongs: any[];
  constructor() { }

  ngOnInit() {
    this.hotSongs = SONG;
    this.newSongs = SONG;
  }

}
