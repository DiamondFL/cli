import { Component, OnInit } from '@angular/core';
import {album} from "../../database/entities/album";
import {ALBUM} from "../../database/seeds/album";
import {song} from "../../database/entities/song";
import {SONG} from "../../database/seeds/song";
import {video} from "../../database/entities/video";
import {VIDEO} from "../../database/seeds/video";
import {topic} from "../../database/entities/topic";
import {TOPIC} from "../../database/seeds/topic";
import {flim} from "../../database/entities/flim";
import {FILM} from "../../database/seeds/flim";
import {ITEM_HOT} from "../../database/seeds/itemHots";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  albums: album[] = [];
  songs: song[] = [];
  videos: video[] = [];
  topics: topic[] = [];
  films: flim[] = [];
  itemHots: any[] = [];
  constructor() { }

  ngOnInit() {
    this.albums = ALBUM;
    this.songs = SONG;
    this.videos = VIDEO;
    this.topics = TOPIC;
    this.films = FILM;
    this.itemHots = ITEM_HOT;
  }
}
