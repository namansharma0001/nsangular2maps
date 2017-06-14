import { Directive,Input,OnInit } from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';

declare var google: any;

@Directive({
  selector: 'agm-map-directions'
})
export class DirectionsMapDirective implements OnInit{
  @Input() startingPointLtd;
  @Input() startingPointLng;
  @Input() currentPointLtd;
  @Input() currentPointLng;
  constructor(private gmapsApi: GoogleMapsAPIWrapper) { }
  ngOnInit(){
    this.gmapsApi.getNativeMap().then(map => {
      console.log(map);
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(map);
            directionsService.route({
                    origin: {lat: this.startingPointLtd, lng: this.startingPointLng},
                    destination: {lat: this.currentPointLtd, lng: this.currentPointLng},
                    waypoints: [],
                    optimizeWaypoints: true,
                    travelMode: 'DRIVING'
                  }, function(response, status) {
                              if (status === 'OK') {
                                directionsDisplay.setDirections(response);
                              } else {
                                window.alert('Directions request failed due to ' + status);
                              }
            });

    });
  }
}
