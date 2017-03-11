import {Component, OnInit, Input} from '@angular/core';
import {video} from "../../database/entities/video";
import {VIDEO_DOMAIN} from "../../configs/app.config";
import {MediaService} from "../../services/media.service";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input() video: video;
  sources: any[];
  constructor(private mediaService: MediaService) {

  }

  ngOnInit() {

  }

  ngOnChanges(changes: any) {
    if (changes.video.currentValue !== null) {
      this.mediaService.video(this.video['src']).then(
        res => {
          this.sources = res;
        }
      );
    }
  }
}
