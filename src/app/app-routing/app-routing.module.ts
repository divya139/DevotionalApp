import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import{UploadComponent} from '../upload/upload.component'
import{ViewComponent} from '../view/view.component';
import{ViewDetailsComponent}from '../view-details/view-details.component';

const routes: Routes = [
    {path: 'viewSongs', component: ViewComponent},
    { path: 'uploadSong', component: UploadComponent},
    { path: '', redirectTo: '/viewSongs', pathMatch: 'full' },
    { path: 'detail/:id', component: ViewDetailsComponent }
  ]
  @NgModule({
    exports:[RouterModule],
    imports: [ RouterModule.forRoot(routes) ],
  })
  
  export class AppRoutingModule {
   
   }