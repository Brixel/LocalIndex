import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApplicationOverviewComponent } from "./application-overview/application-overview.component";
import { ApplicationsRouting } from "./applications-routing.module";

@NgModule({
  declarations: [ApplicationOverviewComponent],
  imports: [CommonModule, ApplicationsRouting],
})
export class ApplicationsModule {}
