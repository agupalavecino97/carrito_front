import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ProductoComponent } from '../app/components/producto/producto.component';

// import { UsuarioComponent } from './components/usuario/usuario.component';

const appRoutes: Routes = [
    // {path: '', redirectTo:'home',canActivate: [LoginGuardGuard], pathMatch: 'full'},
    // {path: '', canActivate: [LoginGuardGuard], component: HomeComponent},
    
    {path: '', component: ProductoComponent},
    // {path: 'usuario', component: UsuarioComponent},
    // {path: 'usuario', canActivate: [LoginGuardGuard], component: UsuarioComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);