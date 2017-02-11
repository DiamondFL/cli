import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {SingerDirective} from './directive/singer.directive';
import {SingerComponent} from './components/singer/singer.component';
import {ForcePipe} from './pipes/force.pipe';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {HeroService} from "./services/hero.service";
import {HeroComponent} from './components/hero/hero.component';
import {AppRoutingMoudle} from "./routes/app.routes";
import {DashboardComponent} from './components/dashboard/dashboard.component';
//import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
//import {InMemoryDataService} from "./services/in-memory-data.service";
import {HeroSearchComponent} from './components/hero-search/hero-search.component';
import {HeroSearchService} from "./services/hero-search.service";
import {SingerService} from "./services/singer.service";
//import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { KeengComponent } from './components/keeng/keeng.component';
import {KeengService} from "./services/keeng.service";

import { CarouselModule } from 'ng2-bootstrap';
import {AlertModule} from "ng2-bootstrap";
@NgModule({
  declarations: [
    AppComponent,
    SingerComponent,
    SingerDirective,
    ForcePipe,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroSearchComponent,
    KeengComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingMoudle,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    //MaterialModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [HeroService, HeroSearchService, SingerService, KeengService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
