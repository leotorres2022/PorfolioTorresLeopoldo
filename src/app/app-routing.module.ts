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

const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent},
  {path:'login',component:LoginComponent},
  {path:'agregar-educacion',component:AgregarEducacionComponent},
  {path:'agregar-experiencia',component:AgregarExperienciaComponent},
  {path:'editar-educacion/:id',component:EditarEducacionComponent},
  {path:'editar-experiencia/:id',component:EditarExperienciaComponent},
  {path:'eliminar-educacion/:id',component:EliminarEducacionComponent},
  {path:'eliminar-experiencia/:id',component:EliminarExperienciaComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
