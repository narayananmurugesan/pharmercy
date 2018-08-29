import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './view/core/register/register.component';
import { LoginComponent } from './view/core/login/login.component';
import { CoreComponent } from './view/core/core.component';
import { PagenotfoundComponent } from './view/core/pagenotfound/pagenotfound.component';
import { DashboradComponent } from './view/core/dashborad/dashborad.component';
import { AppComponent } from './app.component';


const routes: Routes = [
    {path: '', redirectTo: 'core/login', pathMatch: 'full'},
    {
        path: 'core', component: CoreComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent}
        ]
    },
    {
        path: 'app', component: AppComponent,
        children: [
            {path: 'dashboard', component: DashboradComponent}
        ]
    },
    {path: "**", component: PagenotfoundComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
export const routingComponent = [
    CoreComponent,
    LoginComponent,
    RegisterComponent,
    DashboradComponent,
    PagenotfoundComponent
]