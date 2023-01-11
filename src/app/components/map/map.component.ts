import { compileFactoryFunction } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  private map!: L.Map;
  private centroid: L.LatLngExpression = [41.9027835, 12.4963655];

  private initMap() {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12,
    });

    const tiles = L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    const greenIcon = L.icon({
      iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
      shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',

      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    const svgIcon = L.divIcon({
      html: `
    <div class="hotel-marker hotel-marker--likable" style="width: 28px;
    height: 34px;
    position: relative;
    pointer-events: none;">
    <div class="hotel-marker__pin" style="width: 28px;
    height: 34px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    pointer-events: none;">
        <div class="hotel-marker__icon" style="width: 8px;
        height: 8px;
        background-color: white;
        border: 1px solid white;
        border-radius: 50%;
        position: absolute;
        top: 9px;
        left: 9px;
        pointer-events: none;
        z-index: 2;">
            
        </div>
        <svg viewBox="-1 -1 26 32" class="hotel-marker__shape" style="fill: #003580;
        stroke: $white;
        stroke-width: 1px;
        pointer-events: none;">
            <path d="M24 12.4286C24 19.2927 12 29 12 29C12 29 0 19.2927 0 12.4286C0 5.56446 5.37258 0 12 0C18.6274 0 24 5.56446 24 12.4286Z"></path>
        </svg>
    </div>
</div>`,
      className: '',
      iconSize: [24, 40],
      iconAnchor: [12, 40],
    });

    const jittery = Array(5)
      .fill(this.centroid)
      .map((x) => [
        x[0] + (Math.random() - 0.5) / 10,
        x[1] + (Math.random() - 0.5) / 10,
      ])
      .map((x) => L.marker(x as L.LatLngExpression, { icon: svgIcon }))
      .forEach((x) => x.addTo(this.map));
    tiles.addTo(this.map);
  }

  constructor(public ref: DynamicDialogRef) {}

  ngOnInit() {
    this.initMap();
  }

  onCloseDialog() {
    this.ref.close();
  }
}
