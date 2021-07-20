import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ConfigurationService {
  constructor(private httpClient: HttpClient) {}

  loadConfiguration(): Observable<Configuration> {
    return this.httpClient.get<Configuration>(`/assets/config.json`);
  }
}
export class Configuration {
  services: Service[];
}
export class Service {
  url: string;
  title: string;
  description: string;
}
