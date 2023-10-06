import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  id: string = '0';
  @Input()
  photoCover: string =
    'https://th.bing.com/th/id/OIG.5MKsMso36YyGzRg4L7nA?pid=ImgGn';
  @Input()
  cardTitle: string = 'ERRO! ao carregar titulo';
  constructor() {}

  ngOnInit(): void {}
}
