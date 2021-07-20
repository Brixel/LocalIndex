import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApplicationOverviewComponent } from "./application-overview/application-overview.component";
const routes: Routes = [
  {
    path: "",
    component: ApplicationOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationsRouting {}
