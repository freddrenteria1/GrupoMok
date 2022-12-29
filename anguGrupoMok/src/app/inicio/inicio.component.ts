import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { personajes, Result } from '../Clases/personajes';
import { PersonajesService } from '../Servicios/personajes.service';






@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listResul:Result[]=[];
  FiltroName:string="";

  displayedColumns: string[] = ['id', 'name', 'type', 'dimension'];
   dataSource1 =new MatTableDataSource<Result>(); //ELEMENT_DATA;

  constructor(private persoService:PersonajesService) { }

  listPers:personajes[]=[];

  @ViewChild(MatPaginator) paginator: MatPaginator=<MatPaginator>{};

  ngOnInit() {

    this.persoService.GetPersonajes()
      .subscribe(resp =>{
        // this.listResul=resp.results;
        this.listResul=resp.results;
        this.dataSource1=new MatTableDataSource(resp.results);
        this.dataSource1.paginator = this.paginator;
      })

  }

  keyFunc(inpvalue:any){

    this.listResul=this.listResul.filter( (x1) => x1.name.includes(this.FiltroName) ) ;
    this.dataSource1=new MatTableDataSource( this.listResul);

  }

}
