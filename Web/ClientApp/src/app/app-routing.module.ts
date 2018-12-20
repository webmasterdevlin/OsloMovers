import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { EditOrderComponent } from "./components/order/edit-order/edit-order.component";
import { NewOrderComponent } from "./components/order/new-order/new-order.component";
import { EditCustomerComponent } from "./components/customer/edit-customer/edit-customer.component";

import { NewCustomerComponent } from "./components/customer/new-customer/new-customer.component";
import { OrdersComponent } from "./components/order/orders.component";
import { CustomersComponent } from "./components/customer/customers.component";
import { NavComponent } from "./components/commons/nav/nav.component";
import { FabComponent } from "./components/commons/fab/fab.component";
import { ViewOrderComponent } from "./components/order/view-order/view-order.component";

export const COMPONENTS = [
  NavComponent,
  FabComponent,
  LoginComponent,
  SignupComponent,
  OrdersComponent,
  ViewOrderComponent,
  EditOrderComponent,
  NewOrderComponent,
  CustomersComponent,
  EditCustomerComponent,
  NewCustomerComponent
];

const routes: Routes = [
  { path: "", component: OrdersComponent },
  { path: "edit-order/:id", component: EditOrderComponent },
  { path: "view-order/:id", component: ViewOrderComponent },
  { path: "new-order", component: NewOrderComponent },
  { path: "customers", component: CustomersComponent },
  { path: "edit-customer/:id", component: EditCustomerComponent },
  { path: "new-customer", component: NewCustomerComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
