import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';


const rutas : Routes=[
  {
    path:'',
    children:[
      {path:'inicio', component: InicioComponent},

    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(rutas)],
  exports:[RouterModule]
})
export class PrestamosRoutingModule { }
