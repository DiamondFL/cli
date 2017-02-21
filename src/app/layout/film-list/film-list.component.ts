import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  @Input() films: any[];
  constructor() { }

  ngOnInit() {
  }

}
