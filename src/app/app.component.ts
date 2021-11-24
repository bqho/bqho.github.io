import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavComponent } from './navigation/nav.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'brandon-online-cv';
}
