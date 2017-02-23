var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
export var DPlayerComponent = (function () {
    function DPlayerComponent() {
        this.trackNo = 0;
        this.player = {};
        this.playClass = false;
        // this.player.track = new Audio();
    }
    DPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.song = this.songs[this.trackNo];
        this.player.track = document.getElementById('audio');
        this.player.track.src = this.song.file;
        // this.player.track.play();
        this.player.playBtn = document.getElementById('play');
        this.player.backBtn = document.getElementById('prev');
        this.player.nextBtn = document.getElementById('next');
        this.player.currentDuration = document.getElementById('current_time_display');
        this.player.bar = document.getElementById('progress_box');
        this.player.updateTime = 0;
        this.player.progressBar = document.getElementById('play_progress');
        this.player.progressBuffer = document.getElementById("load_progress");
        this.player.updateTime = setInterval(function () { return _this.updateTrack(); }, 1000);
    };
    DPlayerComponent.prototype.pad = function (d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    };
    ;
    DPlayerComponent.prototype.updateTrack = function () {
        console.log(this.player.track.currentTime);
        this.player.barSize = this.player.bar.offsetWidth;
        if (this.player.track !== undefined && !this.player.track.ended) {
            var size = this.player.track.currentTime * 100 / this.player.track.duration;
            this.player.progressBar.style.width = Math.round(size) + "%";
            var sizePx = this.player.track.currentTime * this.player.barSize / this.player.track.duration;
            this.player.progressBar.style.width = Math.round(sizePx) + "px";
            var playedMinutes = this.pad(Math.round(this.player.track.currentTime / 60));
            var playedSeconds = this.pad(Math.round(this.player.track.currentTime % 60));
            this.player.currentDuration.innerHTML = playedMinutes + ':' + playedSeconds;
        }
        else {
            this.player.currentDuration.innerHTML = '00.00';
            this.player.progressBar.style.width = '0px';
            window.clearInterval(this.player.updateTime);
        }
        if (document.getElementById('audio') === null) {
            window.clearInterval(this.player.updateTime);
        }
    };
    ;
    DPlayerComponent.prototype.updateLoading = function () {
        var percentLoad;
        if ((this.player.track.buffered != undefined) && (this.player.track.buffered.length != 0)) {
            percentLoad = (this.player.track.buffered.end(this.player.track.buffered.length - 1) * this.player.barSize) / this.player.track.duration;
            this.player.progressBuffer.style.width = percentLoad + "px";
        }
    };
    DPlayerComponent.prototype.changeBar = function (e) {
        if (!this.player.track.ended) {
            var mouseX = e.pageX - this.player.bar.offsetLeft;
            this.player.track.currentTime = mouseX * this.player.track.duration / this.player.barSize;
            this.player.progressBar.style.width = mouseX + 'px';
        }
    };
    DPlayerComponent.prototype.togglePlay = function () {
        if (this.player.track.paused === true) {
            this.player.track.play();
            this.playClass = false;
        }
        else {
            this.player.track.pause();
            this.playClass = true;
        }
    };
    DPlayerComponent.prototype.backTrack = function () {
        if (this.trackNo > 0) {
            this.trackNo--;
            this.song = this.songs[this.trackNo];
            this.player.track.src = this.song.file;
            this.player.track.play();
        }
    };
    DPlayerComponent.prototype.nextTrack = function () {
        if (this.trackNo < this.songs.length - 1) {
            this.trackNo++;
        }
        else {
            this.trackNo = 0;
        }
        this.song = this.songs[this.trackNo];
        this.player.track.src = this.song.file;
        this.player.track.play();
    };
    DPlayerComponent.prototype.changeSong = function (event) {
        this.song = event;
        this.player.track.src = this.song.file;
        //this.player.track.play();
    };
    DPlayerComponent.prototype.destruct = function () {
        this.player = {};
        this.song = null;
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], DPlayerComponent.prototype, "songs", void 0);
    DPlayerComponent = __decorate([
        Component({
            selector: 'app-d-player',
            templateUrl: './d-player.component.html',
            styleUrls: ['./d-player.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DPlayerComponent);
    return DPlayerComponent;
}());
//# sourceMappingURL=/var/www/html/material/src/app/layout/d-player/d-player.component.js.map