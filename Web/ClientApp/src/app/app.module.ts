import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule, COMPONENTS } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [
    // BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
