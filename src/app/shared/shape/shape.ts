import { Injectable } from '@angular/core';


@Injectable()

export class Shape {
    green: boolean;
    blue: boolean;
    danger: boolean;
    dark: boolean;

    themeColorGreen(): boolean {
        return this.green;
      }

      themeColorBlue(): boolean {
        return this.blue;
      }

      themeColorDanger(): boolean {
        return this.danger;
      }

      themeColorDark(): boolean {
        return this.dark;
      }

      setThemeColorGreen() {
        this.green = true;
        this.blue = false;
        this.danger = false;
      }

      setThemeColorBlue() {
        this.green = false;
        this.blue = true;
        this.danger = false;
      }

      setThemeColorDanger() {
        this.green = false;
        this.blue = false;
        this.danger = true;
      }

      setThemeColorDark() {
        this.green = false;
        this.blue = false;
        this.danger = false;
        if (this.dark === false || this.dark == null) {
        this.dark = true;
      } else {
        this.dark = false;
      }
      }

}
