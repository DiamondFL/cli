import {Component, OnInit} from '@angular/core';
import {KeengService} from "./services/keeng.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent implements OnInit {
  common: any[] = [];
  linkFooter: any[] = [];
  constructor(private keengService: KeengService) {

  }
  ngOnInit(): void {
    this.keengService.common().then(
      data => {
        this.common = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.keengService.linkFooter().then(
      data => {
        this.linkFooter = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
