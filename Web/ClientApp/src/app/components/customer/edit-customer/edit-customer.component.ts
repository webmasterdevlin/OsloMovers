import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Location } from "@angular/common";
import { CustomerService } from "../../../services/customer.service";
import { CustomerModel } from "../../../models/customer.model";

@Component({
  selector: "app-edit-customer",
  templateUrl: "./edit-customer.component.html",
  styleUrls: ["./edit-customer.component.css"]
})
export class EditCustomerComponent implements OnInit, OnDestroy {
  customer: CustomerModel;
  sub: Subscription;
  id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location
  ) {
    this.getCustomer();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  back(): void {
    this.location.back();
  }

  private getCustomer(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.sub = this.customerService
      .getCustomerById(this.id)
      .subscribe(data => (this.customer = data));
  }
}
