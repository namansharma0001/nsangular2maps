import { Component, OnInit } from '@angular/core';
import { TrackRideService } from './track-ride.service';




@Component({
  selector: 'app-track-ride',
  templateUrl: './track-ride.component.html',
  styleUrls: ['./track-ride.component.css']
})
export class TrackRideComponent implements OnInit {

  constructor(private trackRideService:TrackRideService) { }

  connection:any;
  markersArray:any[]
  startingPointLtd:any;
  startingPointLng:any;
  currentPointLtd:any;
  currentPointLng:any;
  startIcon:string="http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|0000FF";
  endIcon:string="http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|006400"
  zoom: number = 8;
  status:string;

  ngOnInit() {
      // let mapData = this.trackRideService.getRiderLocation();
      // console.log(mapData);
      this.trackRideService.getRiderLocation().subscribe(location => {
      let locationData:any = location;
      this.status =locationData.status;
      let trackRecord = locationData.trackRecord;

      trackRecord.sort(function(a:any,b:any){
        let atime:any=new Date(a.time);
        let btime:any=new Date(b.time)
        return  btime - atime;
      });

      this.startingPointLtd = parseFloat(trackRecord[0].ltd);
      this.startingPointLng = parseFloat(trackRecord[0].lng);

      this.currentPointLtd = parseFloat(trackRecord[trackRecord.length-1].ltd);
      this.currentPointLng = parseFloat(trackRecord[trackRecord.length-1].lng);



      console.log(this.startingPointLtd)
      console.log(this.startingPointLng)
      console.log(this.currentPointLtd)
      console.log(this.currentPointLng)

    })

  }

}
