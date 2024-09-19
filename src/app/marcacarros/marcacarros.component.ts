import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-marcacarros',
  templateUrl: './marcacarros.component.html',
  styleUrls: ['./marcacarros.component.css']
})
export class MarcacarrosComponent implements OnInit {
  cars: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/autos.json').subscribe(data => {
      this.cars = data;});
    }
}