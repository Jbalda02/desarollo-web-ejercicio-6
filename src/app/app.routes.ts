import { Routes } from '@angular/router';
import { HeroComponent } from './componentes/hero/hero.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { AlbumViewComponent } from './componentes/album-view/album-view.component';

export const routes: Routes = [
  { path: 'home', component: AlbumViewComponent }, // Remove the leading slash
  { path: 'tabla', component: TablaComponent }, // Remove the leading slash
];