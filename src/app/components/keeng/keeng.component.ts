import { Component, OnInit } from '@angular/core';
import {KeengService} from "../../services/keeng.service";

@Component({
  selector: 'app-keeng',
  templateUrl: './keeng.component.html',
  styleUrls: ['./keeng.component.css']
})
export class KeengComponent implements OnInit {
  flashHots: any[] = [];
  blogs: any[] = [];
  feelings: any[] = [];
  playlistHots: any[] = [];
  charts: any[] = [];
  topics: any[] = [];
  imagePatch: string = "http://vip.img.cdn.keeng.vn";
  videoPatch: string = "http://cdn1.keeng.net/bucket-media-keeng";
  audioPatch: string = "http://cdn1.keeng.net/bucket-audio-keeng";
  firstBlog: any = {};
  firstFeeling: any = {};
  constructor(
    private keengService: KeengService
  ) { }
//playlistHots
  ngOnInit() {
    this.keengService.index().then(data => {
      this.flashHots = data.flashs;
      this.charts = data.rankingvn;
      this.topics = data.topics;

      this.blogs = data.blogs;
      this.firstBlog = this.blogs[0];
      this.playlistHots = data.playlistHots;
      this.feelings = data.feelings;
      this.firstFeeling = data.feelings[0];
      console.log(data);
      console.log(this.firstBlog);
    })
  }

}
