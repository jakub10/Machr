import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
})
export class AppComponent  {
  thousands = 9;
  hundreds = 9;
  tens = 9;
  units = 9;
  currency = 'Usd';

  donated = false;
  donatedAmount = 0;
  donatedCurrency = this.currency;

  intervalTh = setInterval(() => this.increment("thousands"), 500);
  intervalHu = setInterval(() => this.increment("hundreds"), 500);
  intervalTe = setInterval(() => this.increment("tens"), 500);
  intervalUn = setInterval(() => this.increment("units"), 500);
  intervalCu = setInterval(() => this.increment("currency"), 500);

  decrement(value: string) {
    switch(value) {
      case "thousands": {
        if (this.thousands > 0) {
          clearInterval(this.intervalTh);
          this.intervalTh = setInterval(() => this.increment("thousands"), 500);
          this.thousands--;
        }
        break;
      }

      case "hundreds": {
        if (this.hundreds > 0) {
          clearInterval(this.intervalHu);
          this.intervalHu = setInterval(() => this.increment("hundreds"), 500);
          this.hundreds--;
        }
        break;
      }

      case "tens": {
        if (this.tens > 0) {
          clearInterval(this.intervalTe);
          this.intervalTe = setInterval(() => this.increment("tens"), 500);
          this.tens--;
        }
        break;
      }

      case "units": {
        if (this.units > 0) {
          clearInterval(this.intervalUn);
          this.intervalUn = setInterval(() => this.increment("units"), 500);
          this.units--;
        }
        break;
      }

      case "currency": {
        if (this.currency != 'Kč') {
          clearInterval(this.intervalCu);
          this.intervalCu = setInterval(() => this.increment("currency"), 500);
          this.currency = 'Kč';
        }
        break;
      }
    }
  }

  increment(value: string) {
    switch(value) {
      case "thousands": {
        if (this.thousands < 9) this.thousands++;
        break;
      }

      case "hundreds": {
        if (this.hundreds < 9) this.hundreds++;
        break;
      }

      case "tens": {
        if (this.tens < 9) this.tens++;
        break;
      }

      case "units": {
        if (this.units < 9) this.units++;
        break;
      }

      case "currency": {
        if (this.currency == 'Kč') this.currency = 'Usd';
        break;
      }
    }
  }

  donate() {
    this.donated = true;
    this.donatedAmount = this.thousands * 1000 + this.hundreds * 100 + this.tens * 10 + this.units;
    this.donatedCurrency = this.currency;
  }

}
