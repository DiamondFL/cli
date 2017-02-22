import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-songs-in-album',
  templateUrl: './songs-in-album.component.html',
  styleUrls: ['./songs-in-album.component.css']
})
export class SongsInAlbumComponent implements OnInit {
  @Input() songs: any[];
  @Output() changeAudio: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  changeSong(song: any) {
    this.changeAudio.emit(song);
    console.log('change Song')
  }
}
