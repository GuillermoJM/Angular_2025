import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';
import { DragonBallPageComponent } from './pages/dragonball/dragonball-page';
import { DragonBallSuperPageComponent } from './pages/dragonball-super/dragonball-super-page';

export const routes: Routes = [
  {
    path:'',
    component:CounterPageComponent
  },
  {

    path:'hero',
    component:HeroPageComponent,

  },
  {

    path:'dragonball',
    component:DragonBallPageComponent,

  },
  {

    path:'dragonball-super',
    component:DragonBallSuperPageComponent,

  },
  {
    path:'**',
    redirectTo:''
  }
];
