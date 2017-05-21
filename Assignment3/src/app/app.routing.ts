/**
 * Created by Andrew on 2017-05-21.
 */
import {ModuleWithProviders}   from '@angular/core';
import {Routes, RouterModule}  from '@angular/router';
import {HomeComponent} from './app.home';
import {AboutComponent} from './app.about';
import {DetailComponent} from './app.detail';
import {DefaultComponent} from  './app.pagedefault';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: DefaultComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
