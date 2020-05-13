import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  verdurasOn:boolean = true;
  frutasOn:boolean = false;
  ensaladasOn:boolean = false;

  constructor(public data: ProductosService) { }

  ngOnInit() {

  }

  activar(i:number){

    this.verdurasOn = false;
    this.frutasOn = false;
    this.ensaladasOn = false;

    switch(i){
      case 0:
        this.verdurasOn =true
        break;
      case 1:
        this.frutasOn =true
        break;     

      case 2:
        this.ensaladasOn =true
        break;
    }
  }

}
