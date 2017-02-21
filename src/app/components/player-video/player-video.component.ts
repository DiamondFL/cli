import {Component, OnInit, Input} from '@angular/core';
import {VIDEO} from "../../database/seeds/video";
import {video} from "../../database/entities/video";
import {FEELING} from "../../database/seeds/feeling";

@Component({
  selector: 'app-player-video',
  templateUrl: './player-video.component.html',
  styleUrls: ['./player-video.component.css']
})
export class PlayerVideoComponent implements OnInit {
  video:video = null;
  videos: video[] = null;
  feelings: feeling[] = null;
  constructor() { }

  ngOnInit() {
    this.video = VIDEO[0];
    this.videos = VIDEO;
    this.feelings = FEELING;
  }
}
