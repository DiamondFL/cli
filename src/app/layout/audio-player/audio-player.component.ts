import {Component, OnInit, Input} from '@angular/core';
import {MediaService} from "../../services/media.service";

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {
  @Input() song: any;

  player: any = {};
  playClass: boolean = false;

  constructor(private mediaService: MediaService) {
  }

  ngOnInit() {
    this.elements();
    this.mediaService.audio('?' + this.song.path)
      .then(
        data => {
          this.song.src = data;
          this.begin(data);
        }
      );
  }

  elements() {
    this.player.track = document.getElementById('audio');
    this.player.playBtn = document.getElementById('play');
    this.player.backBtn = document.getElementById('prev');
    this.player.nextBtn = document.getElementById('next');
    this.player.currentDuration = document.getElementById('current_time_display');
    this.player.bar = document.getElementById('progress_box');
    this.player.updateTime = 0;
    this.player.progressBar = document.getElementById('play_progress');
    this.player.progressBuffer = document.getElementById("load_progress");

  }

  begin(data: string) {
    this.song.src = 'http://nhachoa.keeng.vn/sas_01/songv3/NamViet0710/Vi_Anh_La_Gio_Edm_Ver.mp3?s=WEB&ot=song&oid=2407862&rt=p';
    //this.player.track.src = data;
    this.player.track.src = this.song.src;
    this.player.updateTime = setInterval(() => this.updateTrack(), 1000);
  }

  pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  };

  setProgressBar() {
    let size = this.player.track.currentTime * 100 / this.player.track.duration;
    this.player.progressBar.style.width = Math.round(size) + "%";
    let sizePx = this.player.track.currentTime * this.player.barSize / this.player.track.duration;
    this.player.progressBar.style.width = Math.round(sizePx) + "px";
    let playedMinutes = this.pad(Math.round(this.player.track.currentTime / 60));
    let playedSeconds = this.pad(Math.round(this.player.track.currentTime % 60));
    this.player.currentDuration.innerHTML = playedMinutes + ':' + playedSeconds;
  }

  endProgressBar() {
    this.player.currentDuration.innerHTML = '00.00';
    this.player.progressBar.style.width = '0px';
    window.clearInterval(this.player.updateTime);
  }

  updateTrack() {
    this.player.barSize = this.player.bar.offsetWidth;
    this.player.barSize = this.player.bar.offsetWidth;
    if (this.player.track !== undefined && !this.player.track.ended) {
      this.setProgressBar();
    } else {
      this.endProgressBar();
    }
    if (document.getElementById('audio') === null) {
      window.clearInterval(this.player.updateTime);
    }
  };

  changeBar(e: any) {
    if (!this.player.track.ended) {
      let mouseX = e.pageX - this.player.bar.offsetLeft;
      this.player.track.currentTime = mouseX * this.player.track.duration / this.player.barSize;
      this.player.progressBar.style.width = mouseX + 'px';
    }
  }

  togglePlay() {
    if (this.player.track.paused === true) {
      this.player.track.play();
      this.playClass = false;
      this.player.updateTime = setInterval(() => this.updateTrack(), 1000);
    } else {
      this.player.track.pause();
      this.playClass = true;
      window.clearInterval(this.player.updateTime);
    }
  }
}
