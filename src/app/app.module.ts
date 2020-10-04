import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//routing
import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { NavigationComponent } from './components/navigation/navigation.component';
// import { UsuarioComponent } from './components/usuario/usuario.component';


// material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';

//ng-bootstrap

@NgModule({
  declarations: [
    AppComponent,
    //aqui van las declaracion de los componetes
    ProductoComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //routes
    AppRoutingModule,
    routing,
    //material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    //ng-bootstrap

  ],
  providers: [
    appRoutingProviders,
    //   {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: AuthInterceptor,  esto es para el interceptor para el token
    //     multi: true
    //   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }