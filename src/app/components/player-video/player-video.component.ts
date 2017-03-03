import {Component, OnInit, Input} from '@angular/core';
import {VIDEO} from "../../database/seeds/video";
import {video} from "../../database/entities/video";
import {FEELING} from "../../database/seeds/feeling";
import {ActivatedRoute} from "@angular/router";
import {KeengService} from "../../services/keeng.service";

@Component({
  selector: 'app-player-video',
  templateUrl: './player-video.component.html',
  styleUrls: ['./player-video.component.css']
})
export class PlayerVideoComponent implements OnInit {
  video:video = null;
  videos: video[] = null;
  feelings: feeling[] = null;
  constructor(  private route: ActivatedRoute,
                private keengService: KeengService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.keengService.videoPlayer(id).then(
      data => {
        this.video = data.video;
        console.log(data);
        console.log(data.video);
      }
    );
    this.videos = VIDEO;
    this.feelings = FEELING;
  }
}
