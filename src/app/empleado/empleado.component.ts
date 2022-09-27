import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  nombre="Luis";
  apellido="Hernandez";
  edad=18;
  empresa="Solser";
  habilitacionDelCuadro= true;
  usuRegistrado = false;
  textoDeRegistro= "Usuario no registrado";


  getRegistroUsuario(){
    this.usuRegistrado = false;
  }

  setUsuarioRegistrado(){
    alert ("El usuario se acaba de registrar");
  }

  setRegistroUsuario(event:Event){
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro= "El usuario se acaba registrar";
    }else{
      this.textoDeRegistro= "No hay nadie registrado";
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
