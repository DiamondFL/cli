import { Component, OnInit } from '@angular/core';
import {SONG} from "../../database/seeds/song";
import {ALBUM} from "../../database/seeds/album";
import {VIDEO} from "../../database/seeds/video";

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  songs: any[];
  albums: any[];
  videos: any[];
  constructor() { }

  ngOnInit() {
    this.songs = SONG;
    this.albums = ALBUM;
    this.videos = VIDEO;
  }

}
