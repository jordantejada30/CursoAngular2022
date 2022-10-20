import { Component, OnInit } from '@angular/core';

interface Tarjeta {
  titulo: string;
  subtitulo: string;
  nro?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'MiPrimerApp';

  public ArrayTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.ArrayTarjetas = [
      {titulo: 'Titulo 1', subtitulo: 'Subtitulo de video 1'},
      {titulo: 'Titulo 2', subtitulo: 'Subtitulo de video 2'},
      {titulo: 'Titulo 3', subtitulo: 'Subtitulo de video 3'},
    ]  
  };
  
}
