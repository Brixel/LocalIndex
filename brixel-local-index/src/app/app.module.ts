import { BrowserModule } from "@angular/platform-browser";
import { ApplicationModule, NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ApplicationsModule } from "./applications/applications.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ApplicationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HttpClientModule],
})
export class AppModule {}
