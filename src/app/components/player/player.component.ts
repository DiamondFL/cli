import { Component, OnInit } from '@angular/core';
import {song} from "../../database/entities/song";
import {SONG} from "../../database/seeds/song";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  song: song = null;
  constructor() { }

  ngOnInit() {
    this.song = SONG[0];
  }

}
