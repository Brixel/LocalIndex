import { Component, OnInit } from "@angular/core";
import {
  Configuration,
  ConfigurationService,
} from "src/app/core/configuration.service";

@Component({
  selector: "brixel-index-application-overview",
  templateUrl: "./application-overview.component.html",
  styleUrls: ["./application-overview.component.scss"],
})
export class ApplicationOverviewComponent implements OnInit {
  configuration: Configuration;
  constructor(private configurationService: ConfigurationService) {
    this.configurationService
      .loadConfiguration()
      .subscribe((x) => (this.configuration = x));
  }

  ngOnInit() {}
}
