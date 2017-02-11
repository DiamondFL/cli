import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeroComponent} from "../components/hero/hero.component";
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {HeroDetailComponent} from "../components/hero-detail/hero-detail.component";
import {SingerComponent} from "../components/singer/singer.component";
import {KeengComponent} from "../components/keeng/keeng.component";
/**
 * Created by s on 2/8/17.
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/keeng',
    pathMatch: 'full'
  },
  {
    path: 'heroes', component: HeroComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'detail/:id', component: HeroDetailComponent
  },
  {
    path: 'singer', component: SingerComponent
  },
  {
    path: 'keeng', component: KeengComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingMoudle {}
// export const appRoutes = RouterModule.forRoot(routes);
