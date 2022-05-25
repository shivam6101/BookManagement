import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CardComponent],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
