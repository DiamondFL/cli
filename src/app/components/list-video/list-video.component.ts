import { Component, OnInit } from '@angular/core';
import {KeengService} from "../../services/keeng.service";

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.css']
})
export class ListVideoComponent implements OnInit {
  hotVideos: any[];
  newVideos: any[];
  constructor(private keengService: KeengService) { }

  ngOnInit() {
    document.body.scrollTop = 0;
    this.keengService.videoList().then(
      data => {
        console.log(data);
        this.hotVideos = data.hotVideos;
        this.newVideos = data.newVideos;
      }
    );
  }

}
