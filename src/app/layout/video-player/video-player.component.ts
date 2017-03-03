import {Component, OnInit, Input} from '@angular/core';
import {video} from "../../database/entities/video";
import {VIDEO_DOMAIN} from "../../configs/app.config";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input() video: video;

  VIDEO_DOMAIN = VIDEO_DOMAIN;

  constructor() {

  }

  ngOnInit() {
    console.log(this.video);
  }

}
