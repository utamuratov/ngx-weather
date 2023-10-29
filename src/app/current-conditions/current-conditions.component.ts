import { Component, inject, OnInit, Signal } from "@angular/core";
import { WeatherService } from "../weather.service";
import { LocationService } from "../location.service";
import { Router } from "@angular/router";
import { ConditionsAndZip } from "../conditions-and-zip.type";
import { NgDestroy } from "app/services/ng-destroy.service";
import { takeUntil } from "rxjs/operators";

const ACTIVE_TAB_INDEX = "activeTabIndex";

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

  public get activeTabIndex(): number {
    const activeTabIndex = +localStorage.getItem(ACTIVE_TAB_INDEX);
    return activeTabIndex;
  }
  public set activeTabIndex(v: number) {
    localStorage.setItem(ACTIVE_TAB_INDEX, v.toString());
  }

  ngOnInit(): void {
    this.listenLocationsChange();
  }

  private listenLocationsChange() {
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

  removeCondition(index: number) {
    const zipcode = this.currentConditionsByZip()[index].zip;
    this.locationService.removeLocation(zipcode);
    if (index < this.activeTabIndex) this.activeTabIndex--;
    else if (index === this.activeTabIndex) this.activeTabIndex = 0;
  }
}
