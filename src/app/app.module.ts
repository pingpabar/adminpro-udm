import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Rutas
import { APP_ROUTES } from './app.route';

// Módulos
import { PagesModule } from './pages/pages.module';

// Temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Servicios
import { ServiceModule } from './services/service.module';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent  // Añadido para lazy-load
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    // PagesModule,  // comentado por lazy-load, porque se carga de manera dinámica
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule   // Añadido para lazy-load
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
