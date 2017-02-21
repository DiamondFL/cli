import { Component, OnInit } from '@angular/core';
import {KeengService} from "../../services/keeng.service";
import {ALBUM} from "../../database/seeds/album";

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
    this.newAlbums = ALBUM;
    this.hotAlbums = ALBUM;
  }

}
