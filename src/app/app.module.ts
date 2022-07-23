import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardComponent } from './components/hard/hard.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarEducacionComponent } from './components/educacion/agregar-educacion/agregar-educacion.component';
import { EliminarEducacionComponent } from './components/educacion/eliminar-educacion/eliminar-educacion.component';

/*angular Material*/
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { EditarEducacionComponent } from './components/educacion/editar-educacion/editar-educacion.component';
import { interceptorProvider } from './service/interceptor-service';
import { AgregarExperienciaComponent } from './components/experiencia/agregar-experiencia/agregar-experiencia.component';
import { EliminarExperienciaComponent } from './components/experiencia/eliminar-experiencia/eliminar-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia/editar-experiencia.component';
import { EditarProyectosComponent } from './components/proyectos/editar-proyectos/editar-proyectos.component';
import { AgregarProyectosComponent } from './components/proyectos/agregar-proyectos/agregar-proyectos.component';
import { EliminarProyectosComponent } from './components/proyectos/eliminar-proyectos/eliminar-proyectos.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
    AgregarEducacionComponent,
    EditarEducacionComponent,
    EliminarEducacionComponent,
    AgregarExperienciaComponent,
    EliminarExperienciaComponent,
    EditarExperienciaComponent,
    EditarProyectosComponent,
    AgregarProyectosComponent,
    EliminarProyectosComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatSliderModule,
    MatIconModule,
    MatTableModule, 
     MatButtonModule
  
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
