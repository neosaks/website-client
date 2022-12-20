import { Component, OnInit } from '@angular/core';

declare class WOW {
  init(): void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    new WOW().init();
  }
}
