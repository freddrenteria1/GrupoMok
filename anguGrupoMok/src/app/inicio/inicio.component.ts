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
  FiltroType:string="";
  FiltroDimension:string="";

  displayedColumns: string[] = ['id', 'name', 'type', 'dimension'];
   dataSource1 =new MatTableDataSource<Result>(); //ELEMENT_DATA;

  constructor(private persoService:PersonajesService) { }

  listPers:personajes[]=[];

  @ViewChild(MatPaginator) paginator: MatPaginator=<MatPaginator>{};

  ngOnInit() {

    this.getData();



  }
  getData(){
    this.persoService.GetPersonajes()
      .subscribe(resp =>{

        this.listResul=resp.results;

        if (this.FiltroName.length>0){
          this.listResul=this.listResul.filter( (x1) => x1.name.toUpperCase().includes(this.FiltroName.toUpperCase()) ) ;
        }
        if (this.FiltroType.length>0){
          this.listResul=this.listResul.filter( (x1) => x1.type.toLowerCase().includes(this.FiltroType.toLowerCase()) ) ;
        }
        if (this.FiltroDimension.length>0){
          this.listResul=this.listResul.filter( (x1) => x1.dimension.toLowerCase().includes(this.FiltroDimension.toLowerCase()) ) ;
        }

        this.dataSource1=new MatTableDataSource( this.listResul);

         this.dataSource1.paginator = this.paginator;
      })
  }



  keyFuncName(inpvalue:any){

    this.getData();

  }



  keyFuncType(inpvalue:any){
    this.getData();

  }
  keyFuncDimension(inpvalue:any){
    this.getData();

  }

}
