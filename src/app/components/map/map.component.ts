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
  private centroid: L.LatLngExpression = [45.51, -122.68];

  private initMap() {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12,
    });

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const jittery = Array(5)
      .fill(this.centroid)
      .map((x) => [
        x[0] + (Math.random() - 0.5) / 10,
        x[1] + (Math.random() - 0.5) / 10,
      ])
      .map((x) => L.marker(x as L.LatLngExpression))
      .forEach((x) => x.addTo(this.map));
    tiles.addTo(this.map);
  }

  constructor(public ref: DynamicDialogRef){}

  ngOnInit() {
    this.initMap();
  }

  onCloseDialog() {
    this.ref.close();
  }
}
