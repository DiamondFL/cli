import {Component, OnInit} from '@angular/core';
import {KeengService} from "../../services/keeng.service";
import {SONG} from "../../database/seeds/song";
import {VIDEO} from "../../database/seeds/video";
import {ALBUM} from "../../database/seeds/album";

@Component({
  selector: 'app-singer-detail',
  templateUrl: './singer-detail.component.html',
  styleUrls: ['./singer-detail.component.css']
})
export class SingerDetailComponent implements OnInit {
  singer: any;
  songs: any[];
  videos: any[];
  albums: any[];

  constructor(private keengService: KeengService) {

  }

  ngOnInit() {
    this.singer = {
      singer_name: 'Noo Phước Thịnh',
      image: 'http://vip.img.cdn.keeng.vn/sata11/singer/2016/04/22/aadba86309bd34bb1211e6484f2b2647a22dea45.jpg'
    };
    this.songs = SONG;
    this.videos = VIDEO;
    this.albums = ALBUM;
  }

}
