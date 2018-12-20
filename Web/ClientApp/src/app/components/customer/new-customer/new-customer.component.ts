import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../../../services/customer.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-new-customer",
  templateUrl: "./new-customer.component.html",
  styleUrls: ["./new-customer.component.css"]
})
export class NewCustomerComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private location: Location
  ) {}
  ngOnInit(): void {}
}
