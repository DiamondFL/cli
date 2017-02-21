import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.css']
})
export class AudioListComponent implements OnInit {
  @Input() songs: any[];
  constructor() { }

  ngOnInit() {
  }

}
