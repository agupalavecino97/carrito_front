import { Component, OnInit } from '@angular/core';

// models
import { Producto } from '../../models/producto';

const ELEMENT_DATA: Producto[] = [
  {id: '1', codigo: 'prod1', nombre: 'producto 1', cantidad: 5},
  {id: '2', codigo: 'prod2', nombre: 'producto 2', cantidad: 6},
  {id: '3', codigo: 'prod3', nombre: 'producto 3', cantidad: 12},
  {id: '4', codigo: 'prod4', nombre: 'producto 4', cantidad: 7},
  {id: '5', codigo: 'prod5', nombre: 'producto 5', cantidad: 45},
  {id: '6', codigo: 'prod6', nombre: 'producto 6', cantidad: 23},
];


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'codigo', 'nombre', 'cantidad'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
