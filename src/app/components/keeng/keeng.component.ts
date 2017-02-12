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
  categories: any[] = [];
  constructor(
    private keengService: KeengService
  ) { }
  ngOnInit() {
    this.keengService.index().then(data => {
      console.log(data);
      this.flashHots = data.flashs;
      this.charts = data.rankingvn;
      for(let i in this.charts) {    ;
        if(this.charts[i].image_path == null) {
          let singer_images: string[] = this.charts[i].singer_image.split("$");
          this.charts[i].image_path = singer_images[0];
        }
      }
      this.topics = data.topics;
      this.blogs = data.blogs;
      this.firstBlog = this.blogs[0];
      this.playlistHots = data.playlistHots;
      for(let i in this.playlistHots) {
        for(let j in this.playlistHots[i]) {
          if(this.playlistHots[i][j].image_path == null) {
            this.playlistHots[i][j].image_path = this.playlistHots[i][j].singer_image;
          }
        }
      }
      this.feelings = data.feelings;
      this.firstFeeling = data.feelings[0];
    });
    this.keengService.common().then(data => {
      console.log(data);
      this.categories = data.categories;
    });
  }

}
