import {Component, OnInit, Input} from '@angular/core';
import {IMAGE_DOMAIN} from "../../configs/app.config";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  IMAGE_DOMAIN: string = IMAGE_DOMAIN;

  constructor( ) { }

  @Input() videos: any[];

  ngOnInit() {

  }

}
