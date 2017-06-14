import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Socket } from 'ng-socket-io';

@Injectable()
export class TrackRideService {

  constructor(private socket:Socket) { }

  getRiderLocation() {
    console.log("oiioiugy")

      // var trackData = this.socket.on('trackRiderData', (data) => {
      //   console.log(trackData);
      // });
      // return trackData;

      let observable = new Observable(observer => {
        this.socket.on('trackRiderData', (data) => {
           observer.next(data);
         });
       })
       return observable;

  }
}
