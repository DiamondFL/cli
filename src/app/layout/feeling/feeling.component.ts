import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-feeling',
  templateUrl: './feeling.component.html',
  styleUrls: ['./feeling.component.css']
})
export class FeelingComponent implements OnInit {

  constructor() { }
  @Input() feelings: any[];
  ngOnInit() {
  }

}
