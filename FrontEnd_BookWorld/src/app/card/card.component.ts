import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cardData = [
    {
      id: 1,
      title: 'card1',
      body: 'some comment',
      url: 'https://picsum.photos/200/300',
      price: 150,
      rating: 4,
    },
    {
      id: 2,
      title: 'card1',
      body: 'some comment',
      url: 'https://picsum.photos/200/300',
      price: 160,
      rating: 4,
    },
    {
      id: 3,
      title: 'card1',
      body: 'some comment',
      url: 'https://picsum.photos/200/300',
      price: 160,
      rating: 4,
    },
    {
      id: 4,
      title: 'card1',
      body: 'some comment',
      url: 'https://picsum.photos/200/300',

      price: 189,
      rating: 4,
    },
    {
      id: 5,
      title: 'card1',
      body: 'some comment',
      url: 'https://picsum.photos/200/300',
      price: 172,
      rating: 4,
    },
    {
      id: 6,
      title: 'card1',
      body: 'some comment',
      url: 'https://picsum.photos/200/300',
      price: 128,
      rating: 4,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
