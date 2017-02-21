import {Component, OnInit, ViewChild} from '@angular/core';
import {KeengService} from "./services/keeng.service";
import { ModalDirective } from 'ng2-bootstrap/modal';

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

  @ViewChild('childModal') public childModal:ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
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
    // this.keengService.linkFooter().then(
    //   data => {
    //     this.linkFooter = data;
    //     console.log(data);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
  }
}
