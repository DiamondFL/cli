import { Component, OnInit } from '@angular/core';
import {KeengService} from "../../services/keeng.service";
import {VIDEO} from "../../database/seeds/video";

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
    this.hotVideos = VIDEO;
    this.newVideos = VIDEO;
  }

}
