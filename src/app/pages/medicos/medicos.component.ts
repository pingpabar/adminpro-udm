import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MedicoService } from '../../services/service.index';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

  medicos: Medico[] = [];
  desde: number = 0;

  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public _medicoService: MedicoService
  ) { }

  ngOnInit() {
    this.cargarMedicos();
  }

  cargarMedicos() {
    // this._medicoService.cargarMedicos()
    //       .subscribe( medicos => this.medicos = medicos );
    this.cargando = true;

    this._medicoService.cargarMedicosDesde( this.desde )
          .subscribe( (resp: any) => {
            // console.log( resp );
            this.totalRegistros = resp.total;
            this.medicos = resp.medicos;
            this.cargando = false;
          });
  }

  cambiarDesde( valor: number ) {
    let desde = this.desde + valor;
    console.log( desde );

    if ( desde >= this.totalRegistros ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarMedicos();
  }

  buscarMedico( termino: string ) {
    if ( termino.length <= 0) {
      this.cargarMedicos();
      return;
    }

    // this._medicoService.buscarMedicos( termino )
    //         .subscribe( medicos => this.medicos = medicos );
    this.cargando = true;

    this._medicoService.buscarMedicos( termino )
          .subscribe( ( medicos: Medico[] ) => {
            console.log( medicos );
            this.medicos = medicos;
            this.cargando = false;
          });
  }


  crearMedico() {

  }

  editarMedico() {

  }

  borrarMedico( medico: Medico ) {
    this._medicoService.borrarMedico( medico._id )
            .subscribe( () => this.cargarMedicos() );
  }
}
