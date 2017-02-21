import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-media-hot',
  templateUrl: './media-hot.component.html',
  styleUrls: ['./media-hot.component.css']
})
export class MediaHotComponent implements OnInit {
  @Input() itemHots: any[];
  constructor() { }

  ngOnInit() {
  }

}
