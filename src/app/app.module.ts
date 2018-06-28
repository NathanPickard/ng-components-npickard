import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgComponentsNpickardModule } from "ng-components-npickard";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgComponentsNpickardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
