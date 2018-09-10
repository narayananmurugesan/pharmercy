import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './view/core/register/register.component';
import { LoginComponent } from './view/core/login/login.component';
import { CoreComponent } from './view/core/core.component';
import { PagenotfoundComponent } from './view/core/pagenotfound/pagenotfound.component';
import { DashboradComponent } from './view/core/dashborad/dashborad.component';
import { AppsComponent } from '../app/view/apps.component';
import { CustomerComponent } from './view/customer/customer.component';
import { SupplierComponent } from './view/supplier/supplier.component';

import { SaleComponent } from './view/sale/sale.component';
import { PurchaseComponent } from './view/purchase/purchase.component';
import { ReportComponent } from './view/report/report.component';
import { ContactComponent } from './view/contact/contact.component';
import { ItemsComponent } from './view/items/items.component';
import { BankComponent } from './view/bank/bank.component';

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
        path: 'app', component: AppsComponent,
        children: [
            {path: 'dashboard', component: DashboradComponent},
            {path: 'supplier', component: SupplierComponent},
            {path: 'customer', component: CustomerComponent},
            {path: 'sale', component: SaleComponent},
            {path: 'purchase', component: PurchaseComponent},
            {path: 'report', component: ReportComponent},
            {path: 'contact', component: ContactComponent},
            {path: 'item', component: ItemsComponent},
            {path: 'bank', component: BankComponent}
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
    AppsComponent,
    LoginComponent,
    RegisterComponent,
    DashboradComponent,
    SupplierComponent,
    CustomerComponent,
    SaleComponent,
    PurchaseComponent,
    ReportComponent,
    ContactComponent,
    ItemsComponent,
    BankComponent,
    PagenotfoundComponent
]