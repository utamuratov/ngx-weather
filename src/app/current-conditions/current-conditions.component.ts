import { Component, inject, OnInit, Signal } from "@angular/core";
import { WeatherService } from "../weather.service";
import { LocationService } from "../location.service";
import { Router } from "@angular/router";
import { ConditionsAndZip } from "../conditions-and-zip.type";

@Component({
  selector: "app-current-conditions",
  templateUrl: "./current-conditions.component.html",
  styleUrls: ["./current-conditions.component.css"],
})
export class CurrentConditionsComponent implements OnInit {
  private weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> =
    this.weatherService.getCurrentConditions();

  ngOnInit(): void {
    this.loadCurrentConditions();
    this.addNewCurrentCondition();
    this.removeAnyCurrentCondition();
  }

  private removeAnyCurrentCondition() {
    this.locationService.removedLocation$.subscribe((zipcode) => {
      if (zipcode) this.weatherService.removeCurrentConditions(zipcode);
    });
  }

  private addNewCurrentCondition() {
    this.locationService.addedLocation$.subscribe((zipcode) => {
      if (zipcode) this.weatherService.addCurrentConditions(zipcode);
    });
  }

  private loadCurrentConditions() {
    this.locationService.locations$.subscribe((locations) => {
      for (let loc of locations) this.weatherService.addCurrentConditions(loc);
    });
  }

  showForecast(zipcode: string) {
    this.router.navigate(["/forecast", zipcode]);
  }
}
