import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {



frutas = [
  {
  "nombre":"frutillas",
  "descripcion":"Exquisitas!",
  "propiedades":['Fortalecen el sistema inmune','evitan el estreñimiento'],
  "precio_inicial":1890,
  "precio_final":1700,
  "medida":"KG",
  "img":"assets/img/frutas/frutilla.jpg"
},
  {
  "nombre":"mango",
  "descripcion":"",
  "propiedades":['ayuda contra la diabetes','rico en aminoácidos'],
  "precio_inicial":1670,
  "precio_final":1300,
  "medida":"unidad",
  "img":"assets/img/frutas/mango.png  "
},
  {
  "nombre":"manzana fuji",
  "descripcion":"a toda hora",
  "propiedades":['reduce el colesterol'],
  "precio_inicial":1340,
  "precio_final":1000,
  "medida":"KG",
  "img":"assets/img/frutas/manzana_fuji.jpg  "
},
  {
  "nombre":"naranja",
  "descripcion":"1 jugo por las mañanas",
  "propiedades":['Alto en Vitamina C'],
  "precio_inicial":1290,
  "precio_final":1100,
  "medida":"KG",
  "img":"assets/img/frutas/naranja.jpg  "
},
  {
  "nombre":"platano",
  "descripcion":"un manjarsss",
  "propiedades":['Evita Calambres','Alto en Potasio'],
  "precio_inicial":1500,
  "precio_final":1200,
  "medida":"KG",
  "img":"assets/img/frutas/platano.jpg  "
},
  {
  "nombre":"uva verde",
  "descripcion":"despues de almuerzo :)",
  "propiedades":['Apoya el sistema cardiovascular'],
  "precio_inicial":1750,
  "precio_final":1500,
  "medida":"KG",
  "img":"assets/img/frutas/uva_verde.jpg"
},
]


  verduras = [{
    "nombre":"tomate",
    "descripcion":"sabias que es una fruta?",
    "propiedades":['Alto en Vitamina C'],
    "precio_inicial":800,
    "precio_final":600,
    "medida":"KG",
    "img":"assets/img/verduras/tomate.jpg"
  },
  {
    "nombre":"ajo",
    "descripcion":"Para los mejores sofritos",
    "propiedades":['Alto en Vitamina B'],
    "precio_inicial":500,
    "precio_final":400,
    "medida":"unidad",
    "img":"assets/img/verduras/ajo.png"
  },
  {
  "nombre":"acelga",
  "descripcion":"acelga descriocino",
  "propiedades":[],
  "precio_inicial":1200,
  "precio_final":1000,
  "medida":"paquete",
  "img":"assets/img/verduras/acelga.jpg"
},
  {
  "nombre":"ají verde",
  "descripcion":"para valientes",
  "propiedades":[],
  "precio_inicial":200,
  "precio_final":100,
  "medida":"2 unidades",
  "img":"assets/img/verduras/aji_verde.png"
},
  {
  "nombre":"apio",
  "descripcion":"descriocino",
  "propiedades":[],
  "precio_inicial":1100,
  "precio_final":900,
  "medida":"mata",
  "img":"assets/img/verduras/apio.jpg"
},
  {
  "nombre":"betarraga",
  "descripcion":"con cebollita :)",
  "propiedades":[],
  "precio_inicial":1200,
  "precio_final":1000,
  "medida":"paquete",
  "img":"assets/img/verduras/betarraga.jpg"
},
  {
  "nombre":"cebolla",
  "descripcion":"para las defensas",
  "propiedades":[],
  "precio_inicial":1200,
  "precio_final":1000,
  "medida":"4 unidades",
  "img":"assets/img/verduras/cebolla.jpg"
},
  {
  "nombre":"cebolla morada",
  "descripcion":"ideal para un ceviche!",
  "propiedades":[],
  "precio_inicial":600,
  "precio_final":450,
  "medida":"unidad",
  "img":"assets/img/verduras/cebolla_morada.jpg"
},
  {
  "nombre":"cebollin",
  "descripcion":"quien dijo carne mongoliana?",
  "propiedades":[],
  "precio_inicial":550,
  "precio_final":500,
  "medida":"paquete",
  "img":"assets/img/verduras/cebollin.jpg"
},
  {
  "nombre":"choclo",
  "descripcion":"humitas o pastel?",
  "propiedades":[],
  "precio_inicial":600,
  "precio_final":400,
  "medida":"paquete",
  "img":"assets/img/verduras/choclo.jpg"
},
  {
  "nombre":"espinaca",
  "descripcion":"que dice popeye?",
  "propiedades":['Alto en Hierro'],
  "precio_inicial":1500,
  "precio_final":1400,
  "medida":"kg",
  "img":"assets/img/verduras/espinaca.jpg"
},
  {
  "nombre":"lechuga costina",
  "descripcion":"no puede faltar",
  "propiedades":[],
  "precio_inicial":1200,
  "precio_final":800,
  "medida":"unidad",
  "img":"assets/img/verduras/lechuga_costina.jpg"
},
  {
  "nombre":"lechuga escarola",
  "descripcion":"para las mejores ensaladas",
  "propiedades":[],
  "precio_inicial":1200,
  "precio_final":600,
  "medida":"paquete",
  "img":"assets/img/verduras/lechuga_scarola.png"
},
  {
  "nombre":"limón",
  "descripcion":"no puede faltar",
  "propiedades":[],
  "precio_inicial":1200,
  "precio_final":1100,
  "medida":"kg",
  "img":"assets/img/verduras/limon.jpg"
},
  {
  "nombre":"palta hass",
  "descripcion":"porque la gente la pide!",
  "propiedades":[],
  "precio_inicial":4500,
  "precio_final":3800,
  "medida":"kg",
  "img":"assets/img/verduras/palta_hass.jpg"
},
  {
  "nombre":"pepino",
  "descripcion":"Refrescante!",
  "propiedades":[],
  "precio_inicial":1200,
  "precio_final":1000,
  "medida":"3 unidades",
  "img":"assets/img/verduras/pepino.jpeg"
},
  {
  "nombre":"pimenton verde",
  "descripcion":"",
  "propiedades":[],
  "precio_inicial":550,
  "precio_final":500,
  "medida":"3 unidades",
  "img":"assets/img/verduras/pimenton_verde.jpg"
},
  {
  "nombre":"zanahoria",
  "descripcion":"para la vista",
  "propiedades":[],
  "precio_inicial":850,
  "precio_final":700,
  "medida":"kg",
  "img":"assets/img/verduras/zanahoria.jpg"
},
  {
  "nombre":"zapallo",
  "descripcion":"y las sopaipillas cuando?",
  "propiedades":[],
  "precio_inicial":750,
  "precio_final":700,
  "medida":"kg",
  "img":"assets/img/verduras/zapallo.jpg"
},
  {
  "nombre":"zapallo italiano",
  "descripcion":"para hacer al horno...",
  "propiedades":[],
  "precio_inicial":1100,
  "precio_final":1000,
  "medida":"3 unidades",
  "img":"assets/img/verduras/zapallo_italiano.jpg"
}

]




  constructor() { 

    this.verduras = this.verduras.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)

  }
}
