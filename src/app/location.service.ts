import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export const LOCATIONS: string = "locations";

@Injectable()
export class LocationService {
  private _locations: string[] = [];
  public get locations(): string[] {
    return this._locations;
  }
  public set locations(v: string[]) {
    this._locations = v;
    this.locations$.next(v);
  }

  locations$ = new BehaviorSubject<string[]>(this.locations);
  addedLocation$ = new BehaviorSubject<string | undefined>(undefined);
  removedLocation$ = new BehaviorSubject<string | undefined>(undefined);

  constructor() {
    let locationsString = localStorage.getItem(LOCATIONS);
    if (locationsString) this.locations = JSON.parse(locationsString);
  }

  addLocation(zipcode: string) {
    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    this.addedLocation$.next(zipcode);
  }

  removeLocation(zipcode: string) {
    let index = this.locations.indexOf(zipcode);
    if (index !== -1) {
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      this.removedLocation$.next(zipcode);
    }
  }
}
