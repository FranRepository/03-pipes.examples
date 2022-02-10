import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombreMrv:string = "dc";
  desarrolladopor:string ="jeSuS FRancisCo gOnzAlEz gAonA";
  nombreJuice:string = "manZana";
  personajes: string[]=['Flash','Wonder Woman','Shazam','Cybor','Martian Manhunter'];
  PI:number = Math.PI;
  porcentaje:number = 0.44555;
  arreglo:number[]= [0,1,2,3,4,5,6,7,8,9,10]
  salarioMensualEur:number=6532.56;
  salarioMensualMXN:number=45232.56;
  salarioMensualUSN:number=4299.99;
  idioma:string='es-MX'; 
  videoUrl:string='https://www.youtube.com/embed/ID6__O04DIw';
  fecha1:Date=new Date();

  
  valorPromesa=new Promise<string>((resolve=>{
       setTimeout(()=>{
          resolve('Llego la data');
       },8500)
  }))

  

  heroe={
    nombre:"Bruce Wayne",
    clave:"Batman",
    edad:35,
    direccion:{
    calle:"Gerald Hill",
    numero:775,
    distrito:"Ciudad Gothica",
    casa:"Mansion Wayne"
    }
   }


   changeLenguaje(idiom: string): void {
    this.idioma = idiom;
 }

}

