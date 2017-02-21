import { Component, OnInit } from '@angular/core';
import {VIDEO} from "../../database/seeds/video";
import {FEELING} from "../../database/seeds/feeling";

@Component({
  selector: 'app-player-livetv',
  templateUrl: './player-livetv.component.html',
  styleUrls: ['./player-livetv.component.css']
})
export class PlayerLivetvComponent implements OnInit {
  liveTv: any;
  feelings: any[];
  constructor() { }

  ngOnInit() {
    this.liveTv = VIDEO[0];
    this.feelings = FEELING;
  }

}
