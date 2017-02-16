import { Component, OnInit } from '@angular/core';
import {Singer} from "../../database/entities/singer";

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {
  singers: Singer[] = [];
  constructor( ) { }

  ngOnInit() {

  }

}
