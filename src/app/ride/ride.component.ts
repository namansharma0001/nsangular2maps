import { Component, OnInit,OnDestroy } from '@angular/core';
import { RideService } from './ride.service'


@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent implements OnInit,OnDestroy {

  constructor(private rideService:RideService) { }
  ltd:any;
  lng:any;
  locationArrayCount:number;
  locationArrayCurrentIndex:number=0;
  rideStatus:any;
  id:string;

  locationArray =  [ [ 12.91233, 77.5882 ],[ 12.91199, 77.5882 ],[ 12.91048, 77.58812 ],[ 12.91044, 77.58863 ],[ 12.91042, 77.58887 ],[ 12.91034, 77.59039 ],[ 12.91029, 77.5914 ],[ 12.91022, 77.59267 ],[ 12.91021, 77.59328 ],[ 12.91018, 77.59388 ],[ 12.91024, 77.59468 ],[ 12.9103, 77.59522 ],[ 12.91032, 77.59578 ],[ 12.91034, 77.59617 ],[ 12.91063, 77.5999 ],[ 12.91064, 77.6 ],[ 12.91078, 77.59998 ],[ 12.91105, 77.59995 ],[ 12.91275, 77.59984 ],[ 12.91338, 77.59983 ],[ 12.91415, 77.59985 ],[ 12.91432, 77.5998 ],[ 12.91448, 77.59981 ],[ 12.91631, 77.5998 ],[ 12.91646, 77.59983 ],[ 12.9166, 77.59991 ],[ 12.91667, 77.6 ],[ 12.91673, 77.60028 ],[ 12.9167, 77.60123 ],[ 12.91671, 77.60407 ],[ 12.91666, 77.60584 ],[ 12.91663, 77.60706 ],[ 12.9166, 77.60878 ],[ 12.91658, 77.61057 ],[ 12.91651, 77.61428 ],[ 12.91647, 77.61473 ],[ 12.91639, 77.61533 ],[ 12.91626, 77.61694 ],[ 12.91628, 77.61789 ],[ 12.91634, 77.61949 ],[ 12.91638, 77.6198 ],[ 12.9165, 77.62019 ],[ 12.91698, 77.62174 ],[ 12.91708, 77.62208 ],[ 12.91728, 77.62259 ],[ 12.91743, 77.6231 ],[ 12.91763, 77.62423 ],[ 12.91769, 77.62467 ],[ 12.9177, 77.62503 ],[ 12.91767, 77.6256 ],[ 12.91762, 77.6259 ],[ 12.91747, 77.62639 ],[ 12.91711, 77.62758 ],[ 12.91688, 77.62834 ],[ 12.91682, 77.62866 ],[ 12.91674, 77.63008 ],[ 12.9167, 77.63111 ],[ 12.91634, 77.63478 ],[ 12.91612, 77.63667 ],[ 12.91594, 77.63794 ],[ 12.91594, 77.63821 ],[ 12.91596, 77.63841 ],[ 12.91601, 77.63867 ],[ 12.91607, 77.63888 ],[ 12.91631, 77.63952 ],[ 12.9165, 77.63992 ],[ 12.91672, 77.64025 ],[ 12.91725, 77.64084 ],[ 12.91801, 77.6416 ],[ 12.91844, 77.64199 ],[ 12.91893, 77.64238 ],[ 12.92037, 77.64349 ],[ 12.92151, 77.64445 ],[ 12.92197, 77.64486 ],[ 12.92346, 77.64652 ],[ 12.92384, 77.64708 ],[ 12.92404, 77.64739 ],[ 12.92425, 77.64787 ],[ 12.92438, 77.6484 ],[ 12.92442, 77.64868 ],[ 12.9245, 77.64994 ],[ 12.92451, 77.65047 ],[ 12.92447, 77.65084 ],[ 12.92441, 77.65124 ],[ 12.92394, 77.65368 ],[ 12.9238, 77.65421 ],[ 12.9237, 77.65481 ],[ 12.92356, 77.65532 ],[ 12.92335, 77.65615 ],[ 12.92286, 77.65748 ],[ 12.92251, 77.65845 ],[ 12.922, 77.65997 ],[ 12.92179, 77.66073 ],[ 12.92145, 77.66222 ],[ 12.92136, 77.66263 ],[ 12.9211, 77.66347 ],[ 12.92096, 77.66387 ],[ 12.92075, 77.6646 ],[ 12.92071, 77.66491 ],[ 12.92074, 77.66515 ],[ 12.92075, 77.66531 ],[ 12.92086, 77.66557 ],[ 12.92079, 77.66559 ],[ 12.9207, 77.66565 ],[ 12.92058, 77.66537 ],[ 12.92054, 77.66521 ],[ 12.92074, 77.66515 ],[ 12.92075, 77.66531 ],[ 12.92058, 77.66537 ],[ 12.92054, 77.66521 ],[ 12.92053, 77.66496 ],[ 12.92054, 77.66478 ],[ 12.92068, 77.66422 ],[ 12.92124, 77.66232 ],[ 12.92132, 77.66206 ],[ 12.92139, 77.66209 ],[ 12.92171, 77.66066 ],[ 12.92188, 77.66004 ],[ 12.9221, 77.65933 ],[ 12.92243, 77.65838 ],[ 12.92275, 77.65754 ],[ 12.92325, 77.6561 ],[ 12.92345, 77.65539 ],[ 12.92372, 77.65408 ],
  [ 12.92403, 77.65248 ],[ 12.92433, 77.65076 ] ]

  ngOnInit() {

    this.locationArrayCount = this.locationArray.length;

  }

  updateLocation(){

    this.rideStatus = "Started";
    let id  = Math.random().toString(36).slice(2);
    this.rideService.updateLocation(-1,-1,id);
    this.id = id;

    var updateInterVal = setInterval(() => {

      if(this.locationArrayCurrentIndex < this.locationArrayCount && this.rideStatus == "Started"){

        this.ltd = this.locationArray[this.locationArrayCurrentIndex][0]
        this.lng = this.locationArray[this.locationArrayCurrentIndex][1]

        this.rideService.updateLocation(this.ltd,this.lng,id);
        this.locationArrayCurrentIndex++;
      }else{
        this.rideService.updateLocation(0,0,id);
        clearInterval(updateInterVal);

      }

    },1000)
 }

 stopRide(){
   this.rideStatus = "Ended";
   setTimeout(()=>{
     location.reload();
   },3000);

 }
 ngOnDestroy() {
   this.rideService.updateLocation(0,0,this.id);
 }
 redirectToTrack() {
       window.open( "track" );
}

 rideCurrentStatus(){
   if(this.rideStatus == "Started"){
     return false
   }else{
     return true
   }
 }



}
