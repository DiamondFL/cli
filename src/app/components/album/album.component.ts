import { Component, OnInit } from '@angular/core';
import {KeengService} from "../../services/keeng.service";
import {IMAGE_DOMAIN} from "../../configs/app.config";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  newAlbums: any[];
  hotAlbums: any[];
  constructor(private keengService: KeengService) {}

  ngOnInit() {
    this.keengService.albumList().then(
      data => {
        console.log(data);
        this.newAlbums = data.newAlbums;
        for(let i in this.newAlbums) {
          this.newAlbums[i].image = IMAGE_DOMAIN + JSON.parse(data.newAlbums[i].images)[0]['origin'];
        }
        this.hotAlbums = data.hotAlbums;
        for(let i in this.hotAlbums) {
          this.hotAlbums[i].image = IMAGE_DOMAIN + JSON.parse(data.hotAlbums[i].images)[0]['origin'];
        }
      }
    );
  }
}
