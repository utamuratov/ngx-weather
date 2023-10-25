import { Component, inject, OnInit, Signal } from "@angular/core";
import { WeatherService } from "../weather.service";
import { LocationService } from "../location.service";
import { Router } from "@angular/router";
import { ConditionsAndZip } from "../conditions-and-zip.type";
import { NgDestroy } from "app/services/ng-destroy.service";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-current-conditions",
  templateUrl: "./current-conditions.component.html",
  styleUrls: ["./current-conditions.component.css"],
  providers: [NgDestroy],
})
export class CurrentConditionsComponent implements OnInit {
  private weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> =
    this.weatherService.getCurrentConditions();
  $destroy = inject(NgDestroy);

  activeTabIndex = 0;

  ngOnInit(): void {
    this.loadCurrentConditions();
    this.addNewCurrentCondition();
    this.removeAnyCurrentCondition();
  }

  private removeAnyCurrentCondition() {
    this.locationService.removedLocation$
      .asObservable()
      .pipe(takeUntil(this.$destroy))
      .subscribe((zipcode) => {
        if (zipcode) {
          this.weatherService.removeCurrentConditions(zipcode);
          this.locationService.removedLocation$.next(null);
        }
      });
  }

  private addNewCurrentCondition() {
    this.locationService.addedLocation$
      .asObservable()
      .pipe(takeUntil(this.$destroy))
      .subscribe((zipcode) => {
        if (zipcode) {
          this.weatherService.addCurrentConditions(zipcode);
          this.locationService.addedLocation$.next(null);
        }
      });
  }

  private loadCurrentConditions() {
    this.locationService.locations$
      .asObservable()
      .pipe(takeUntil(this.$destroy))
      .subscribe((locations) => {
        this.weatherService.getAllCurrentConditions(locations);
      });
  }

  showForecast(zipcode: string) {
    this.router.navigate(["/forecast", zipcode]);
  }

  removeCondition(e: PointerEvent, zipcode: string, index: number) {
    e.stopPropagation();
    this.locationService.removeLocation(zipcode);
    if (index < this.activeTabIndex) this.activeTabIndex--;
    else if (index === this.activeTabIndex) this.activeTabIndex = 0;
  }
}
