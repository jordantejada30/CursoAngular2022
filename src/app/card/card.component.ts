import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image: string = 'https://img.freepik.com/vector-gratis/fondo-paisaje-primavera-hermosa-dibujada_23-2148857331.jpg?w=2000';
  public title: string = 'Curso de angular con interpolación';

  constructor() { }

  ngOnInit(): void {
  }

}
