import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEducacionComponent } from './components/educacion/agregar-educacion/agregar-educacion.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { EliminarEducacionComponent } from './components/educacion/eliminar-educacion/eliminar-educacion.component';
import { AgregarExperienciaComponent } from './components/experiencia/agregar-experiencia/agregar-experiencia.component';
import { EliminarExperienciaComponent } from './components/experiencia/eliminar-experiencia/eliminar-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { AgregarProyectosComponent } from './components/proyectos/agregar-proyectos/agregar-proyectos.component';
import { EditarProyectosComponent } from './components/proyectos/editar-proyectos/editar-proyectos.component';
import { EliminarProyectosComponent } from './components/proyectos/eliminar-proyectos/eliminar-proyectos.component';
import { AgregarHardComponent } from './components/hard/agregar-hard/agregar-hard.component';
import { EditarHardComponent } from './components/hard/editar-hard/editar-hard.component';
import { EliminarHardComponent } from './components/hard/eliminar-hard/eliminar-hard.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';

const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent},
  {path:'login',component:LoginComponent},
  {path:'agregar-educacion',component:AgregarEducacionComponent},
  {path:'agregar-experiencia',component:AgregarExperienciaComponent},
  {path:'agregar-proyectos',component:AgregarProyectosComponent},
  {path:'agregar-hard',component:AgregarHardComponent},
  {path:'editar-educacion/:id',component:EditarEducacionComponent},
  {path:'editar-experiencia/:id',component:EditarExperienciaComponent},
  {path:'editar-proyectos/:id',component:EditarProyectosComponent},
  {path:'editar-acerca-de/:id',component:EditarAcercaDeComponent},
  {path:'editar-hard/:id',component:EditarHardComponent},
  {path:'eliminar-educacion/:id',component:EliminarEducacionComponent},
  {path:'eliminar-experiencia/:id',component:EliminarExperienciaComponent},
  {path:'eliminar-proyectos/:id',component:EliminarProyectosComponent},
  {path:'eliminar-hard/:id',component:EliminarHardComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
