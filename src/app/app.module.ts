import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RideComponent } from './ride/ride.component';
import {RideService} from './ride/ride.service';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { TrackRideComponent } from './track-ride/track-ride.component';
import { TrackRideService } from './track-ride/track-ride.service';
import { AgmCoreModule } from '@agm/core';
import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';
import { DirectionsMapDirective } from './directions-map.directive';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {forceNew: true} };





const appRoutes: Routes = [
  {
    path: '',
    pathMatch:"full",
    component: RideComponent,
  },
  {
    path: 'track',
    pathMatch:"full",
    component: TrackRideComponent,
  },
];

@NgModule({
  providers: [
    RideService,
    TrackRideService,
    GoogleMapsAPIWrapper
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SocketIoModule.forRoot(config),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzKcaJQ7eZ0p64sqq0to3OM-ljWMdiY8Y'
    })
  ],
  declarations: [
    AppComponent,
    RideComponent,
    TrackRideComponent,
    DirectionsMapDirective,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
