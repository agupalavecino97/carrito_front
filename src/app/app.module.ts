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
// import { UsuarioComponent } from './components/usuario/usuario.component';


// material

//ng-bootstrap

@NgModule({
  declarations: [
    AppComponent
    //aqui van las declaracion de los componetes
    // UsuarioComponent,
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