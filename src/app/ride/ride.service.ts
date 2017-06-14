import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Socket } from 'ng-socket-io';


@Injectable()
export class RideService {

  constructor(private socket:Socket) { }
   private url = 'http://localhost:5000';

   updateLocation(ltd,lng,id){
     console.log(ltd,lng);
     var location = {ltd,lng,id}
     this.socket.emit('riderLocation',location,function(err,data){
       console.log(err);
       console.log(data);
     });
   }

}
