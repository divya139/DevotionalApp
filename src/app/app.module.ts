import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{RouterModule} from '@angular/router';
import{AppRoutingModule} from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { UploadComponent } from './upload/upload.component';
import { DataService} from './data.service';
import {Observable} from 'rxjs/Observable';
import { ViewDetailsComponent } from './view-details/view-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    UploadComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
