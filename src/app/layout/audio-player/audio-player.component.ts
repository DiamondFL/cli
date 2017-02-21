import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {
  @Input() song: any;
  constructor() { }

  ngOnInit() {
  }

}
