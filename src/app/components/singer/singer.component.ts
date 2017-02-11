import { Component, OnInit } from '@angular/core';
import {SingerService} from "../../services/singer.service";
import {Singer} from "../../database/entities/singer";

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {
  singers: Singer[] = [];
  constructor(
    private singerService: SingerService
  ) { }

  ngOnInit() {
    this.singerService.index().then(data => {
      this.singers = data;
      console.log(data);
    } )
  }

}
