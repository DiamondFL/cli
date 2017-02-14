import { Component, OnInit } from '@angular/core';
import {VIDEO} from "../../database/seeds/video";

@Component({
  selector: 'app-player-radio',
  templateUrl: './player-radio.component.html',
  styleUrls: ['./player-radio.component.css']
})
export class PlayerRadioComponent implements OnInit {
  video: any = {};
  constructor() { }

  ngOnInit() {
    this.video = VIDEO[0];
  }

}
