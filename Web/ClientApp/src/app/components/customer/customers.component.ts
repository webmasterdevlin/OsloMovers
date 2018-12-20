import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../../services/customer.service";
import { CustomerModel } from "../../models/customer.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
  loadCustomersResult$: Observable<CustomerModel[]>;
  displayedColumns: string[] = [
    "customerId",
    "fullName",
    "phoneNumber",
    "email"
  ];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  private loadCustomers(): void {
    this.loadCustomersResult$ = this.customerService.getCustomers();
  }
}
