import {Component, OnInit, Input} from '@angular/core';
import {VIDEO} from "../../database/seeds/video";
import {video} from "../../database/entities/video";
import {FEELING} from "../../database/seeds/feeling";
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {KeengService} from "../../services/keeng.service";
import {normalizeSrc} from "../../helpers/standlizied";

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
                private router: Router,
                private keengService: KeengService) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      let id = this.route.snapshot.params['id'];
      this.keengService.videoPlayer(id).then(
        res => {
          let data = res['data'];
          let headers = res['headers'];
          let videoSrc = [
            ['video', headers['video']]
          ];
          this.video = normalizeSrc(videoSrc, data.video);
          this.videos = data.relatedVideos;
        }
      );
    });
    this.feelings = FEELING;
  }
}
