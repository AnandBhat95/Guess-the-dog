import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { BreedsComponent } from './breeds/breeds.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {
    component: GameComponent,
    path: 'game',
    canActivate: [AuthGuard]
  }, {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: LogoutComponent,
    path: 'logout'
  },
  {
    component: BreedsComponent,
    path: 'breeds',
    canActivate: [AuthGuard]
  },
  {
    component: AboutComponent,
    path: 'about',
    canActivate: [AuthGuard]
  },
  {
    component: HomeComponent,
    path: ''
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
